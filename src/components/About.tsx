import { Code2, Users, Gamepad2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Passionate about creating engaging experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
              <Gamepad2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">Game Developer</h3>
            <p className="text-muted-foreground">
              Crafting immersive gaming experiences with cutting-edge technology and creative storytelling
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community Manager</h3>
            <p className="text-muted-foreground">
              Building and nurturing the vibrant MangaDemon community with passion and dedication
            </p>
          </div>
          
          <div className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
              <Code2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold mb-3">Technical Skills</h3>
            <p className="text-muted-foreground">
              Expert in modern game engines, programming languages, and community management tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;