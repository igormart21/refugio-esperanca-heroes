import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-hero py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-10">
        <div>
          <h1 className="font-extrabold leading-tight text-3xl sm:text-4xl lg:text-6xl text-foreground">
            Desde 2015, transformamos abandono em esperança.{" "}
            <span className="text-primary">Com R$ 5 você já ajuda a alimentar um animal.</span>{" "}
            <span className="text-secondary">Cada vida importa.</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mt-4">
            Há 10 anos atuamos como projeto independente. Sem apoio público, já resgatamos mais de 800 animais.
          </p>
          <p className="my-3 text-sm md:text-lg text-success font-medium">
            Abrigo Independente • Desde 2015 • +800 animais resgatados
          </p>
        </div>

        <div className="w-full aspect-video max-w-3xl rounded-2xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/BbYIjD5ek-w?rel=0&modestbranding=1&playsinline=1"
            title="Vídeo principal do Refúgio Esperança"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <Button 
          size="lg" 
          className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          onClick={() => scrollToSection('donate')}
        >
          <Heart className="mr-2 h-5 w-5" />
          Doar agora
        </Button>
      </div>
    </section>
  );
};

export default Hero;
