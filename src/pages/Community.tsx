import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Users, MessageCircle, Heart, Share2, Send } from "lucide-react";
import { useState } from "react";

const Community = () => {
  const [newPost, setNewPost] = useState("");

  const posts = [
    {
      id: 1,
      user: "ProGamer_2024",
      avatar: "🎮",
      time: "2 hours ago",
      content: "Just finished an amazing session of GTA 6! The graphics are absolutely mind-blowing. Anyone else experiencing the new weather system?",
      likes: 24,
      comments: 8,
      game: "GTA 6"
    },
    {
      id: 2,
      user: "ValorantMaster",
      avatar: "🔫",
      time: "4 hours ago",
      content: "Looking for teammates for the upcoming Valorant Champions Series! I'm a Sage main with 2.5K/D ratio. Let's dominate!",
      likes: 31,
      comments: 12,
      game: "Valorant"
    },
    {
      id: 3,
      user: "CyberNinja",
      avatar: "🤖",
      time: "6 hours ago",
      content: "Cyberpunk 2077's Night City never gets old. The neon-lit streets and atmospheric soundtrack create such an immersive experience!",
      likes: 18,
      comments: 5,
      game: "Cyberpunk 2077"
    },
    {
      id: 4,
      user: "ApexChampion",
      avatar: "👑",
      time: "8 hours ago",
      content: "Just clutched a 1v3 in Apex Legends ranked! Wraith portal saved the day. Sometimes patience is the best strategy.",
      likes: 42,
      comments: 15,
      game: "Apex Legends"
    }
  ];

  const communities = [
    { name: "GTA 6 Legends", members: "145K", description: "Open world adventures and epic heists" },
    { name: "Valorant Pros", members: "89K", description: "Tactical gameplay and team strategies" },
    { name: "Cyberpunk City", members: "67K", description: "Night City stories and mods" },
    { name: "Apex Warriors", members: "92K", description: "Battle royale tactics and highlights" },
    { name: "Gaming Setup", members: "34K", description: "RGB setups and hardware discussion" }
  ];

  return (
    <div className="min-h-screen pt-20 animated-gradient">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Community
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow gamers, share experiences, and build lasting friendships
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card className="game-card">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-lg">
                    🎮
                  </div>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Share your gaming experience..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="mb-4 bg-background/50 border-border/20"
                      rows={3}
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <span className="text-xs text-muted-foreground">🎮 Gaming</span>
                        <span className="text-xs text-muted-foreground">🏆 Achievement</span>
                        <span className="text-xs text-muted-foreground">💬 Discussion</span>
                      </div>
                      <Button size="sm" className="glow-effect">
                        <Send className="w-4 h-4 mr-2" />
                        Post
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Posts Feed */}
            {posts.map((post, index) => (
              <Card key={post.id} className="game-card animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-lg">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground">{post.user}</h3>
                        <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                          {post.game}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{post.time}</span>
                      </div>
                      <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>
                      <div className="flex items-center gap-6">
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" />
                          <span className="text-sm">{post.likes}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">{post.comments}</span>
                        </button>
                        <button className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
                          <Share2 className="w-4 h-4" />
                          <span className="text-sm">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Stats */}
            <Card className="game-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Online Now</span>
                    <span className="text-primary font-semibold">12,547</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Members</span>
                    <span className="text-accent font-semibold">2.4M</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts Today</span>
                    <span className="text-primary font-semibold">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Tournaments</span>
                    <span className="text-accent font-semibold">24</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Communities */}
            <Card className="game-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Popular Communities</h3>
                <div className="space-y-3">
                  {communities.map((community, index) => (
                    <div key={community.name} className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors">
                      <div>
                        <div className="font-semibold text-foreground text-sm">{community.name}</div>
                        <div className="text-xs text-muted-foreground">{community.description}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-accent font-semibold">{community.members}</div>
                        <Button size="sm" variant="ghost" className="text-xs h-6 px-2">
                          Join
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Gaming Schedule */}
            <Card className="game-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-foreground">Upcoming Events</h3>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <div className="text-sm font-semibold text-primary">Valorant Tournament</div>
                    <div className="text-xs text-muted-foreground">Today, 8:00 PM</div>
                  </div>
                  <div className="p-3 rounded-lg bg-accent/10 border border-accent/20">
                    <div className="text-sm font-semibold text-accent">GTA 6 Race Night</div>
                    <div className="text-xs text-muted-foreground">Tomorrow, 9:00 PM</div>
                  </div>
                  <div className="p-3 rounded-lg bg-background/50 border border-border/20">
                    <div className="text-sm font-semibold text-foreground">Community Meetup</div>
                    <div className="text-xs text-muted-foreground">Saturday, 7:00 PM</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Ambient Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      </div>
    </div>
  );
};

export default Community;