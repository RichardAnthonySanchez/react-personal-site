import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "OPEN INTERNAL LINK JUICER",
    description:
      "A lightweight, client-side tool for discovering internal link opportunities using semantic relevance instead of manual guesswork. This TypeScript-based utility helps agencies streamline SEO workflows by automatically identifying high-value internal linking opportunities.",
    agencyValue: "Reduce content audit time by 70% while improving link strategy quality.",
    tech: "TypeScript",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "EASY CHART WIDGET",
    description:
      "A single-page, no-code tool that turns JSON data into embeddable charts for client reports and presentations. Built for agencies serving non-technical clients, this tool allows anyone to transform complex SEO data into visual stories.",
    agencyValue: "Create professional, branded data visualizations in minutes, not hours.",
    tech: "TypeScript",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "WP2GHOST MIGRATION TOOL",
    description:
      "Forked and enhanced from jonhoo/wp2ghost. Seamlessly convert WordPress XML exports to Ghost JSON imports. The TypeScript core ensures reliable, repeatable migrations that preserve content integrity and SEO metadata.",
    agencyValue: "Offer content migration as a premium service with minimal technical overhead.",
    tech: "TypeScript",
    liveUrl: "#",
    repoUrl: "#",
  },
];


const Projects = () => {
  return (
    <section className="container py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        SEO Tools & Client Solutions
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
