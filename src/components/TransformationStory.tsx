import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import transformationImage from "@/assets/transformation-dog.jpg";

const TransformationStory = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-background p-6 md:px-12 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Histórias de Transformação</h2>
        <p className="text-muted-foreground mb-10">
          Veja como o amor e cuidado transformam vidas abandonadas em histórias de esperança
        </p>
        
        <div className="bg-accent rounded-2xl shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0">
            <img 
              src={transformationImage} 
              alt="Transformação: antes e depois do resgate" 
              className="w-full md:w-80 h-64 object-cover rounded-xl shadow-md"
            />
          </div>
          
          <div className="flex-1 text-left">
            <div className="mb-2">
              <span className="text-xs font-semibold text-destructive bg-destructive/10 px-2 py-1 rounded">ANTES</span>
              <span className="mx-2">→</span>
              <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">DEPOIS</span>
            </div>
            
            <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Thor</h3>
            <p className="text-card-foreground mb-4">
              Foi resgatado na rodovia, extremamente magro e muito doente. Durante o tratamento recuperou sua saúde e 
              ganhou 8kg. Hoje é um cão alegre e cheio de energia, esperando por uma família para chamar de sua.
            </p>
            
            <Button onClick={() => scrollToSection('donate')} variant="secondary" size="lg">
              <Heart className="mr-2 h-5 w-5" />
              Apoiar resgates como este
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationStory;
