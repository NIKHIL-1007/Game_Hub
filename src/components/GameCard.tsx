import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";

interface GameCardProps {
  title: string;
  image: string;
  rating: number;
  genre: string;
  description: string;
  featured?: boolean;
}

export const GameCard = ({ title, image, rating, genre, description, featured = false }: GameCardProps) => {
  return (
    <Card className={`game-card border-border/20 ${featured ? 'neon-border' : ''}`}>
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-black/60 rounded-full">
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
            <span className="text-xs text-foreground">{rating}</span>
          </div>
          <Button 
            size="sm" 
            className="absolute bottom-4 left-4 glow-effect"
            variant={featured ? "default" : "secondary"}
          >
            <Play className="w-4 h-4 mr-1" />
            Play Now
          </Button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground">{title}</h3>
            <span className="text-xs text-accent font-semibold bg-accent/10 px-2 py-1 rounded-full">
              {genre}
            </span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};