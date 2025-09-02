import { useState } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism border-b border-border/50" data-testid="navigation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold gradient-text" data-testid="logo">
            Chakresh Doddi
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#about" className="hover:text-primary transition-colors" data-testid="nav-about">
              About
            </a>
            <a href="#skills" className="hover:text-primary transition-colors" data-testid="nav-skills">
              Skills
            </a>
            <a href="#projects" className="hover:text-primary transition-colors" data-testid="nav-projects">
              Projects
            </a>
            <a href="#experience" className="hover:text-primary transition-colors" data-testid="nav-experience">
              Experience
            </a>
            <a href="#contact" className="hover:text-primary transition-colors" data-testid="nav-contact">
              Contact
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="glassmorphism hover:bg-primary/20"
              data-testid="theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden glassmorphism"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2" data-testid="mobile-menu">
            <a href="#about" className="block py-2 hover:text-primary transition-colors">
              About
            </a>
            <a href="#skills" className="block py-2 hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="block py-2 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#experience" className="block py-2 hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#contact" className="block py-2 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
