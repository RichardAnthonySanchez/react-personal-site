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
    <header className="sticky top-0 z-50 bg-background">
      <div className="container py-6">
        <div className="flex items-center justify-between">
          <a href="#" className="font-serif text-xl font-bold tracking-tight">
            Tony Sanchez
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" size="sm" asChild>
              <a href="#contact">LET'S TALK</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-6 pb-4 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="text-sm font-medium tracking-wide hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="default" size="sm" className="w-fit" asChild>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>LET'S TALK</a>
            </Button>
          </nav>

        )}
      </div>
      <div className="border-t border-foreground" />
    </header>
  );
};

export default Header;
