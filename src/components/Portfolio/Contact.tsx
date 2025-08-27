import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, User, MessageSquare } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
            Get In Touch
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-surface-elevated rounded-3xl p-8 shadow-card animate-fade-in-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Message</h3>
              
              <form className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    placeholder="Your Name"
                    className="pl-11 bg-surface border-border focus:border-primary transition-colors duration-300"
                  />
                </div>
                
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    className="pl-11 bg-surface border-border focus:border-primary transition-colors duration-300"
                  />
                </div>
                
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Textarea
                    placeholder="Your message..."
                    rows={6}
                    className="pl-11 bg-surface border-border focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-delay">
              <div className="bg-surface-elevated rounded-3xl p-8 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations in the field of machine learning and data science.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">contact@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Available Remotely</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-14 h-14 rounded-full bg-surface hover:bg-surface-hover border-border hover:shadow-soft transition-all duration-300"
                  asChild
                >
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="w-6 h-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="w-14 h-14 rounded-full bg-surface hover:bg-surface-hover border-border hover:shadow-soft transition-all duration-300"
                  asChild
                >
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                
                <Button
                  variant="outline"
                  size="icon"
                  className="w-14 h-14 rounded-full bg-surface hover:bg-surface-hover border-border hover:shadow-soft transition-all duration-300"
                  asChild
                >
                  <a href="mailto:contact@example.com">
                    <Mail className="w-6 h-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};