import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import VideoPlayer from "@/components/VideoPlayer";
import { projects } from "@/data/projects";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link to="/#projects">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover blur-2xl"
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`} />
          )}
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-4 py-2 rounded-full bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {project.github && (
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Icon icon="mdi:github" className="w-5 h-5" />
                    View Code
                  </a>
                </Button>
              )}
              {project.demo && (
                <Button size="lg" variant="default" className="gap-2" asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.website && (
                <Button size="lg" variant="outline" className="gap-2" asChild>
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5" />
                    Visit Website
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* Video Section */}
            {project.video && (
              <Card className="glass-card border-border overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-3xl font-bold mb-6">Demo Video</h2>
                  <VideoPlayer project={project} />
                </CardContent>
              </Card>
            )}

            {/* Full Description */}
            <Card className="glass-card border-border">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">About the Project</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="glass-card border-border">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {project.detailedFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">▹</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Technical Challenges */}
            <Card className="glass-card border-border">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">Technical Challenges</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.technicalChallenges}
                </p>
              </CardContent>
            </Card>

            {/* My Role */}
            <Card className="glass-card border-border">
              <CardContent className="p-6">
                <h2 className="text-3xl font-bold mb-4">My Role</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.myRole}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Back to Projects CTA */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <Link to="/#projects">
            <Button size="lg" variant="outline" className="gap-2">
              <ArrowLeft className="w-5 h-5" />
              View All Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
