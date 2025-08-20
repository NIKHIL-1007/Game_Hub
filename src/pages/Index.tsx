import { GameNavigation } from "@/components/GameNavigation";
import { GameHero } from "@/components/GameHero";
import { FeaturedGames } from "@/components/FeaturedGames";
import { GameStats } from "@/components/GameStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <GameNavigation />
      
      <main>
        <GameHero />
        
        <section id="games">
          <FeaturedGames />
        </section>
        
        <GameStats />
        
        {/* Footer */}
        <footer className="py-12 px-6 border-t border-border/20">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-lg glow-effect" />
                  <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    GameHub
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Experience gaming beyond limits with dramatic RGB lighting and cinematic visuals. 
                  Join millions of gamers worldwide in the ultimate gaming destination.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/games" className="block text-muted-foreground hover:text-primary transition-colors">Games</a>
                  <a href="/tournaments" className="block text-muted-foreground hover:text-primary transition-colors">Tournaments</a>
                  <a href="/community" className="block text-muted-foreground hover:text-primary transition-colors">Community</a>
                  <a href="/store" className="block text-muted-foreground hover:text-primary transition-colors">Store</a>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-4">Developer</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">
                    <span className="text-primary font-semibold">Made by:</span> Nikhil Tiwari
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <span className="text-accent font-semibold">Email:</span> nikhtiwari10@gmail.com
                  </p>
                  <div className="flex gap-2 mt-4">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-xs text-muted-foreground">Available for gaming projects</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-border/20 text-center">
              <p className="text-muted-foreground text-sm">
                © 2024 GameHub by Nikhil Tiwari. Experience gaming beyond limits with dramatic RGB lighting and cinematic visuals.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
