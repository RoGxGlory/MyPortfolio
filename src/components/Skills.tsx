import { Code2, Gamepad2, Database, Globe, Server } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const skills = [
  { 
    name: ".NET Framework & Core", 
    icon: Code2,
    details: "Expertise in building scalable backend applications using .NET 8.0 (Core). Experience with ASP.NET Core for building Web APIs and utilizing the official MongoDB .NET Driver (with LINQ) to connect to and manage data collections in a MongoDB Atlas cluster."
  },
  { 
    name: "Web APIs", 
    icon: Globe,
    details: "Development of RESTful APIs with ASP.NET Core to serve as the backend for data-driven applications. Successfully deployed a Web API to Render, which interfaces directly with MongoDB Atlas. Implemented account registration and credential-based login, with secure password hashing and validation."
  },
  { 
    name: "Game Engines", 
    icon: Gamepad2,
    details: "Proficient in Unity (C#) and Unreal Engine (C++/Blueprints), with experience in game architecture, physics systems, and performance optimization. Skilled in secure account management, password hashing, encrypted game data storage, and protecting data integrity for online features."
  },
  { 
    name: "Database (NoSQL)", 
    icon: Database,
    details: "Experience developing RESTful APIs with ASP.NET Core and MongoDB, including secure account registration and login with password hashing, schema modeling with C# classes, and basic CRUD operations. Skilled in user input validation, environment-based configuration, and protecting data integrity with HMAC signatures and AES encryption. Proficient in organizing code with controllers, models, and services."
  },
  { 
    name: "Microservices Architecture", 
    icon: Server,
    details: "Practical experience in containerization and microservice deployment. Containerized a .NET 8.0 Web API using Docker and deployed the image to Render. This created a scalable, container-based service responsible for all data persistence and business logic, isolating the MongoDB Atlas data layer."
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