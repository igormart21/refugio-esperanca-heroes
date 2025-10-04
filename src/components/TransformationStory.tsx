import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import transformation1 from "@/assets/transformation-1.jpeg";
import transformation2 from "@/assets/transformation-2.jpeg";
import transformation3 from "@/assets/transformation-3.jpeg";
import transformation4 from "@/assets/transformation-4.jpeg";
import transformation5 from "@/assets/transformation-5.webp";

const transformations = [
  {
    id: 1,
    name: "Rex",
    image: transformation1,
    story: "Resgatado em estado crítico, coberto de lama e parasitas. Após meses de tratamento e muito carinho, hoje é um cão saudável e feliz.",
  },
  {
    id: 2,
    name: "Bella",
    image: transformation2,
    story: "Filhote abandonada ainda muito pequena, desnutrida e fraca. Com cuidados intensivos se tornou uma cachorrinha forte e brincalhona.",
  },
  {
    id: 3,
    name: "Zeca",
    image: transformation3,
    story: "Idoso e sem esperança, foi encontrado vagando pelas ruas. Recebeu tratamento veterinário e recuperou sua alegria de viver.",
  },
  {
    id: 4,
    name: "Nina",
    image: transformation4,
    story: "Resgatada em péssimas condições, assustada e desconfiada. Com amor e paciência, voltou a confiar nas pessoas.",
  },
  {
    id: 5,
    name: "Snow",
    image: transformation5,
    story: "Encontrada em estado grave, com problemas de pele e muito debilitada. Hoje está completamente recuperada e radiante.",
  },
];

const TransformationStory = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background p-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Histórias de Transformação</h2>
        <p className="text-muted-foreground mb-10">
          Veja como o amor e cuidado transformam vidas abandonadas em histórias de esperança
        </p>
        
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {transformations.map((transformation) => (
              <CarouselItem key={transformation.id}>
                <div className="bg-accent rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center gap-6">
                  <div className="w-full max-w-2xl">
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-destructive bg-destructive/10 px-3 py-1 rounded">ANTES</span>
                      <span className="mx-2">→</span>
                      <span className="text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1 rounded">DEPOIS</span>
                    </div>
                    <img 
                      src={transformation.image} 
                      alt={`Transformação de ${transformation.name}: antes e depois do resgate`}
                      className="w-full h-64 md:h-80 object-contain rounded-xl shadow-md"
                    />
                  </div>
                  
                  <div className="w-full text-center">
                    <h3 className="text-lg md:text-xl font-bold text-primary mb-4">{transformation.name}</h3>
                    <p className="text-card-foreground mb-6 max-w-2xl mx-auto">
                      {transformation.story}
                    </p>
                    
                    <Button onClick={() => scrollToSection('donate')} variant="secondary" size="lg">
                      <Heart className="mr-2 h-5 w-5" />
                      Apoiar resgates como este
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TransformationStory;
