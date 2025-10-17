<?php
// Webhook do Mercado Pago -> confirma pagamento PIX e envia Purchase para Facebook CAPI
require_once __DIR__ . '/mp-config.php';

require_auth();

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!$data) {
  respond_json(['status' => 'ignored', 'reason' => 'invalid json']);
}

// Estrutura típica do webhook do Mercado Pago
// { "id": "xxxxxxxxx", "type": "payment" }
if (($data['type'] ?? '') !== 'payment') {
  respond_json(['status' => 'ignored', 'reason' => 'not payment']);
}

$paymentId = $data['data']['id'] ?? null;
if (!$paymentId) {
  respond_json(['status' => 'ignored', 'reason' => 'missing payment id']);
}

// Buscar detalhes do pagamento no MP
global $MP_ACCESS_TOKEN, $FB_PIXEL_ID, $FB_CAPI_TOKEN, $SITE_URL;

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://api.mercadopago.com/v1/payments/' . urlencode($paymentId));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
  'Authorization: Bearer ' . $MP_ACCESS_TOKEN,
  'Content-Type: application/json'
]);
$resp = curl_exec($ch);
if ($resp === false) {
  respond_json(['error' => 'curl_error', 'message' => curl_error($ch)], 500);
}
$http = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http >= 400) {
  respond_json(['error' => 'mp_api_error', 'status' => $http, 'body' => $resp], 502);
}

$payment = json_decode($resp, true);
if (!$payment) {
  respond_json(['error' => 'invalid_mp_response'], 500);
}

$status = $payment['status'] ?? '';
$amount = (float)($payment['transaction_amount'] ?? 0);
$currency = $payment['currency_id'] ?? 'BRL';

// Confirmar pagamento aprovado
if ($status !== 'approved') {
  respond_json(['status' => 'ignored', 'reason' => 'status=' . $status]);
}

// Tentar obter e-mail do pagador
$email = $payment['payer']['email'] ?? null;
$client_ip = $_SERVER['REMOTE_ADDR'] ?? null;

// Enviar evento Purchase via Facebook CAPI
if ($FB_CAPI_TOKEN && $FB_CAPI_TOKEN !== 'COLOQUE_SEU_FB_CAPI_TOKEN_AQUI') {
  $capiPayload = [
    'data' => [[
      'event_name' => 'Purchase',
      'event_time' => time(),
      'action_source' => 'website',
      'event_source_url' => $SITE_URL,
      'user_data' => array_filter([
        'em' => $email ? [ hash('sha256', strtolower(trim($email))) ] : null,
        'client_ip_address' => $client_ip,
        'client_user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? null,
      ]),
      'custom_data' => [
        'currency' => $currency,
        'value' => $amount,
      ],
    ]],
    'test_event_code' => null
  ];

  $c = curl_init();
  $url = 'https://graph.facebook.com/v18.0/' . urlencode($FB_PIXEL_ID) . '/events?access_token=' . urlencode($FB_CAPI_TOKEN);
  curl_setopt($c, CURLOPT_URL, $url);
  curl_setopt($c, CURLOPT_POST, true);
  curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($c, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
  curl_setopt($c, CURLOPT_POSTFIELDS, json_encode($capiPayload));
  $cresp = curl_exec($c);
  $chttp = curl_getinfo($c, CURLINFO_HTTP_CODE);
  curl_close($c);
}

respond_json(['status' => 'ok', 'paymentId' => $paymentId, 'amount' => $amount, 'currency' => $currency]);


