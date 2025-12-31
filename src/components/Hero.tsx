const Hero = () => {
  return (
    <section className="container py-16 md:py-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-balance max-w-5xl animate-slide-up">
        Tony Sanchez | <span className="text-primary italic">SEO Tool Developer</span> & Interactive Experience Specialist
      </h1>
      <p className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed animate-fade-in">
        Full-stack developer specializing in custom SEO tools and interactive client experiences for marketing agencies.
        I build scalable, data-driven solutions that help agencies deliver measurable results and stand out in competitive markets.
      </p>
      <div className="mt-12 h-1 w-full bg-foreground" />
    </section>
  );
};

export default Hero;

