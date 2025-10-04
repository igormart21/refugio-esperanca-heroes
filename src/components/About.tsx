import { Heart, Users, Award } from "lucide-react";

const About = () => {
  return (
    <section className="bg-gradient-warm p-6 md:px-12 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Quem somos</h2>
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
