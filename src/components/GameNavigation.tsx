import { Button } from "@/components/ui/button";
import { Menu, Search, User, Settings } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export const GameNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Games", href: "/games" },
    { label: "Tournaments", href: "/tournaments" },
    { label: "Community", href: "/community" },
    { label: "Store", href: "/store" }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg glow-effect" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              GameHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                to={item.href}
                className={`text-muted-foreground hover:text-foreground transition-colors relative group ${
                  isActive(item.href) ? 'text-primary' : ''
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button size="sm" variant="ghost" className="relative">
              <Search className="w-4 h-4" />
            </Button>
            <Button size="sm" variant="ghost" className="relative">
              <Settings className="w-4 h-4" />
            </Button>
            <Button size="sm" className="glow-effect">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>

            {/* Mobile Menu Toggle */}
            <Button 
              size="sm" 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/20">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link 
                  key={item.label}
                  to={item.href}
                  className={`text-muted-foreground hover:text-foreground transition-colors ${
                    isActive(item.href) ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};