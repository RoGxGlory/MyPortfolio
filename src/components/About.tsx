import { Code2, Users, Gamepad2, Music2, Youtube, ShoppingBag } from "lucide-react";

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

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold">
              Beyond <span className="text-gradient">Code</span>
            </h3>
            <p className="text-muted-foreground mt-2">
              Music, content, and a merch brand of my own
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="https://open.spotify.com/artist/1HSQULPueap6RRJf0bz7ph?si=GIvyMjrAQuyiwNGs18xKwQ"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 block"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Music2 className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Musician on Spotify</h3>
              <p className="text-muted-foreground">
                Producing and releasing my own tracks — listen to my catalog on Spotify
              </p>
            </a>

            <a
              href="https://www.youtube.com/@BenabRayane"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 block"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <Youtube className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">YouTube Channel</h3>
              <p className="text-muted-foreground">
                Sharing my songs and creative projects with a growing audience
              </p>
            </a>

            <a
              href="https://rog-merch-2.myshopify.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300 block"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                <ShoppingBag className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Merch Store</h3>
              <p className="text-muted-foreground">
                Running my own clothing brand — designing and selling apparel online
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;