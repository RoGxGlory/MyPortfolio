import { Project } from "@/types/project";

interface VideoPlayerProps {
  project: Project;
}

const VideoPlayer = ({ project }: VideoPlayerProps) => {
  if (!project.video) {
    return (
      <div className="bg-muted rounded-lg p-8 text-center">
        <p className="text-muted-foreground">No demo video available for this project yet.</p>
      </div>
    );
  }

  // YouTube video
  if (project.videoType === "youtube") {
    const videoId = project.video.includes("youtube.com") 
      ? new URL(project.video).searchParams.get("v")
      : project.video.includes("youtu.be")
      ? project.video.split("/").pop()
      : project.video;

    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={`${project.title} Demo`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Vimeo video
  if (project.videoType === "vimeo") {
    const videoId = project.video.split("/").pop();
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src={`https://player.vimeo.com/video/${videoId}`}
          title={`${project.title} Demo`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // Local video file
  return (
    <video
      className="w-full rounded-lg"
      controls
      preload="metadata"
    >
      <source src={project.video} type="video/mp4" />
      <source src={project.video} type="video/webm" />
      <source src={project.video} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
