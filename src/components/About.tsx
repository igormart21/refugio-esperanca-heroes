import { Heart, Users, Award } from "lucide-react";
import photoHero1 from "@/assets/PHOTO-2025-10-06-09-10-50.jpg";
import photoHero2 from "@/assets/PHOTO-2025-10-06-09-10-47.jpg";

const About = () => {
  return (
    <section className="bg-gradient-warm p-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto text-center">

        {/* Bloco de apelo com imagens */}
        <div className="mt-2 bg-accent rounded-2xl shadow-md p-6 md:p-8 text-left">
          <div className="space-y-4">
            <p className="text-card-foreground text-base md:text-lg font-semibold">🙌 Toda ajuda é bem-vinda:</p>
            <p className="text-muted-foreground">
              Mesmo uma doação de R$ 1,00 faz diferença. E se não puder doar, compartilhe com amigos, grupos e familiares. Juntos, conseguimos transformar sofrimento em esperança!
            </p>
            <p className="text-destructive font-medium">
              O tempo está contra nós, e cada minuto faz diferença para essas vidas que dependem unicamente da nossa solidariedade.
            </p>
            <div className="pt-2 grid grid-cols-1 gap-3">
              <img src={photoHero2} alt="Casos de resgate que precisam de ajuda" className="rounded-lg object-cover h-40 md:h-64 w-full" />
              <img src={photoHero1} alt="Animal resgatado em cuidados" className="rounded-lg object-cover h-40 md:h-64 w-full" />
            </div>
          </div>
        </div>

        <h2 className="mt-12 text-3xl md:text-4xl font-bold mb-3 text-foreground">Quem somos</h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Há mais de 10 anos, o Refúgio Esperança resgata e cuida de animais em situação de risco. Mais de 800 vidas já foram salvas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          <div className="bg-card rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <Heart className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-3xl md:text-5xl font-extrabold text-primary">+800</h3>
            <p className="mt-2 text-card-foreground text-sm md:text-base font-medium">ANIMAIS RESGATADOS</p>
          </div>

          <div className="bg-card rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <Users className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-3xl md:text-5xl font-extrabold text-secondary">+150</h3>
            <p className="mt-2 text-card-foreground text-sm md:text-base font-medium">ATUALMENTE EM ABRIGO</p>
          </div>

          <div className="bg-card rounded-2xl shadow-md p-6 md:p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <Award className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-3xl md:text-5xl font-extrabold text-primary">10</h3>
            <p className="mt-2 text-card-foreground text-sm md:text-base font-medium">ANOS NA CAUSA</p>
          </div>
        </div>

        <p className="mt-10 italic text-muted-foreground">"Transparência é construída com histórias e resultados"</p>
      </div>
    </section>
  );
};

export default About;
