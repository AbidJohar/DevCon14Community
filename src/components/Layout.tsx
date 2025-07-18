import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Users, Calendar, BookOpen, MessageCircle, Home, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Community", href: "/community", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Blog", href: "/blog", icon: BookOpen },
];

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-strong border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">DevCon14</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-smooth flex items-center space-x-2 ${
                        isActive(item.href)
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="glow-primary">
                Join Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-strong border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-smooth flex items-center space-x-2 ${
                      isActive(item.href)
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-4 pb-3 border-t border-white/10">
                <div className="flex items-center px-3 space-x-3">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Sign In
                  </Button>
                  <Button size="sm" className="w-full glow-primary">
                    Join Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card/50 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">DevCon14</span>
              </div>
              <p className="text-muted-foreground max-w-md">
                Connecting IT professionals, developers, and tech enthusiasts to build the future of technology together.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  GitHub
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  Discord
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                Community
              </h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                    Discussions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
                Newsletter
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Stay updated with the latest tech trends and community news.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm bg-input border border-border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button size="sm" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-center text-muted-foreground text-sm">
              © 2024 DevCon14. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};