"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background - base layer */}
      <div className="absolute inset-0 bg-[hsl(var(--background))] z-0 opacity-90" />

      {/* Grid pattern - subtle overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50 z-[1]" />

      {/* Noise texture overlay */}
      <div className="noise absolute inset-0 z-[2] pointer-events-none">
        <div className="absolute inset-0" />
      </div>

      {/* Gradient orbs - decorative */}
      <div className="absolute top-1/3 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[hsl(var(--primary))]/10 rounded-full blur-[100px] sm:blur-[150px] z-[1] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[hsl(var(--primary))]/8 rounded-full blur-[80px] sm:blur-[120px] z-[1] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-[10] mx-auto max-w-7xl w-full px-4 sm:px-6 pt-28 pb-20 sm:pt-40 sm:pb-32 lg:px-8">
        {/* Centered content wrapper */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Top badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 sm:mb-8 flex items-center justify-center gap-2 sm:gap-4 flex-wrap"
          >
            <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--secondary))]/50 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-[hsl(var(--muted-foreground))] backdrop-blur-sm font-mono uppercase tracking-wider">
              <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[hsl(var(--primary))]" />
              100% Open Source
            </span>
            <Link
              href="https://github.com/soloshun/opendsa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--secondary))]/50 px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium text-[hsl(var(--muted-foreground))] backdrop-blur-sm font-mono uppercase tracking-wider transition-colors hover:border-[hsl(var(--primary))]/50 hover:text-[hsl(var(--foreground))]"
            >
              <Github className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
              Star on GitHub
            </Link>
          </motion.div>

          {/* Main heading - Mobile responsive and always centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-1 sm:space-y-2"
          >
            <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-[0.95]">
              VISUALIZE
            </h1>
            <div className="flex items-center justify-center">
              <span className="highlight-box text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                ALGORITHMS
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-[hsl(var(--primary))] leading-[0.95] glow-text">
              BEAUTIFULLY
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 sm:mt-10 text-sm sm:text-base md:text-lg leading-relaxed text-[hsl(var(--muted-foreground))] max-w-xl sm:max-w-2xl mx-auto px-2"
          >
            The open-source algorithm visualization platform. Interactive visualizations
            for sorting, searching, graphs, trees, and more. Learn through{" "}
            <span className="text-[hsl(var(--foreground))] font-medium">step-by-step animations</span>.
          </motion.p>

          {/* Feature tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 sm:mt-6 flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-[hsl(var(--muted-foreground))] flex-wrap"
          >
            <span className="underline-primary text-[hsl(var(--foreground))]">Free forever</span>
            <span className="text-[hsl(var(--border))]">·</span>
            <span className="underline-primary text-[hsl(var(--foreground))]">No sign-up</span>
            <span className="text-[hsl(var(--border))]">·</span>
            <span>MIT Licensed</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none px-4 sm:px-0"
          >
            <Link
              href="https://app-opendsa.vercel.app" // TODO: CHANGE URL TO https://app.opendsa.dev AFTER DOMAIN IS BOUGHT
              className="group w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-[hsl(var(--primary))] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[hsl(var(--primary-foreground))] transition-all hover:opacity-90 glow"
            >
              Start Visualizing
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--border))] bg-transparent px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-[hsl(var(--foreground))] transition-all hover:bg-[hsl(var(--secondary))]/80 hover:border-[hsl(var(--primary))]/50"
            >
              See Features
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[hsl(var(--background))] to-transparent z-[5]" />

      {/* Scroll indicator - hide on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-[10]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-[hsl(var(--muted-foreground))]"
        >
          <div className="h-10 w-6 rounded-full border-2 border-[hsl(var(--border))] p-1 flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
