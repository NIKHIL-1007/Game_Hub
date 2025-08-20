import { GameCard } from "@/components/GameCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Grid, List } from "lucide-react";
import { useState } from "react";
import gta6Scene from "@/assets/gta6-scene.jpg";
import valorantScene from "@/assets/valorant-scene.jpg";
import codScene from "@/assets/cod-scene.jpg";
import cyberpunkScene from "@/assets/cyberpunk-scene.jpg";
import apexScene from "@/assets/apex-scene.jpg";
import gamingSetup from "@/assets/gaming-setup.jpg";

const Games = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const games = [
    {
      title: "GTA 6",
      image: gta6Scene,
      rating: 9.8,
      genre: "Open World",
      description: "The most anticipated open-world crime saga returns with stunning visuals, dynamic weather, and an immersive storyline.",
      featured: true
    },
    {
      title: "Valorant",
      image: valorantScene,
      rating: 9.4,
      genre: "Tactical FPS",
      description: "Master tactical gameplay with unique agents, precise gunplay, and strategic abilities in competitive multiplayer.",
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
      title: "Gaming Collection",
      image: gamingSetup,
      rating: 9.6,
      genre: "Multi-Game",
      description: "Explore our premium gaming collection featuring the latest AAA titles and indie masterpieces.",
      featured: false
    }
  ];

  const genres = ["all", "Open World", "FPS", "Tactical FPS", "RPG", "Battle Royale", "Multi-Game"];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "all" || game.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="min-h-screen pt-20 animated-gradient">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              PC Games
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the ultimate collection of PC games with stunning graphics and immersive gameplay
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card/50 backdrop-blur-sm border-border/20"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <select 
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg px-3 py-2 text-foreground"
            >
              {genres.map(genre => (
                <option key={genre} value={genre}>
                  {genre === "all" ? "All Genres" : genre}
                </option>
              ))}
            </select>
            
            <div className="flex border border-border/20 rounded-lg overflow-hidden">
              <Button
                size="sm"
                variant={viewMode === "grid" ? "default" : "ghost"}
                onClick={() => setViewMode("grid")}
                className="rounded-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant={viewMode === "list" ? "default" : "ghost"}
                onClick={() => setViewMode("list")}
                className="rounded-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Games Grid */}
        <div className={`grid gap-8 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 max-w-4xl mx-auto"}`}>
          {filteredGames.map((game, index) => (
            <div key={game.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <GameCard {...game} />
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No games found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Games;