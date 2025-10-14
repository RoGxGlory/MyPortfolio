import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Scrolling Repeating Background */}
      <div 
        className="absolute inset-0 opacity-30 -z-10"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          backgroundRepeat: 'repeat',
          backgroundSize: '100% 100vh',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-background/70 -z-10" />
      
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
