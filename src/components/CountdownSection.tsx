import { Card } from "@/components/ui/card";
import { Heart, Plane, Home } from "lucide-react";

const CountdownSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
          A Contagem Regressiva
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Cada dia que passa é um dia a menos para te ter de volta em meus braços
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-8 shadow-soft border-0 bg-card/80 backdrop-blur-sm group hover:shadow-romantic transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Plane className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Partida</h3>
              <p className="text-muted-foreground mt-2">Quarta-feira passada</p>
            </div>
            <p className="text-foreground/80">
              O momento em que tudo mudou e a saudade começou a crescer no meu coração.
            </p>
          </Card>
          
          <Card className="p-8 shadow-romantic border-0 bg-gradient-love group hover:scale-105 transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-card/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <Heart className="w-8 h-8 text-card" fill="currentColor" />
              </div>
              <h3 className="text-2xl font-bold text-card">Hoje</h3>
              <p className="text-card/80 mt-2">Sentindo sua falta</p>
            </div>
            <p className="text-card/90">
              Cada batida do meu coração ecoa seu nome, cada pensamento me leva até você.
            </p>
          </Card>
          
          <Card className="p-8 shadow-soft border-0 bg-card/80 backdrop-blur-sm group hover:shadow-romantic transition-all duration-300">
            <div className="mb-6">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                <Home className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Volta</h3>
              <p className="text-muted-foreground mt-2">Amanhã</p>
            </div>
            <p className="text-foreground/80">
              O dia mais esperado, quando finalmente poderei te abraçar novamente.
            </p>
          </Card>
        </div>
        
        <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50">
          <h3 className="text-2xl font-bold mb-4 text-gradient">Uma Semana Inteira</h3>
          <p className="text-lg text-muted-foreground">
            7 dias, 168 horas, 10.080 minutos... Cada segundo contado com carinho, 
            cada momento guardado no coração até seu retorno.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;