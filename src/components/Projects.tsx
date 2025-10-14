import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Neon Uprising",
    description: "A cyberpunk-themed action RPG with immersive storytelling and fast-paced combat mechanics",
    tags: ["Unity", "C#", "Game Design"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Shadow Realms",
    description: "Dark fantasy adventure game featuring procedural world generation and multiplayer co-op",
    tags: ["Unreal Engine", "C++", "Multiplayer"],
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Pixel Tactics",
    description: "Turn-based strategy game with pixel art aesthetics and competitive online gameplay",
    tags: ["Unity", "Networking", "Game Design"],
    gradient: "from-pink-500 to-red-500"
  },
  {
    title: "MangaDemon Community",
    description: "Built and manage a thriving community of 50K+ manga enthusiasts with engagement-focused initiatives",
    tags: ["Community", "Social Media", "Events"],
    gradient: "from-orange-500 to-pink-500"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            My latest game development work and community initiatives
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="glass-card border-border overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`} />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="gap-2">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;