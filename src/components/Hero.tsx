const Hero = () => {
  return (
    <section className="relative border-b border-foreground">
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-grid" />
      <div className="container py-20 md:py-32 relative z-10">
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-balance animate-slide-up pr-4">
            Tony Sanchez | <span className="text-primary italic">SEO Tool Developer</span> & Interactive Experience Specialist
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed animate-fade-in border-l-4 border-foreground pl-6 md:pl-8 pr-4">
            Full-stack developer specializing in custom SEO tools and interactive client experiences for marketing agencies.
            I build scalable, data-driven solutions that help agencies deliver measurable results and stand out in competitive markets.
          </p>
        </div>
      </div>
      <div className="absolute top-0 right-[10%] w-px h-full bg-foreground/10 hidden lg:block" />
    </section>
  );
};



export default Hero;

