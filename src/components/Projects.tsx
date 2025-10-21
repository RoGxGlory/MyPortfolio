import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

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
								<div className="flex flex-wrap gap-3">
									{/* View Details button */}
									<Button
										size="sm"
										variant="default"
										className="gap-2"
										asChild
									>
										<Link to={`/project/${project.id}`}>
											<ArrowRight className="w-4 h-4" />
											View Details
										</Link>
									</Button>
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
