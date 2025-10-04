import { DollarSign, Syringe, Sparkles, Wrench, Stethoscope, Info } from "lucide-react";
import proof1 from "@/assets/proof1.jpeg";
import proof2 from "@/assets/proof2.jpeg";
import proof3 from "@/assets/proof3.jpeg";
import proof4 from "@/assets/proof4.jpeg";
import proof5 from "@/assets/proof5.jpeg";

const TransparencySection = () => {
  const usageItems = [
    {
      icon: DollarSign,
      title: "Rações para +150 animais",
      description: "Alimentação diária balanceada para todos os animais do abrigo",
    },
    {
      icon: Syringe,
      title: "Medicamentos e vacinas",
      description: "Prevenção e tratamento de doenças, vermifugação e imunização",
    },
    {
      icon: Sparkles,
      title: "Higiene e limpeza do abrigo",
      description: "Produtos de limpeza, desinfetantes e materiais de higiene",
    },
    {
      icon: Wrench,
      title: "Manutenção do espaço",
      description: "Reparos, melhorias na infraestrutura e equipamentos",
    },
    {
      icon: Stethoscope,
      title: "Emergências veterinárias",
      description: "Cirurgias, exames e tratamentos especializados urgentes",
    },
  ];

  return (
    <section className="bg-accent p-6 md:px-12 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
          ℹ️ Transparência
        </span>
        
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">Como sua doação ajuda</h2>
        <p className="text-muted-foreground mb-12">
          Cada real doado é investido diretamente no cuidado e bem-estar dos nossos animais
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
          {usageItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-card rounded-2xl shadow-md p-6 flex gap-4 items-start hover:shadow-lg transition-shadow">
                <div className="bg-accent p-3 rounded-xl flex-shrink-0">
                  <Icon className="text-primary w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-card rounded-2xl shadow-md p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-secondary/10 p-3 rounded-full">
              <Info className="text-secondary w-7 h-7" />
            </div>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-2">Prestação de Contas Transparente</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base mb-6">
            Há 13 anos publicamos nossa luta em fotos, histórias e resultados visíveis. Acreditamos que a transparência é fundamental para construir confiança com nossos doadores.
          </p>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <img 
              src={proof1} 
              alt="Comprovante de pagamento - Compra de materiais" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
            />
            <img 
              src={proof2} 
              alt="Comprovante de pagamento - Medicamentos" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
            />
            <img 
              src={proof3} 
              alt="Comprovante de pagamento - Materiais para abrigo" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
            />
            <img 
              src={proof4} 
              alt="Comprovante de pagamento - Atendimento veterinário" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
            />
            <img 
              src={proof5} 
              alt="Comprovante de pagamento - Materiais diversos" 
              className="w-full h-48 object-cover rounded-lg shadow-md hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;
