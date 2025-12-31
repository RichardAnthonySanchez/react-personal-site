const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-muted-foreground/30">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <p className="text-sm font-bold uppercase tracking-[0.2em]">
              © {currentYear} Tony Sanchez
            </p>
            <p className="text-xs text-background/60 tracking-wider">
              SEO Tool Developer & Interactive Experience Specialist
            </p>
          </div>
          <nav className="flex gap-8">
            <a
              href="https://blog.tonysanchez.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors pb-1 border-b-2 border-transparent hover:border-primary"
            >
              Blog
            </a>
            <a
              href="https://drive.google.com/file/d/1S9oNNGefGbfQYHStlBrvIRTuI2AdGxao/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors pb-1 border-b-2 border-transparent hover:border-primary"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
