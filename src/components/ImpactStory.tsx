import founderImage from "@/assets/founder.jpg";

const ImpactStory = () => {
  return (
    <section className="px-6 py-12 md:px-12 bg-gradient-warm">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-5 text-foreground max-w-3xl mx-auto text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug text-center">
          Dedicada, resiliente,{" "}
          <span className="text-secondary font-bold">mas inabalável</span>.<br />
          Maria Silva salva vidas há mais de{" "}
          <span className="text-primary font-bold">10 anos</span> com amor e coragem.
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2">
            <img 
              className="w-full rounded-xl shadow-lg object-cover" 
              src={founderImage} 
              alt="Maria Silva - Fundadora do Refúgio Esperança" 
            />
            <p className="text-destructive text-xs mt-2">Maria Silva - Fundadora</p>
          </div>
          
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-lg font-medium text-foreground">
              <span className="text-primary font-bold">Cada real doado</span> ajuda a manter mais de{" "}
              <span className="text-secondary font-bold">150 animais vivos e seguros</span>
            </p>
            {/* Espaço reservado para futuros CTAs específicos desta seção */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStory;
