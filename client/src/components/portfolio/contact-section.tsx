import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-muted/20" data-testid="contact-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="contact-title">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="glassmorphism p-6 rounded-xl card-hover">
              <h3 className="text-xl font-semibold mb-6" data-testid="contact-info-title">
                Get In Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center" data-testid="contact-email">
                  <Mail className="text-primary mr-4 text-lg" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground text-sm">chakreshdoddi2404@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-phone">
                  <Phone className="text-secondary mr-4 text-lg" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground text-sm">+1 (314) 575-5820</p>
                  </div>
                </div>
                
                <div className="flex items-center" data-testid="contact-location">
                  <MapPin className="text-accent mr-4 text-lg" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">St. Louis, MO</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="font-medium mb-4">Follow Me</p>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="glassmorphism hover:bg-primary/20 transition-all group"
                    asChild
                    data-testid="contact-linkedin"
                  >
                    <a href="https://linkedin.com/in/chakresh-doddi">
                      <Linkedin className="h-5 w-5 group-hover:text-primary" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="glassmorphism hover:bg-secondary/20 transition-all group"
                    asChild
                    data-testid="contact-github"
                  >
                    <a href="https://github.com/ChakreshDoddi">
                      <Github className="h-5 w-5 group-hover:text-secondary" />
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="glassmorphism hover:bg-accent/20 transition-all group"
                    asChild
                    data-testid="contact-email-button"
                  >
                    <a href="mailto:chakreshdoddi2404@gmail.com">
                      <Mail className="h-5 w-5 group-hover:text-accent" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glassmorphism p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-6" data-testid="contact-form-title">
              Send Message
            </h3>
            
            <form className="space-y-6" onSubmit={handleSubmit} data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project collaboration, Job opportunity, etc."
                  required
                  data-testid="input-subject"
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  data-testid="input-message"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full px-6 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:scale-105 transition-transform animate-glow"
                data-testid="button-send-message"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
