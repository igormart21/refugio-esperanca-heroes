import { Heart, Instagram, Facebook, Mail, Phone, FileText, ShieldCheck, Eye } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center rounded-full">
              <Heart className="w-5 h-5" />
            </span>
            <h3 className="text-background font-bold text-lg">Refúgio Esperança</h3>
          </div>
          <p className="text-sm leading-relaxed opacity-80">
            Projeto independente de proteção animal. Desde 2015 transformando vidas e levando esperança aos animais abandonados.
          </p>
          <div className="flex gap-3 mt-5">
            <a href="#" className="p-2 bg-background/10 hover:bg-background/20 rounded-full transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 bg-background/10 hover:bg-background/20 rounded-full transition">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-background font-semibold mb-4">Contato</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              refugioesperanca.ong@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              WhatsApp: (11) 9 8765-4321
            </li>
          </ul>
          <div className="bg-background/10 text-background p-4 rounded-lg mt-5">
            <p className="text-sm font-semibold">PIX para doações:</p>
            <p className="text-xs break-words mt-1">refugioesperanca.ong@gmail.com</p>
          </div>
        </div>

        <div>
          <h4 className="text-background font-semibold mb-4">Informações</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2 hover:opacity-100 cursor-pointer">
              <FileText className="w-4 h-4" />
              Política de Privacidade
            </li>
            <li className="flex items-center gap-2 hover:opacity-100 cursor-pointer">
              <ShieldCheck className="w-4 h-4" />
              Termos de Uso
            </li>
            <li className="flex items-center gap-2 hover:opacity-100 cursor-pointer">
              <Eye className="w-4 h-4" />
              Prestar Contas
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-between">
          <div className="bg-success/20 border border-success text-success-foreground rounded-lg p-5 text-sm font-medium">
            <p className="font-semibold">✅ ONG Verificada</p>
            <p className="text-xs mt-1 opacity-90">10 anos de atuação comprovada e transparente</p>
          </div>
        </div>
      </div>

      <div className="border-t border-background/20 mt-10 pt-6 text-center text-xs opacity-70 max-w-7xl mx-auto">
        © {new Date().getFullYear()} Refúgio Esperança. Todos os direitos reservados. Projeto independente de proteção animal desde 2015.
      </div>
    </footer>
  );
};

export default Footer;
