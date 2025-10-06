import { Button } from "@/components/ui/button";
import { Copy, ShieldCheck, Heart, CircleCheckBig, Download } from "lucide-react";
// imagens do apelo removidas desta seção (usadas agora em About)
import { toast } from "sonner";
import { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode";
import { generatePixPayload } from "@/lib/pix";

const DonateSection = () => {
  const pixKey = "refugioesperanca.ong@gmail.com";

  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const payload = useMemo(() => generatePixPayload({
    pixKey,
    merchantName: ".",
    merchantCity: ".",
    description: "Refugio Esperanca",
  }), [pixKey]);

  useEffect(() => {
    QRCode.toDataURL(payload, { margin: 1, width: 480 })
      .then(setQrDataUrl)
      .catch(() => setQrDataUrl(""));
  }, [payload]);

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey);
    toast.success("Chave PIX copiada!");
  };

  const downloadQr = () => {
    if (!qrDataUrl) return;
    const a = document.createElement("a");
    a.href = qrDataUrl;
    a.download = "pix-qrcode.png";
    a.click();
  };

  return (
    <section className="bg-background py-16 px-6 md:px-12" id="donate">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
          💚 Doação PIX
        </span>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Como doar via PIX</h2>
        <p className="text-muted-foreground mb-8">
          Sua doação chegará diretamente aos nossos animais. Atuamos desde 2015, toda doação é essencial para manter os animais.
        </p>
        
        <div className="bg-accent rounded-2xl shadow-md p-6 md:p-8 mb-10">
          <p className="text-card-foreground font-medium mb-1">Chave PIX:</p>
          <p className="text-lg font-bold text-foreground mb-4">{pixKey}</p>
          
          <div className="flex flex-col items-center gap-4 mb-6">
            {qrDataUrl && (
              <img src={qrDataUrl} alt="QR Code PIX" className="w-56 h-56 rounded-md bg-white p-2" />
            )}
            <div className="flex gap-3">
              <Button onClick={copyPixKey} size="lg" className="shadow-md">
                <Copy className="mr-2 h-5 w-5" />
                Copiar chave PIX
              </Button>
              <Button onClick={downloadQr} size="lg" variant="secondary" className="shadow-md">
                <Download className="mr-2 h-5 w-5" />
                Baixar QR Code
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bloco de apelo movido para a seção About */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-card-foreground text-sm">
          <div className="flex flex-col items-center">
            <ShieldCheck className="text-secondary w-7 h-7 mb-2" />
            <p className="font-semibold">Seguro</p>
            <p className="text-muted-foreground">PIX oficial registrado</p>
          </div>
          
          <div className="flex flex-col items-center">
            <Heart className="text-primary w-7 h-7 mb-2" />
            <p className="font-semibold">Direto</p>
            <p className="text-muted-foreground">100% para os animais</p>
          </div>
          
          <div className="flex flex-col items-center">
            <CircleCheckBig className="text-success w-7 h-7 mb-2" />
            <p className="font-semibold">Transparente</p>
            <p className="text-muted-foreground">10 anos de atuação</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
