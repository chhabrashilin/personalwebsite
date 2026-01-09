"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, className, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.3, delay, ease: "easeOut" }}
      className={clsx("w-full", className)}
    >
      {children}
    </motion.section>
  );
};

export default Section;
