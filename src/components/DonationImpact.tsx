import { Button } from "@/components/ui/button";

interface DonationCard {
  amount: number;
  description: string;
}

const donations: DonationCard[] = [
  { amount: 5, description: "Ajuda a alimentar um animal por um dia" },
  { amount: 15, description: "Alimenta 1 animal por uma semana" },
  { amount: 30, description: "Fornece ração e medicamento básico para 2 animais por 10 dias" },
  { amount: 75, description: "Compra um saco de 10kg de ração que alimenta 5 animais por 1 mês" },
  { amount: 150, description: "Cobre vacinas e vermífugos para 4 animais resgatados" },
  { amount: 350, description: "Garante tratamento veterinário completo para 3 animais por 1 mês" },
  { amount: 750, description: "Cobre cirurgias de emergência e recuperação de animais em estado crítico" },
];

const DonationImpact = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-6xl text-center p-6 rounded-xl m-auto my-16 bg-gradient-warm">
      <h2 className="text-2xl md:text-4xl font-bold mb-2 text-foreground">O Impacto da Sua Doação</h2>
      <p className="text-muted-foreground mb-10">Veja como cada contribuição ajuda nossos animais</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {donations.map((donation) => (
          <div 
            key={donation.amount}
            className="bg-card border border-border rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full shadow-sm">
                <span className="w-12 text-center">R$ {donation.amount}</span>
              </div>
              <p className="text-card-foreground text-sm md:text-base text-left flex-1">
                {donation.description}
              </p>
            </div>
            <Button 
              className="w-full"
              onClick={() => scrollToSection('donate')}
            >
              Doar R$ {donation.amount}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationImpact;
