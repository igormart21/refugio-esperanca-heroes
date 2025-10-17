// Utilidade simples para gerar payload PIX (copia e cola) com chave, nome e cidade
// Implementa o formato EMV e o cálculo CRC16-CCITT (polinômio 0x1021)

export interface PixPayloadOptions {
  pixKey: string; // chave PIX (e-mail, aleatória, etc.)
  merchantName?: string; // nome do recebedor (opcional)
  merchantCity?: string; // cidade do recebedor (opcional)
  amount?: string; // valor opcional, em formato 0.00
  description?: string; // descrição opcional
  txId?: string; // identificador da transação para conciliação
}

function toTLV(id: string, value: string): string {
  const length = value.length.toString().padStart(2, "0");
  return `${id}${length}${value}`;
}

function crc16ccitt(payload: string): string {
  let crc = 0xffff;
  const polynomial = 0x1021;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = (crc << 1) ^ polynomial;
      } else {
        crc <<= 1;
      }
      crc &= 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

export function generatePixPayload(options: PixPayloadOptions): string {
  const { pixKey, merchantName = ".", merchantCity = ".", amount, description, txId } = options;

  // IDs EMV
  const ID_PAYLOAD_FORMAT = "00"; // 01 fixo para PIX
  const ID_POI_METHOD = "01"; // 12 para estático
  const ID_MERCHANT_ACCOUNT = "26"; // GUI e chave
  const ID_MERCHANT_CATEGORY_CODE = "52"; // 0000
  const ID_TRANSACTION_CURRENCY = "53"; // 986 BRL
  const ID_TRANSACTION_AMOUNT = "54"; // opcional
  const ID_COUNTRY_CODE = "58"; // BR
  const ID_MERCHANT_NAME = "59";
  const ID_MERCHANT_CITY = "60";
  const ID_ADDITIONAL_DATA = "62"; // TxId
  const ID_CRC16 = "63";

  const ID_GUI = "00"; // dentro do 26
  const ID_KEY = "01"; // dentro do 26
  const ID_DESCRIPTION = "02"; // dentro do 26 (descrição)

  const gui = toTLV(ID_GUI, "br.gov.bcb.pix");
  const key = toTLV(ID_KEY, pixKey);
  const desc = description ? toTLV(ID_DESCRIPTION, description) : "";
  const merchantAccountInfo = toTLV(ID_MERCHANT_ACCOUNT, `${gui}${key}${desc}`);

  let payload = "";
  payload += toTLV(ID_PAYLOAD_FORMAT, "01");
  payload += toTLV(ID_POI_METHOD, "12");
  payload += merchantAccountInfo;
  payload += toTLV(ID_MERCHANT_CATEGORY_CODE, "0000");
  payload += toTLV(ID_TRANSACTION_CURRENCY, "986");
  if (amount) payload += toTLV(ID_TRANSACTION_AMOUNT, amount);
  payload += toTLV(ID_COUNTRY_CODE, "BR");
  payload += toTLV(ID_MERCHANT_NAME, merchantName); // máx 25 chars em muitos leitores
  payload += toTLV(ID_MERCHANT_CITY, merchantCity);
  // TxId (05) até 25 caracteres. Usa *** como padrão quando não informado
  const txIdValue = txId && txId.length > 0 ? txId.slice(0, 25) : "***";
  payload += toTLV(ID_ADDITIONAL_DATA, toTLV("05", txIdValue)); // TxId

  // CRC16
  const partial = payload + ID_CRC16 + "04"; // reservar espaço
  const crc = crc16ccitt(partial);
  payload = partial + crc;
  return payload;
}


