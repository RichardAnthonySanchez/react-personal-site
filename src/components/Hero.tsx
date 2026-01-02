import Lottie from "lottie-react";
import lottieAvatar from "../../public/lottie-avatar.json";

const Hero = () => {
  return (
    <section className="relative border-b border-foreground">
      <div className="absolute inset-0 overflow-hidden pointer-events-none bg-grid opacity-50" />
      <div className="container py-12 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-sans leading-[1.05] tracking-tight text-balance animate-slide-up">
              Tony Sanchez | <span className="text-primary italic font-serif decoration-primary/30 underline decoration-4 underline-offset-[12px]">SEO Tool Developer</span> & Interactive Experience Specialist
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in [animation-delay:100ms] border-l-2 border-primary/20 pl-6 md:pl-8">
              Full-stack developer specializing in custom SEO tools and interactive client experiences for marketing agencies.
              I build scalable, data-driven solutions that help agencies deliver measurable results.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in [animation-delay:300ms]">
            <div className="w-full max-w-[450px] lg:max-w-[550px] relative">
              <Lottie
                animationData={lottieAvatar}
                loop={true}
                className="w-full h-auto mix-blend-multiply dark:mix-blend-normal"
              />
              {/* Subtle architectural background element */}
              <div className="absolute -inset-4 border border-primary/10 -z-10 rounded-full opacity-0 lg:opacity-100 scale-95 hover:scale-100 transition-transform duration-1000" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-[10%] w-px h-full bg-foreground/10 hidden lg:block" />
    </section>
  );
};

export default Hero;

