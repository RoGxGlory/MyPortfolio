import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen relative"
      style={{ 
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: '100% auto',
        backgroundPosition: 'center top'
      }}
    >
      {/* Background Overlay - more transparent to show background */}
      <div className="absolute inset-0 bg-background/70 -z-10 pointer-events-none" />
      
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="py-8 text-center text-muted-foreground border-t border-border">
        <p>© 2025 Portfolio. Crafted with passion.</p>
      </footer>
    </div>
  );
};

export default Index;
