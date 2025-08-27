import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="w-72 h-72 rounded-full overflow-hidden shadow-glow animate-float">
              <img
                src={profileImage}
                alt="ML & Data Science Engineer"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow-pulse"></div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-text bg-clip-text text-transparent">
              Machine Learning &{" "}
              <span className="text-primary">Data Scientist</span> Engineer
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              +1 years of experience in building data-driven solutions using ML, AI, and Data Science.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4 animate-fade-in-delay">
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-surface hover:bg-surface-hover border-border hover:shadow-soft transition-all duration-300"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-surface hover:bg-surface-hover border-border hover:shadow-soft transition-all duration-300"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full bg-surface hover:bg-surface-hover border-border hover:shadow-soft transition-all duration-300"
                asChild
              >
                <a href="mailto:contact@example.com">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};