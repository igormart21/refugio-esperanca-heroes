import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import beforeAfter1 from "@/assets/PHOTO-2025-10-06-09-40-09.jpg";
import beforeAfter2 from "@/assets/PHOTO-2025-10-06-09-39-29.jpg";
import beforeAfter3 from "@/assets/PHOTO-2025-10-06-09-38-54.jpg";

const stackedImages = [beforeAfter1, beforeAfter2, beforeAfter3];

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
        <div className="w-full max-w-5xl mx-auto space-y-6">
          {stackedImages.map((imgSrc, idx) => (
            <div key={idx} className="bg-accent rounded-2xl shadow-md p-3">
              <img
                src={imgSrc}
                alt={`Antes e depois ${idx + 1}`}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          ))}
          <div className="pt-2">
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
