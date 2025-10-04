import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

const MonthlyGoal = () => {
  const current = 4850;
  const goal = 10000;
  const percentage = (current / goal) * 100;
  const remaining = goal - current;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-hero to-background p-6 md:px-12 py-16">
      <div className="max-w-3xl mx-auto bg-card shadow-lg rounded-2xl p-8 text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-accent text-accent-foreground font-medium text-sm mb-4">
          <TrendingUp className="inline-block w-4 h-4 mr-1" />
          Meta do Mês
        </span>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-card-foreground">Ajude-nos a alcançar nossa meta</h2>
        <p className="text-muted-foreground mb-6">Cada doação mantém +150 animais vivos com ração, cuidados e abrigo</p>
        
        <div className="text-left mb-3">
          <p className="text-sm font-medium text-card-foreground mb-1">Progresso atual</p>
          <div className="w-full h-4 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-4 bg-gradient-to-r from-success to-secondary rounded-full transition-all duration-500" 
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="font-semibold text-card-foreground">R$ {current.toLocaleString('pt-BR')}</span>
            <span className="text-secondary font-medium">{percentage.toFixed(1)}%</span>
          </div>
          <p className="text-sm text-muted-foreground mt-1">Meta: R$ {goal.toLocaleString('pt-BR')}</p>
        </div>
        
        <div className="bg-accent rounded-xl py-4 px-6 mt-6">
          <p className="text-sm text-muted-foreground">Faltam apenas</p>
          <p className="text-2xl md:text-3xl font-extrabold text-primary">R$ {remaining.toLocaleString('pt-BR')}</p>
          <p className="text-sm text-muted-foreground">para alcançarmos nossa meta mensal</p>
        </div>
        
        <Button 
          className="mt-6 shadow-md" 
          size="lg"
          onClick={() => scrollToSection('donate')}
        >
          <Heart className="mr-2 h-5 w-5" />
          Apoiar agora
        </Button>
      </div>
    </section>
  );
};

const Heart = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
  </svg>
);

export default MonthlyGoal;
