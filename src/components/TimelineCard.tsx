import { Card } from "@/components/ui/card";
import { Heart, Calendar } from "lucide-react";
import { ReactNode } from "react";

interface TimelineCardProps {
  day: string;
  date: string;
  title: string;
  content: string;
  image: string;
  reverse?: boolean;
  children?: ReactNode;
}

const TimelineCard = ({ day, date, title, content, image, reverse = false }: TimelineCardProps) => {
  return (
    <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 mb-16 animate-slide-up`}>
      {/* Image Section */}
      <div className="md:w-1/2 relative">
        <div className="relative overflow-hidden rounded-3xl shadow-romantic group">
          <img 
            src={image} 
            alt={`Dia ${day}`}
            className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-romantic opacity-20"></div>
          <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-medium">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{date}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <Card className="p-8 shadow-soft border-0 bg-card/80 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" fill="currentColor" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gradient">{day}º Dia</h3>
              <p className="text-muted-foreground">{title}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-foreground/80 leading-relaxed">
              {content}
            </p>
            
            <div className="pt-4 border-t border-border/50">
              <p className="text-sm text-muted-foreground italic">
                "Cada momento sem você me faz perceber o quão especial você é..."
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TimelineCard;