import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

interface Testimonial {
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ana Paula Costa",
    location: "São Paulo, SP",
    text: "Acompanho o trabalho da Maria há anos. É inspirador ver a dedicação dela com cada animal. Minha doação mensal é pequena, mas sei que faz diferença.",
    avatar: testimonial1,
  },
  {
    name: "Carlos Mendes",
    location: "Rio de Janeiro, RJ",
    text: "Adotei meu cachorro através do Refúgio Esperança. O processo foi transparente e cuidadoso. Hoje ele é parte da família!",
    avatar: testimonial2,
  },
  {
    name: "Mariana Santos",
    location: "Belo Horizonte, MG",
    text: "Sempre que posso, faço uma doação. Ver os relatos e fotos nas redes sociais me emociona. Trabalho sério e verdadeiro.",
    avatar: testimonial3,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gradient-to-b from-hero to-background py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Depoimentos Verificados</h2>
        <p className="text-muted-foreground mb-10">Veja o que nossos doadores e adotantes falam sobre nosso trabalho</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-card-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
