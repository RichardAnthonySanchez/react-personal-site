import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "#" },
    { label: "BLOG", href: "https://blog.tonysanchez.dev/", external: true },
    { label: "CONTACT", href: "#contact" },
    { label: "RESUME", href: "https://drive.google.com/file/d/1S9oNNGefGbfQYHStlBrvIRTuI2AdGxao/view?usp=drive_link", external: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm border-b-2 border-foreground">
      <div className="container py-2 md:py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src="/logo-charcoal.svg"
              alt="Tony Sanchez Logo"
              className="h-20 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-xs font-bold tracking-[0.15em] hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" size="sm" asChild className="rounded-none border-2 border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
              <a href="#contact">LET'S TALK</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4 animate-fade-in border-t border-foreground/10 mt-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-bold tracking-widest hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" size="sm" className="w-fit rounded-none border-2 border-foreground" asChild>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>LET'S TALK</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
