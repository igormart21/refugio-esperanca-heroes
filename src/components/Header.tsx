import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="w-full py-4 px-4 sm:px-6 md:px-12 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Logo Refúgio Esperança" className="h-10 w-auto" />
          <span className="font-bold text-lg hidden sm:block">Refúgio Esperança</span>
        </a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:underline">Sobre</a>
          <a href="#donate" className="hover:underline">Doar</a>
          <a href="#transparency" className="hover:underline">Transparência</a>
          <a href="#contact" className="hover:underline">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;


