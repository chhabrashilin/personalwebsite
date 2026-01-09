"use client";

import Link from "next/link";
import { ArrowRight, Trophy, Microscope, Briefcase, Users } from "lucide-react";
import Button from "@/components/Button";
import Section from "@/components/Section";
import { HIGHLIGHTS } from "@/lib/constants";

const iconMap = {
  trophy: Trophy,
  microscope: Microscope,
  briefcase: Briefcase,
  users: Users,
};

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Section className="mx-auto max-w-4xl px-6 lg:px-8 py-24 md:py-32">
        <div className="space-y-6 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance">
            Shilin Chhabra
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 text-balance">
            Building cloud-native systems and ML infrastructure at scale.
          </p>
          <p className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto text-balance">
            Computer Science and Data Science student at UW-Madison. Software Engineering Research
            Intern at NSF NCAR, deploying production Kubernetes platforms for atmospheric research.
            Passionate about cloud infrastructure, big data systems, and solving real-world problems
            with elegant engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Highlights Section */}
      <Section className="bg-foreground/[0.02] border-y border-border" delay={0.1}>
        <div className="mx-auto max-w-6xl px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((highlight, index) => {
              const Icon = iconMap[highlight.icon as keyof typeof iconMap];
              return (
                <div
                  key={highlight.title}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border hover:border-foreground/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-foreground/5 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-foreground/60">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="mx-auto max-w-4xl px-6 lg:px-8 py-24" delay={0.2}>
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold">Let&apos;s Build Something Together</h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            I&apos;m always open to discussing new opportunities, research collaborations, or
            interesting technical challenges. Looking for internships and full-time roles
            starting December 2026.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
