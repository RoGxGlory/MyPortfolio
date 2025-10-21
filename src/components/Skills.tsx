import { Code2, Gamepad2, Database, Globe, Server } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const skills = [
  { 
    name: ".NET Framework & Core", 
    icon: Code2,
    details: "Expertise in building scalable applications using .NET Framework 4.8 and .NET Core 6.0+. Experience with ASP.NET MVC, Entity Framework, and LINQ for robust backend development."
  },
  { 
    name: "Web APIs", 
    icon: Globe,
    details: "Development of RESTful APIs with proper authentication, rate limiting, and documentation. Experience with ASP.NET Web API, middleware integration, and API versioning."
  },
  { 
    name: "Game Engines", 
    icon: Gamepad2,
    details: "Proficient in Unity (C#) and Unreal Engine (C++/Blueprints). Experience with game architecture patterns, physics systems, networking, and performance optimization."
  },
  { 
    name: "Database (NoSQL)", 
    icon: Database,
    details: "Experience with MongoDB, Redis, and Firebase. Skilled in schema design, aggregation pipelines, indexing strategies, and real-time data synchronization."
  },
  { 
    name: "Microservices Architecture", 
    icon: Server,
    details: "Design and implementation of distributed systems using microservices patterns, message queues, and containerization with Docker."
  },
  { 
    name: "Community Management", 
    icon: Code2,
    details: "Building and nurturing online communities through Discord, social media platforms, and community events. Experience with moderation tools and engagement strategies."
  },
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span> & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Click on any skill to learn more
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Dialog key={skill.name}>
              <DialogTrigger asChild>
                <button
                  className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer text-left w-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{skill.name}</h3>
                    </div>
                  </div>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <skill.icon className="w-5 h-5 text-primary" />
                    </div>
                    {skill.name}
                  </DialogTitle>
                  <DialogDescription className="text-base pt-4">
                    {skill.details}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;