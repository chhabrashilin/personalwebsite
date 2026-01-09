import { Github, Linkedin, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            {SITE_CONFIG.name} © {currentYear}
          </p>

          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={SITE_CONFIG.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.author.email}`}
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
