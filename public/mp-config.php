<?php
// Copie este arquivo como mp-config.php e preencha os tokens abaixo

// Mercado Pago Access Token (Server Side)
// Recomenda-se configurar em variável de ambiente MP_ACCESS_TOKEN na Hostinger
$MP_ACCESS_TOKEN = getenv('MP_ACCESS_TOKEN') ?: 'COLOQUE_SEU_MP_ACCESS_TOKEN_AQUI';

// Facebook Pixel e Conversions API Token (Server Side)
// Recomenda-se configurar em variáveis de ambiente FB_PIXEL_ID e FB_CAPI_TOKEN
$FB_PIXEL_ID = getenv('FB_PIXEL_ID') ?: '1175230077254220';
$FB_CAPI_TOKEN = getenv('FB_CAPI_TOKEN') ?: 'COLOQUE_SEU_FB_CAPI_TOKEN_AQUI';

// Domínio do site (para event_source_url)
$SITE_URL = getenv('SITE_URL') ?: 'https://seu-dominio.com';

function respond_json($data, $status = 200) {
  http_response_code($status);
  header('Content-Type: application/json; charset=utf-8');
  echo json_encode($data);
  exit;
}

function require_auth() {
  global $MP_ACCESS_TOKEN;
  if (!$MP_ACCESS_TOKEN || $MP_ACCESS_TOKEN === 'COLOQUE_SEU_MP_ACCESS_TOKEN_AQUI') {
    respond_json(['error' => 'MP access token não configurado'], 500);
  }
}


