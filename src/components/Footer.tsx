const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background border-t border-muted-foreground/30">
      <div className="container py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Tony Sanchez. All rights reserved.
          </p>
          <nav className="flex gap-6">
            <a
              href="https://blog.tonysanchez.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-background transition-colors"
            >
              Blog
            </a>
            <a
              href="https://drive.google.com/file/d/1S9oNNGefGbfQYHStlBrvIRTuI2AdGxao/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-background transition-colors"
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
