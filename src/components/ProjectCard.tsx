import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  agencyValue: string;
  tech: string;
  liveUrl?: string;
  repoUrl?: string;
}

const ProjectCard = ({ title, description, agencyValue, tech, liveUrl, repoUrl }: ProjectCardProps) => {
  return (
    <article className="group p-6 md:p-8 bg-card border-2 border-foreground transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_hsl(var(--foreground))] h-full flex flex-col">
      <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      <p className="text-sm border-l-2 border-primary pl-4 py-1 mb-6 italic">
        <strong>Agency Value:</strong> {agencyValue}
      </p>
      <div className="mt-auto flex flex-col gap-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Built with <span className="text-foreground">{tech}</span>
        </p>
        <div className="flex gap-3">
          {liveUrl && (
            <Button variant="outline" size="sm" asChild className="hover:bg-primary hover:text-primary-foreground">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                <ExternalLink size={16} />
                LIVE
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button variant="ghost" size="sm" asChild className="hover:bg-foreground hover:text-background">
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                <Github size={16} />
                REPO
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};


export default ProjectCard;
