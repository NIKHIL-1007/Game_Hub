import { Button } from "@/components/ui/button";
import { Play, Download, GamepadIcon } from "lucide-react";
import heroGamer from "@/assets/hero-gamer.jpg";

export const GameHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient">
      {/* Particle Effects Background */}
      <div className="absolute inset-0 particle-bg" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/30 rounded-full floating-animation blur-sm" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-accent/40 rounded-full floating-animation" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/50 rounded-full floating-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-accent/30 rounded-full floating-animation blur-sm" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                  GAME
                </span>
                <br />
                <span className="text-foreground glow-effect">BEYOND</span>
                <br />
                <span className="rgb-animation">LIMITS</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Experience the most immersive gaming collection with dramatic RGB lighting, 
                cinematic visuals, and next-generation graphics that push the boundaries of reality.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow-effect group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Start Gaming
              </Button>
              <Button size="lg" variant="outline" className="neon-border">
                <Download className="w-5 h-5 mr-2" />
                Download Games
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <GamepadIcon className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">50+ Premium Games</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Live Gaming Community</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden glow-effect">
              <img 
                src={heroGamer} 
                alt="Epic Gaming Character"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 neon-border floating-animation">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-semibold">ONLINE</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 neon-border floating-animation" style={{ animationDelay: '1s' }}>
              <div className="text-center">
                <div className="text-lg font-bold text-primary">2.4M</div>
                <div className="text-xs text-muted-foreground">Active Players</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
};