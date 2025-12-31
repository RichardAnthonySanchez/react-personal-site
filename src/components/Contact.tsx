import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "tony@tonysanchez.dev";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast.success("Email copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy email");
    }
  };

  return (
    <section id="contact" className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-primary/30" />
      <div className="container py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tighter">
            Let's <span className="text-primary italic">Collaborate</span>
          </h2>
          <p className="text-xl md:text-2xl text-background/60 mb-12 leading-relaxed font-serif italic border-l-4 border-primary pl-8">
            Let's talk about how custom tools can differentiate your agency and add value to your client relationships.
          </p>
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-6">
            <a
              href={`mailto:${email}`}
              className="text-2xl md:text-4xl font-bold hover:text-primary transition-colors border-b-4 border-primary/20 hover:border-primary pb-2"
            >
              {email}
            </a>
            <Button
              variant="secondary"
              size="lg"
              onClick={copyEmail}
              className="gap-3 rounded-none font-bold uppercase tracking-widest h-14 px-8 border-2 border-background hover:bg-primary hover:text-primary-foreground transition-all"
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? "Copied!" : "Copy Address"}
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default Contact;
