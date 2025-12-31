const Hero = () => {
  return (
    <section className="container py-16 md:py-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-balance max-w-5xl animate-slide-up">
        Developer, musician, creator.{" "}
        <span className="italic">Building products</span> that help you{" "}
        <span className="text-primary">stand out.</span>
      </h1>
      <div className="mt-8 h-1 w-full bg-foreground" />
    </section>
  );
};

export default Hero;
