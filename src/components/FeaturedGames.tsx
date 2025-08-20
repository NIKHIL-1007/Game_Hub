import { GameCard } from "./GameCard";
import { Button } from "@/components/ui/button";
import gta6Scene from "@/assets/gta6-scene.jpg";
import valorantScene from "@/assets/valorant-scene.jpg";
import gamingSetup from "@/assets/gaming-setup.jpg";
import codScene from "@/assets/cod-scene.jpg";
import cyberpunkScene from "@/assets/cyberpunk-scene.jpg";
import apexScene from "@/assets/apex-scene.jpg";

export const FeaturedGames = () => {
  const games = [
    {
      title: "GTA 6",
      image: gta6Scene,
      rating: 9.8,
      genre: "Open World",
      description: "The most anticipated open-world crime saga returns with stunning visuals, dynamic weather, and an immersive storyline that redefines gaming.",
      featured: true
    },
    {
      title: "Valorant",
      image: valorantScene,
      rating: 9.4,
      genre: "Tactical FPS",
      description: "Master tactical gameplay with unique agents, precise gunplay, and strategic abilities in this competitive multiplayer experience.",
      featured: true
    },
    {
      title: "Call of Duty",
      image: codScene,
      rating: 9.2,
      genre: "FPS",
      description: "Experience intense warfare with realistic graphics, dynamic campaigns, and thrilling multiplayer battles.",
      featured: false
    },
    {
      title: "Cyberpunk 2077",
      image: cyberpunkScene,
      rating: 8.9,
      genre: "RPG",
      description: "Dive into Night City's neon-lit streets in this immersive cyberpunk RPG with stunning visuals and deep storytelling.",
      featured: false
    },
    {
      title: "Apex Legends",
      image: apexScene,
      rating: 9.1,
      genre: "Battle Royale",
      description: "Join the ultimate battle royale with unique legends, tactical abilities, and fast-paced combat.",
      featured: false
    },
    {
      title: "Gaming Universe",
      image: gamingSetup,
      rating: 9.6,
      genre: "Multi-Game",
      description: "Explore endless gaming possibilities with our premium collection featuring the latest AAA titles and indie masterpieces.",
      featured: false
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured Games
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the most popular titles that define modern gaming with breathtaking visuals and immersive gameplay
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={game.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <GameCard {...game} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="/games">
            <Button size="lg" className="glow-effect">
              View All Games
            </Button>
          </a>
        </div>
        
        {/* RGB Lighting Effects */}
        <div className="absolute top-1/2 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-10 w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
    </section>
  );
};