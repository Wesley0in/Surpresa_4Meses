import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-romantic.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Romantic hero background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-love opacity-80"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
        <div className="mb-8 animate-float">
          <Heart className="w-16 h-16 text-primary mx-auto mb-6 shadow-glow" fill="currentColor" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient">
          4 Meses
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-8 text-foreground/80">
          Uma Carta de Amor Digital
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Enquanto você estava descobrindo novos lugares, eu estava descobrindo 
          o quanto você significa para mim. Esta é a história dos meus dias 
          sentindo sua falta...
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg rounded-full shadow-romantic hover:shadow-glow transition-all duration-300"
        >
          Começar a Jornada
          <Heart className="ml-2 w-5 h-5" fill="currentColor" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;