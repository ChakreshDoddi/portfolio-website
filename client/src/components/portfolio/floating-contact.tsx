import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="floating-contact">
      <div className="flex flex-col space-y-3">
        <Button
          size="icon"
          className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full shadow-lg hover:scale-110 transition-transform animate-glow"
          asChild
          data-testid="floating-email"
        >
          <a href="mailto:chakreshdoddi2404@gmail.com">
            <Mail className="h-5 w-5" />
          </a>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="w-14 h-14 glassmorphism rounded-full hover:bg-primary/20 transition-all animate-float"
          asChild
          data-testid="floating-contact-scroll"
        >
          <a href="#contact">
            <MessageCircle className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </div>
  );
}
