import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Icon } from "@iconify/react";

const projects = [
	{
		title: "Voidrift Survivors",
		description:
			"As the last survivor against the void, you must harness its own power to destroy the relentless swarms that pour from the rift",
		tags: ["Unity", "C#", "Game Design"],
		image: "./ProjectsImages/Voidrift_Cropped.png",
		gradient: "from-purple-500 to-pink-500",
		github: "https://github.com/RoGxGlory/VoidriftSurvivors",
	},
	{
		title: "Vault of Shadows",
		description:
			"A console-based dungeon exploration game with multi-account support, encrypted save management, and interactive menus for exploration, combat, and leaderboard tracking",
		tags: ["Windows CMD", "C#", "Multiplayer"],
        image: "./ProjectsImages/VaultOfShadows_Cropped.png",
		gradient: "from-blue-500 to-purple-500",
		github: "https://github.com/RoGxGlory/VaultOfShadows",
	},
	{
		title: "The Iron Curtain",
		description:
			"A co-op survival horror game, where you play as an agent in a team of up to four players tasked with investigating paranormal events to track and capture the supernatural entities responsible",
		tags: ["Unreal Engine", "Networking", "Gameplay Programming"],
        image: "./ProjectsImages/TheIronCurtain.png",
		gradient: "from-pink-500 to-red-500",
		github: "https://github.com/RoGxGlory/TheIronCurtain",
	},
	{
		title: "MangaDemon",
		description:
			"The MangaDemon team builds its community by operating as a manga scanlation group and developing the web game Veyra, where players defend a realm from monster waves through a stamina-based combat and crafting system",
		tags: ["Community", "Social Media", "Events"],
		image: "./ProjectsImages/MangaDemon.png",
		gradient: "from-orange-500 to-pink-500",
        website: "https://demonicscans.org/index.php",
	},
];

const Projects = () => {
	return (
		<section id="projects" className="py-24 relative">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Featured{" "}
						<span className="text-gradient" >Projects</span>
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
							{project.image ? (
								<img
									src={project.image}
									alt={project.title}
									className="h-48 w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
								/>
							) : (
								<div
									className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}
								/>
							)}
							<CardContent className="p-6">
								<h3 className="text-2xl font-bold mb-3">
									{project.title}
								</h3>
								<p className="text-muted-foreground mb-4">
									{project.description}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
										>
											{tag}
										</span>
									))}
								</div>
								<div className="flex gap-3">
									{/* Only show Website button if project.website exists */}
									{project.website && (
										<Button
											size="sm"
											variant="outline"
											className="gap-2"
											asChild
										>
											<a href={project.website} target="_blank" rel="noopener noreferrer">
												<ExternalLink className="w-4 h-4" />
												Website
											</a>
										</Button>
									)}
									{/* Only show GitHub button if project.github exists */}
									{project.github && (
										<Button
											size="sm"
											variant="outline"
											className="gap-2"
											asChild
										>
											<a href={project.github} target="_blank" rel="noopener noreferrer">
												<Icon icon="mdi:github" className="w-4 h-4" />
												Code
											</a>
										</Button>
									)}
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
