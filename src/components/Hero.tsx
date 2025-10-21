import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="text-sm font-medium px-4 py-2 rounded-full glass-card">
              Game Developer & Community Manager
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-gradient">Crafting Digital</span>
            <br />
            <span className="text-foreground">Experiences</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Building immersive games and fostering vibrant communities at MangaDemon
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-border hover:bg-card"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-8 justify-center pt-8">
            <a href="https://github.com/RoGxGlory" target="_blank" rel="noopener noreferrer" 
               className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Github className="w-10 h-10" />
            </a>
            <a href="https://www.linkedin.com/in/rayane-benabdeljalil-" target="_blank" rel="noopener noreferrer"
               className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Linkedin className="w-10 h-10" />
            </a>
            <a href="mailto:benabdeljalilrayane1@gmail.com"
               className="text-muted-foreground hover:text-primary transition-all hover:scale-110">
              <Mail className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;