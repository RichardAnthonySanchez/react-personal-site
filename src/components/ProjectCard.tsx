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
    <article className="group p-8 bg-card border-2 border-foreground transition-all hover:translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_0_hsl(var(--foreground))] h-full flex flex-col relative">
      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-16 h-16 bg-foreground/5 -mr-8 -mt-8 rotate-45" />
      </div>

      <h3 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-tighter leading-none pr-4">
        {title}
      </h3>

      <p className="text-muted-foreground leading-relaxed mb-8 text-lg pr-4">
        {description}
      </p>

      <div className="bg-secondary/50 p-6 border-l-4 border-primary mb-8 relative">
        <span className="absolute -top-3 left-4 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
          Agency Impact
        </span>
        <p className="text-sm md:text-base font-medium italic leading-relaxed pr-4">
          {agencyValue}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-foreground/10" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground whitespace-nowrap">
            Stack: <span className="text-foreground">{tech}</span>
          </p>
          <div className="h-px flex-1 bg-foreground/10" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {liveUrl && (
            <Button variant="outline" size="lg" asChild className="w-full rounded-none border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-all font-bold uppercase tracking-wider text-xs md:text-sm">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
          {repoUrl && (
            <Button variant="ghost" size="lg" asChild className="w-full rounded-none border-2 border-foreground hover:bg-foreground hover:text-background transition-all font-bold uppercase tracking-wider text-xs md:text-sm">
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Github size={16} />
                <span>Source</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};




export default ProjectCard;
