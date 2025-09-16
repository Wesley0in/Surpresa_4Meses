import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Gift } from "lucide-react";
import heartBokeh from "@/assets/heart-bokeh.jpg";

const FinalMessage = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heartBokeh} 
          alt="Heart bokeh background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-romantic opacity-60"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-float">
          <Gift className="w-16 h-16 text-primary mx-auto mb-6" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Feliz Aniversário de 4 Meses!
        </h2>
        
        <Card className="p-12 shadow-romantic border-0 bg-card/90 backdrop-blur-md mb-12">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              Amor da minha vida, esta página é mais que um presente — é o meu coração 
              digitalizado, cada palavra aqui é um pedaço de mim que fica com você.
            </p>
            
            <p className="text-foreground/90">
              Durante essa semana em que você esteve longe, percebi ainda mais 
              o quanto você é importante para mim. Cada dia sem você me ensinou 
              uma nova forma de amar, uma nova razão para sorrir quando penso em nós.
            </p>
            
            <p className="text-foreground/90">
              Estes 4 meses ao seu lado têm sido os melhores da minha vida. 
              Você trouxe cores que eu não sabia que existiam, sentimentos que 
              eu não sabia que podia sentir.
            </p>
            
            <div className="flex items-center justify-center gap-2 pt-6 border-t border-border/50">
              <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
              <p className="text-xl font-medium text-primary italic">
                Te amo mais a cada dia
              </p>
              <Heart className="w-6 h-6 text-primary animate-pulse" fill="currentColor" />
            </div>
          </div>
        </Card>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Nossa História</h3>
            <p className="text-foreground/80">
              4 meses de sorrisos, abraços, e muito aperto na Bunda, 
              planos sonhados juntos e muito, muito amor.
            </p>
          </Card>
          
          <Card className="p-8 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Nosso Futuro</h3>
            <p className="text-foreground/80">
              Muitos outros meses, anos e aventuras nos esperam. 
              Juntos, construiremos memórias ainda mais especiais.
            </p>
          </Card>
        </div>
        
        <div className="mt-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg rounded-full shadow-romantic hover:shadow-glow transition-all duration-300"
          >
            Com amor, seu namorado apaixonado
            <Heart className="ml-2 w-5 h-5" fill="currentColor" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;