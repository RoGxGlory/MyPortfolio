import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, FileDown, Music2, Youtube, ShoppingBag } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image — rendered as a real <img> so it can be the LCP element */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-gradient">Benabdeljalil Rayane</span>
            <span className="block text-xl md:text-2xl font-medium text-muted-foreground mt-4">
              Game Developer, Community Manager &amp; Musician
            </span>
          </h1>

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
            <a
              href="https://github.com/RoGxGlory"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Github className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/rayane-benabdeljalil-"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Linkedin className="w-10 h-10" />
            </a>
            <a
              href="mailto:benabdeljalilrayane1@gmail.com"
              aria-label="Send email"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
            >
              <Mail className="w-10 h-10" />
            </a>
            <a
              href="https://open.spotify.com/artist/1HSQULPueap6RRJf0bz7ph?si=GIvyMjrAQuyiwNGs18xKwQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Spotify artist page"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              title="Spotify"
            >
              <Music2 className="w-10 h-10" />
            </a>
            <a
              href="https://www.youtube.com/@BenabRayane"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube channel"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              title="YouTube"
            >
              <Youtube className="w-10 h-10" />
            </a>
            <a
              href="https://rog-merch-2.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Merch store"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              title="Merch Store"
            >
              <ShoppingBag className="w-10 h-10" />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}CV_FR.pdf`}
              download="CV_FR.pdf"
              aria-label="Download CV (PDF)"
              className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
              title="Download CV"
            >
              <FileDown className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
