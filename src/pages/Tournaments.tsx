import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, Users, Crown, Play } from "lucide-react";
import tournamentArena from "@/assets/tournament-arena.jpg";

const Tournaments = () => {
  const tournaments = [
    {
      id: 1,
      title: "Valorant Champions Series",
      game: "Valorant",
      prize: "$250,000",
      participants: "128 Teams",
      startDate: "March 15, 2024",
      status: "Live",
      description: "The ultimate Valorant tournament featuring the world's best teams competing for glory."
    },
    {
      id: 2,
      title: "GTA 6 World Championship",
      game: "GTA 6",
      prize: "$500,000",
      participants: "256 Players",
      startDate: "April 1, 2024",
      status: "Upcoming",
      description: "Epic open-world competition in the most anticipated game of the decade."
    },
    {
      id: 3,
      title: "Call of Duty Pro League",
      game: "Call of Duty",
      prize: "$300,000",
      participants: "64 Teams",
      startDate: "March 8, 2024",
      status: "Registration",
      description: "Fast-paced tactical warfare competition for professional teams worldwide."
    },
    {
      id: 4,
      title: "Apex Legends Masters",
      game: "Apex Legends",
      prize: "$150,000",
      participants: "180 Teams",
      startDate: "March 22, 2024",
      status: "Live",
      description: "Battle royale supremacy with the best Apex Legends squads on the planet."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "text-green-500 bg-green-500/10";
      case "Upcoming": return "text-blue-500 bg-blue-500/10";
      case "Registration": return "text-yellow-500 bg-yellow-500/10";
      default: return "text-muted-foreground bg-muted/10";
    }
  };

  return (
    <div className="min-h-screen pt-20 animated-gradient">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="relative mb-16 overflow-hidden rounded-2xl">
          <img 
            src={tournamentArena} 
            alt="Tournament Arena"
            className="w-full h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Tournaments
                </span>
              </h1>
              <p className="text-xl text-foreground max-w-2xl mx-auto mb-8">
                Compete in epic gaming tournaments with massive prize pools and global recognition
              </p>
              <Button size="lg" className="glow-effect">
                <Crown className="w-5 h-5 mr-2" />
                Join Tournament
              </Button>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="game-card text-center">
            <CardContent className="p-6">
              <Trophy className="w-8 h-8 mx-auto text-primary mb-2 glow-effect" />
              <div className="text-2xl font-bold text-foreground">$1.2M+</div>
              <div className="text-sm text-muted-foreground">Total Prize Pool</div>
            </CardContent>
          </Card>
          <Card className="game-card text-center">
            <CardContent className="p-6">
              <Users className="w-8 h-8 mx-auto text-accent mb-2 glow-effect" />
              <div className="text-2xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Active Teams</div>
            </CardContent>
          </Card>
          <Card className="game-card text-center">
            <CardContent className="p-6">
              <Calendar className="w-8 h-8 mx-auto text-primary mb-2 glow-effect" />
              <div className="text-2xl font-bold text-foreground">24</div>
              <div className="text-sm text-muted-foreground">Live Events</div>
            </CardContent>
          </Card>
          <Card className="game-card text-center">
            <CardContent className="p-6">
              <Crown className="w-8 h-8 mx-auto text-accent mb-2 glow-effect" />
              <div className="text-2xl font-bold text-foreground">15K+</div>
              <div className="text-sm text-muted-foreground">Participants</div>
            </CardContent>
          </Card>
        </div>

        {/* Tournament List */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Active Tournaments
            </span>
          </h2>
          
          {tournaments.map((tournament, index) => (
            <Card key={tournament.id} className="game-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{tournament.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(tournament.status)}`}>
                        {tournament.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-3">{tournament.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Play className="w-4 h-4 text-primary" />
                        <span className="text-foreground font-semibold">{tournament.game}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Trophy className="w-4 h-4 text-accent" />
                        <span className="text-foreground font-semibold">{tournament.prize}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{tournament.participants}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-foreground">{tournament.startDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="neon-border">
                      View Details
                    </Button>
                    <Button className="glow-effect">
                      {tournament.status === "Live" ? "Watch Live" : "Register"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

export default Tournaments;