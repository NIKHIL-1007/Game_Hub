import { Card, CardContent } from "@/components/ui/card";
import { Users, Trophy, Zap, GamepadIcon } from "lucide-react";

export const GameStats = () => {
  const stats = [
    {
      icon: Users,
      value: "2.4M+",
      label: "Active Gamers",
      description: "Join millions of players worldwide"
    },
    {
      icon: Trophy,
      value: "150K+",
      label: "Tournaments",
      description: "Competitive gaming events daily"
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Uptime",
      description: "Ultra-reliable gaming servers"
    },
    {
      icon: GamepadIcon,
      value: "500+",
      label: "Game Titles",
      description: "Premium gaming collection"
    }
  ];

  return (
    <section className="py-16 px-6 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="game-card border-border/20 text-center">
              <CardContent className="p-6">
                <div className="relative mb-4">
                  <stat.icon className="w-8 h-8 mx-auto text-primary glow-effect" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2 rgb-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                  {stat.value}
                </div>
                <div className="text-primary font-semibold mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-l from-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};