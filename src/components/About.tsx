const About = () => {
  return (
    <div className="space-y-0 relative">
      <section className="bg-secondary relative border-b border-foreground">
        <div className="container py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10 leading-tight pr-4">
                Hi, I'm <br /><span className="text-primary italic">Tony Sanchez</span>
              </h2>
              <div className="bg-card p-8 border-2 border-foreground shadow-[8px_8px_0_0_hsl(var(--foreground))] relative z-10">
                <p className="text-xl leading-relaxed text-muted-foreground italic pr-4">
                  "In the agency world, your clients don't just want reports—they want <strong className="text-foreground not-italic">results they can see and tools they can use</strong>."
                </p>
              </div>
            </div>
            <div className="space-y-8 relative z-10">
              <p className="text-lg leading-relaxed text-foreground/80 pr-4">
                I'm a developer who specializes in creating internal SEO tools and client deliverables for marketing agencies.
                Whether it's automating tedious SEO workflows, visualizing complex data for client presentations,
                or building interactive tools that showcase your agency's capabilities, I help you <strong>deliver more value without scaling headcount</strong>.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80 pr-4">
                My background spans creative problem-solving across multiple disciplines—from touring as a musician
                to producing content—which means I understand how to translate technical concepts into experiences
                that resonate with non-technical stakeholders.
              </p>
              <div className="pt-4 border-t border-foreground/10">
                <p className="text-lg font-bold uppercase tracking-widest text-primary mb-4">
                  The Mission
                </p>
                <p className="text-xl font-medium leading-snug pr-4">
                  I build tools that make your agency indispensable to your clients.
                </p>
              </div>
              <p className="text-lg font-serif italic border-l-2 border-primary pl-4 pr-4">
                P.S. Want to see how I think?{" "}
                <a
                  href="https://blog.tonysanchez.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-8 hover:text-foreground transition-colors"
                >
                  Check out my blog.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background relative py-20 md:py-32 border-b border-foreground">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">Why Agencies Choose Me</h2>
            <div className="h-1 w-24 bg-primary mt-4" />
          </div>
          <div className="grid md:grid-cols-3 gap-0 border-2 border-foreground divide-y-2 md:divide-y-0 md:divide-x-2 divide-foreground">
            <div className="p-8 md:p-12 hover:bg-secondary transition-colors group">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 group-hover:text-primary transition-colors pr-2">I speak both languages.</h3>
              <p className="text-muted-foreground leading-relaxed text-lg pr-2">
                Technical enough to build robust solutions, experienced enough to understand what your clients actually need.
                I've launched businesses, worked with clients, and understand the agency model.
              </p>
            </div>
            <div className="p-8 md:p-12 hover:bg-secondary transition-colors group">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 group-hover:text-primary transition-colors pr-2">Fast, focused execution.</h3>
              <p className="text-muted-foreground leading-relaxed text-lg pr-2">
                I specialize in lightweight, client-side tools using TypeScript that deploy quickly and scale efficiently.
                No bloated frameworks, no unnecessary complexity—just solutions that work.
              </p>
            </div>
            <div className="p-8 md:p-12 hover:bg-secondary transition-colors group">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 group-hover:text-primary transition-colors pr-2">SEO-first mindset.</h3>
              <p className="text-muted-foreground leading-relaxed text-lg pr-2">
                Every tool I build considers crawlability, performance, and user experience.
                I understand what matters for rankings and how to build experiences that support your agency's SEO strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


export default About;

