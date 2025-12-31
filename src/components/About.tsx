const About = () => {
  return (
    <div className="space-y-0">
      <section className="bg-secondary">
        <div className="container py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hi, I'm Tony Sanchez
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                In the agency world, your clients don't just want reports—they want <em className="italic">results they can see and tools they can use</em>.
                I build <strong className="text-foreground">custom SEO utilities and interactive experiences</strong> that turn your agency's expertise into client-facing value.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a developer who specializes in creating internal SEO tools and client deliverables for marketing agencies.
                Whether it's automating tedious SEO workflows, visualizing complex data for client presentations,
                or building interactive tools that showcase your agency's capabilities, I help you <strong>deliver more value without scaling headcount</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                My background spans creative problem-solving across multiple disciplines—from touring as a musician
                to producing content—which means I understand how to translate technical concepts into experiences
                that resonate with non-technical stakeholders.
              </p>
              <p className="text-lg font-medium">
                I build tools that make your agency indispensable to your clients.
              </p>
              <p className="text-lg">
                P.S. Want to see how I think?{" "}
                <a
                  href="https://blog.tonysanchez.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
                >
                  Check out my blog.
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background border-y border-foreground">
        <div className="container py-16 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Agencies Choose Me</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight">I speak both languages.</h3>
              <p className="text-muted-foreground leading-relaxed">
                Technical enough to build robust solutions, experienced enough to understand what your clients actually need.
                I've launched businesses, worked with clients, and understand the agency model—I build tools that solve
                real operational challenges, not just technical exercises.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight">Fast, focused execution.</h3>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in lightweight, client-side tools using TypeScript that deploy quickly and scale efficiently.
                No bloated frameworks, no unnecessary complexity—just solutions that work.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold uppercase tracking-tight">SEO-first mindset.</h3>
              <p className="text-muted-foreground leading-relaxed">
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

