"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import IntroSequence from "@/components/animations/IntroSequence";
import ParticleField from "@/components/canvas/ParticleField";
import MagneticButton from "@/components/ui/MagneticButton";
import { HIGHLIGHTS, SITE_CONFIG } from "@/lib/constants";
import { PROJECTS } from "@/lib/projects";

export default function CinematicHome() {
  const [introComplete, setIntroComplete] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  return (
    <>
      {!introComplete && <IntroSequence onComplete={() => setIntroComplete(true)} />}

      {introComplete && (
        <div ref={containerRef} className="relative">
          <ParticleField />

          {/* Hero Section - Cinematic */}
          <motion.section
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="relative min-h-screen flex items-center justify-center px-6"
          >
            <div className="max-w-7xl mx-auto text-center">
              {/* Animated grid background */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]" />
              </div>

              {/* Main title with glitch effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative mb-8"
              >
                <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-none">
                  <span className="inline-block">
                    {["S", "h", "i", "l", "i", "n"].map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.5 + i * 0.05,
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                  <br />
                  <span className="inline-block">
                    {["C", "h", "h", "a", "b", "r", "a"].map((letter, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: 0.8 + i * 0.05,
                          duration: 0.8,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="inline-block"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                </h1>

                {/* Glow effect */}
                <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 -z-10" />
              </motion.div>

              {/* Animated tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="mb-12"
              >
                <p className="text-xl md:text-3xl text-foreground/70 font-mono">
                  <span className="inline-block overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 1.5, duration: 0.6 }}
                      className="block"
                    >
                      Cloud Infrastructure
                    </motion.span>
                  </span>
                  <span className="mx-3">•</span>
                  <span className="inline-block overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 1.7, duration: 0.6 }}
                      className="block"
                    >
                      ML Systems
                    </motion.span>
                  </span>
                  <span className="mx-3">•</span>
                  <span className="inline-block overflow-hidden">
                    <motion.span
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 1.9, duration: 0.6 }}
                      className="block"
                    >
                      Full-Stack
                    </motion.span>
                  </span>
                </p>
              </motion.div>

              {/* CTA buttons with magnetic effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link href="/projects">
                  <MagneticButton className="px-8 py-4 bg-foreground text-background rounded-full text-lg font-medium flex items-center gap-2">
                    View Work
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                </Link>
                <Link href="/contact">
                  <MagneticButton className="px-8 py-4 border-2 border-foreground/20 rounded-full text-lg font-medium">
                    Get In Touch
                  </MagneticButton>
                </Link>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.8, duration: 0.8 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="flex flex-col items-center gap-2 text-foreground/40"
                >
                  <span className="text-xs font-mono">SCROLL</span>
                  <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/40 to-transparent" />
                </motion.div>
              </motion.div>
            </div>
          </motion.section>

          {/* Highlights Section - Minimal & Animated */}
          <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
            <div className="max-w-7xl mx-auto w-full">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-20 text-center"
              >
                Impact
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {HIGHLIGHTS.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    className="group p-8 border border-foreground/10 hover:border-foreground/30 transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
                      <p className="text-foreground/60 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Featured Projects Preview */}
          <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
            <div className="max-w-7xl mx-auto w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="mb-20"
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-6">Featured Work</h2>
                <Link href="/projects">
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="text-foreground/60 flex items-center gap-2 text-lg"
                  >
                    View all projects <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              </motion.div>

              <div className="space-y-6">
                {PROJECTS.filter((p) => p.featured)
                  .slice(0, 3)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: index * 0.1, duration: 0.8 }}
                      className="group border-t border-foreground/10 py-8 hover:border-foreground/30 transition-colors duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                            {project.name}
                          </h3>
                          <p className="text-foreground/60 mb-4">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 4).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 text-xs bg-foreground/5 border border-foreground/10 rounded-full font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="text-foreground/40 group-hover:text-foreground transition-colors"
                        >
                          <ArrowRight className="w-8 h-8" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
                  Let&apos;s build
                  <br />
                  something
                  <br />
                  impossible.
                </h2>
                <p className="text-xl text-foreground/60 mb-12 max-w-2xl mx-auto">
                  Open to internships and full-time opportunities starting December 2026.
                  Always interested in research collaborations and technical challenges.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                  <Link href="/contact">
                    <MagneticButton className="px-8 py-4 bg-foreground text-background rounded-full text-lg font-medium">
                      Start a Conversation
                    </MagneticButton>
                  </Link>
                </div>

                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="flex gap-8 justify-center"
                >
                  <a
                    href={SITE_CONFIG.author.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/40 hover:text-foreground transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={SITE_CONFIG.author.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/40 hover:text-foreground transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href={`mailto:${SITE_CONFIG.author.email}`}
                    className="text-foreground/40 hover:text-foreground transition-colors"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
