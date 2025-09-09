import { Download, Mail, Linkedin, Github, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Chakresh_Doddi_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" data-testid="hero-section">
      <div className="container mx-auto px-4 text-center z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-slide-up" data-testid="hero-name">
            Chakresh Doddi
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-muted-foreground animate-slide-up" style={{ animationDelay: "0.2s" }} data-testid="hero-title">
            Full Stack Java Developer
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: "0.4s" }} data-testid="hero-description">
            Crafting scalable, cloud-native applications with 4+ years of experience. 
            Specialized in Spring Boot microservices, AWS infrastructure, and modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              onClick={handleDownloadResume}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:scale-105 transition-transform neon-border animate-glow"
              data-testid="button-download-resume"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button 
              variant="ghost"
              className="px-8 py-4 glassmorphism hover:bg-primary/20 font-semibold"
              asChild
              data-testid="button-contact"
            >
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mt-12 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <a 
              href="https://linkedin.com/in/chakresh-doddi" 
              className="text-2xl hover:text-primary hover:scale-110 transition-all"
              data-testid="link-linkedin"
            >
              <Linkedin />
            </a>
            <a 
              href="https://github.com/ChakreshDoddi" 
              className="text-2xl hover:text-primary hover:scale-110 transition-all"
              data-testid="link-github"
            >
              <Github />
            </a>
            <a 
              href="mailto:chakreshdoddi2404@gmail.com" 
              className="text-2xl hover:text-primary hover:scale-110 transition-all"
              data-testid="link-email"
            >
              <Mail />
            </a>
            <a 
              href="tel:+13145755820" 
              className="text-2xl hover:text-primary hover:scale-110 transition-all"
              data-testid="link-phone"
            >
              <Phone />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }}></div>
      </div>
    </section>
  );
}
