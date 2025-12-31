import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard = ({ title, description, tech, liveUrl, repoUrl }: ProjectCardProps) => {
  return (
    <article className="group p-6 md:p-8 bg-card border-2 border-foreground transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_hsl(var(--foreground))]">
      <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      <p className="text-sm font-medium mb-6">
        Built with <span className="text-primary font-semibold">{tech}</span>
      </p>
      <div className="flex gap-3">
        {liveUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
              <ExternalLink size={16} />
              LIVE
            </a>
          </Button>
        )}
        {repoUrl && (
          <Button variant="ghost" size="sm" asChild>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
              <Github size={16} />
              REPO
            </a>
          </Button>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
