export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  detailedFeatures: string[];
  technicalChallenges: string;
  myRole: string;
  tags: string[];
  image?: string;
  video?: string;
  videoType?: "youtube" | "local" | "vimeo";
  gradient: string;
  github?: string;
  demo?: string;
  website?: string;
  gallery?: string[];
  featured?: boolean;
  itchioUrl?: string;
  download?: {
    url: string;
    label: string;
    platform: string;
    version: string;
    fileSize: string;
    installedSize: string;
    storageRequired: string;
    developer: string;
    playStoreUrl?: string;
    steamUrl?: string;
  };
}
