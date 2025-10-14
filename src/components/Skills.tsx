import { Code2, Gamepad2, Palette, Database, MessageSquare, Users } from "lucide-react";

const skills = [
  { name: "Unity", icon: Gamepad2 },
  { name: "Unreal Engine", icon: Code2 },
  { name: "C#", icon: Code2 },
  { name: "C++", icon: Code2 },
  { name: "Game Design", icon: Palette },
  { name: "Community Management", icon: Users },
  { name: "Social Media", icon: MessageSquare },
  { name: "Database Management", icon: Database },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;