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
    <section id="contact" className="bg-foreground text-background">
      <div className="container py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl">
          Let's talk about how custom tools can differentiate your agency and add value to your client relationships.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href={`mailto:${email}`}
            className="text-xl md:text-2xl font-medium hover:text-primary transition-colors"
          >
            {email}
          </a>
          <Button
            variant="secondary"
            size="sm"
            onClick={copyEmail}
            className="gap-2"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? "Copied!" : "Copy email to clipboard"}
          </Button>
        </div>
      </div>
    </section>

  );
};

export default Contact;
