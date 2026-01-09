"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 2000),
      setTimeout(() => setStage(3), 3500),
      setTimeout(() => {
        onComplete();
      }, 4500),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
        >
          {/* Animated grain effect */}
          <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
          </div>

          {/* Name reveal */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 100 }}
                  animate={{ y: stage >= 1 ? 0 : 100 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter"
                >
                  Shilin Chhabra
                </motion.h1>
              </div>

              {stage >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-6 text-lg md:text-xl text-foreground/60 font-mono"
                >
                  Cloud Infrastructure • ML Systems • Full-Stack
                </motion.div>
              )}
            </motion.div>

            {/* Scanning line effect */}
            {stage >= 1 && stage < 3 && (
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent"
              />
            )}
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: stage >= 1 ? 0.3 : 0, scale: stage >= 1 ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 border-l-2 border-t-2 border-foreground/30"
            />
          </div>
          <div className="absolute top-8 right-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: stage >= 1 ? 0.3 : 0, scale: stage >= 1 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="w-8 h-8 border-r-2 border-t-2 border-foreground/30"
            />
          </div>
          <div className="absolute bottom-8 left-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: stage >= 1 ? 0.3 : 0, scale: stage >= 1 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-8 h-8 border-l-2 border-b-2 border-foreground/30"
            />
          </div>
          <div className="absolute bottom-8 right-8">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: stage >= 1 ? 0.3 : 0, scale: stage >= 1 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-8 h-8 border-r-2 border-b-2 border-foreground/30"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
