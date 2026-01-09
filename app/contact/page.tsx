import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import Section from "@/components/Section";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata = {
  title: "Contact - Your Name",
  description: "Get in touch with me for collaboration, opportunities, or questions.",
};

export default function ContactPage() {
  return (
    <div className="w-full">
      <Section className="mx-auto max-w-4xl px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold">Get In Touch</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be
              part of your vision. Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href={`mailto:${SITE_CONFIG.author.email}`}
              className="group p-6 rounded-xl border border-border bg-foreground/[0.02] hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <Mail className="w-6 h-6 text-foreground/70" />
                </div>
                <div>
                  <h2 className="font-semibold mb-1">Email</h2>
                  <p className="text-sm text-foreground/60 mb-2">
                    Best for formal inquiries and opportunities
                  </p>
                  <p className="text-sm font-mono text-foreground/80">
                    {SITE_CONFIG.author.email}
                  </p>
                </div>
              </div>
            </a>

            <a
              href={SITE_CONFIG.author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-border bg-foreground/[0.02] hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <Linkedin className="w-6 h-6 text-foreground/70" />
                </div>
                <div>
                  <h2 className="font-semibold mb-1">LinkedIn</h2>
                  <p className="text-sm text-foreground/60 mb-2">
                    Connect for professional networking
                  </p>
                  <p className="text-sm text-foreground/80">View Profile →</p>
                </div>
              </div>
            </a>

            <a
              href={SITE_CONFIG.author.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-xl border border-border bg-foreground/[0.02] hover:border-foreground/20 hover:bg-foreground/[0.04] transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                  <Github className="w-6 h-6 text-foreground/70" />
                </div>
                <div>
                  <h2 className="font-semibold mb-1">GitHub</h2>
                  <p className="text-sm text-foreground/60 mb-2">
                    Check out my code and contributions
                  </p>
                  <p className="text-sm text-foreground/80">View Projects →</p>
                </div>
              </div>
            </a>

            <div className="p-6 rounded-xl border border-border bg-foreground/[0.02]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-foreground/70" />
                </div>
                <div>
                  <h2 className="font-semibold mb-1">Location</h2>
                  <p className="text-sm text-foreground/60 mb-2">Open to remote opportunities</p>
                  <p className="text-sm text-foreground/80">San Francisco Bay Area</p>
                </div>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="border-l-4 border-foreground/20 pl-4 py-2">
            <p className="text-sm text-foreground/60">
              <strong>Response Time:</strong> I typically respond to emails within 24-48 hours. For
              urgent matters, feel free to mention it in the subject line.
            </p>
          </div>

          {/* Alternative: Contact Form */}
          <div className="pt-8 border-t border-border">
            <div className="bg-foreground/[0.02] rounded-xl p-6 text-center">
              <h3 className="font-semibold mb-2">Want a contact form?</h3>
              <p className="text-sm text-foreground/60">
                Consider integrating services like{" "}
                <a
                  href="https://formspree.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Formspree
                </a>
                ,{" "}
                <a
                  href="https://getform.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Getform
                </a>
                , or{" "}
                <a
                  href="https://www.emailjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  EmailJS
                </a>{" "}
                for a simple form integration without backend code.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
