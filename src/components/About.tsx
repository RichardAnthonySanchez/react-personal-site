const About = () => {
  return (
    <section className="bg-secondary">
      <div className="container py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hi, I'm Tony Sanchez
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              In a sea of noisy competitors, you want to be a <em className="font-serif">Waldo</em>. 
              I'm here to put the stripes on that{" "}
              <strong className="text-foreground">help you stand out.</strong>
            </p>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              I'm Tony and I create stuff — art, products, content, software. 
              You name it, I've tried it. I grew up in art school, toured as a guitarist, 
              produced bands, and launched a few failed businesses in the process.
            </p>
            <p className="text-lg leading-relaxed">
              Now, <strong>I'm a developer who's looking to build</strong> in your sandbox. 
              You show me the rules and I'll show you a different way of playing with them.
            </p>
            <p className="text-lg">
              P.S. To understand me,{" "}
              <a
                href="https://blog.tonysanchez.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
              >
                take a look at my blog.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
