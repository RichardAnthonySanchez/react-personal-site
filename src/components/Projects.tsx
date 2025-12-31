import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Open Internal Link Juicer",
    description:
      "A lightweight, client-side tool for discovering internal link opportunities using semantic relevance instead of manual guesswork. Helps streamline SEO workflows by identifying the best places to link your content.",
    tech: "TypeScript",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "Easy Chart Widget",
    description:
      "A single-page, no-code tool for non-technical people. Turn JSON data into charts and export them as copy-paste embeds. Simplify your data visualization process without writing a single line of code.",
    tech: "TypeScript",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "WP2Ghost",
    description:
      "Forked from jonhoo/wp2ghost. Convert WordPress XML exports to Ghost JSON import files. A vital tool for migrating blogs from WordPress to the Ghost platform efficiently.",
    tech: "TypeScript",
    liveUrl: "#",
    repoUrl: "#",
  },
];

const Projects = () => {
  return (
    <section className="container py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Check Out My Work
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
