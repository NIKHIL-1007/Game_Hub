import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Download, CreditCard } from "lucide-react";
import gta6Scene from "@/assets/gta6-scene.jpg";
import valorantScene from "@/assets/valorant-scene.jpg";
import codScene from "@/assets/cod-scene.jpg";
import cyberpunkScene from "@/assets/cyberpunk-scene.jpg";
import apexScene from "@/assets/apex-scene.jpg";

const Store = () => {
  const featuredGames = [
    {
      title: "GTA 6 Deluxe Edition",
      image: gta6Scene,
      price: "$69.99",
      originalPrice: "$79.99",
      discount: "12% OFF",
      rating: 9.8,
      description: "The ultimate open-world experience with exclusive content and early access.",
      features: ["4K Ultra HD", "Ray Tracing", "Exclusive DLC", "Season Pass"]
    },
    {
      title: "Valorant Premium Pack",
      image: valorantScene,
      price: "$24.99",
      originalPrice: null,
      discount: null,
      rating: 9.4,
      description: "Get ahead with exclusive skins, agents, and competitive advantages.",
      features: ["10 Exclusive Skins", "3 Premium Agents", "Battle Pass", "VP Credits"]
    },
    {
      title: "Call of Duty Pro Bundle",
      image: codScene,
      price: "$59.99",
      originalPrice: "$69.99",
      discount: "14% OFF",
      rating: 9.2,
      description: "Professional gaming package with campaign, multiplayer, and special ops.",
      features: ["Campaign Mode", "Multiplayer Access", "Special Ops", "Elite Weapons"]
    }
  ];

  const gameLibrary = [
    { title: "Cyberpunk 2077", image: cyberpunkScene, price: "$39.99", rating: 8.9 },
    { title: "Apex Legends Pack", image: apexScene, price: "$19.99", rating: 9.1 },
  ];

  const dlcPacks = [
    { title: "GTA 6 - Night City Pack", price: "$14.99", description: "New vehicles, missions, and locations" },
    { title: "Valorant - Agent Skins", price: "$9.99", description: "Exclusive character customizations" },
    { title: "Cyberpunk - Expansion", price: "$24.99", description: "New storyline and areas to explore" }
  ];

  return (
    <div className="min-h-screen pt-20 animated-gradient">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Game Store
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and purchase the latest PC games with exclusive deals and premium content
          </p>
        </div>

        {/* Featured Games */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Games
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <Card key={game.title} className="game-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    {game.discount && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        {game.discount}
                      </div>
                    )}
                    <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-black/60 rounded-full">
                      <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      <span className="text-xs text-white">{game.rating}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{game.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{game.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      {game.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full" />
                          <span className="text-xs text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-primary">{game.price}</span>
                        {game.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">{game.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1 glow-effect">
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                      <Button variant="outline" className="neon-border">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Game Library */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-foreground">More Games</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {gameLibrary.map((game, index) => (
              <Card key={game.title} className="game-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-0">
                  <div className="flex">
                    <img 
                      src={game.image} 
                      alt={game.title}
                      className="w-32 h-24 object-cover"
                    />
                    <div className="p-4 flex-1 flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-foreground">{game.title}</h3>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                          <span className="text-xs text-muted-foreground">{game.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary">{game.price}</div>
                        <Button size="sm" className="mt-2">
                          Buy
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* DLC Packs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-foreground">DLC & Add-ons</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {dlcPacks.map((dlc, index) => (
              <Card key={dlc.title} className="game-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-foreground mb-2">{dlc.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{dlc.description}</p>
                  <div className="text-xl font-bold text-accent mb-4">{dlc.price}</div>
                  <Button variant="outline" className="w-full neon-border">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Purchase
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Store Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="game-card text-center">
            <CardContent className="p-6">
              <ShoppingCart className="w-8 h-8 mx-auto text-primary mb-2 glow-effect" />
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Games Available</div>
            </CardContent>
          </Card>
          <Card className="game-card text-center">
            <CardContent className="p-6">
              <Download className="w-8 h-8 mx-auto text-accent mb-2 glow-effect" />
              <div className="text-2xl font-bold text-foreground">2.4M+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </CardContent>
          </Card>
          <Card className="game-card text-center">
            <CardContent className="p-6">
              <Star className="w-8 h-8 mx-auto text-primary mb-2 glow-effect" />
              <div className="text-2xl font-bold text-foreground">4.9</div>
              <div className="text-sm text-muted-foreground">Avg Rating</div>
            </CardContent>
          </Card>
          <Card className="game-card text-center">
            <CardContent className="p-6">
              <CreditCard className="w-8 h-8 mx-auto text-accent mb-2 glow-effect" />
              <div className="text-2xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Store;