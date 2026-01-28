"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft, Github, BookOpen, Globe } from "lucide-react";

// Glitch text effect
function GlitchText({ text }: { text: string }) {
  const [glitchedText, setGlitchedText] = useState(text);

  useEffect(() => {
    const glitchChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let interval: NodeJS.Timeout;

    const startGlitch = () => {
      let iterations = 0;
      interval = setInterval(() => {
        setGlitchedText(
          text
            .split("")
            .map((char, index) => {
              if (index < iterations) return text[index];
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join("")
        );
        iterations += 1 / 3;
        if (iterations >= text.length) {
          clearInterval(interval);
          setGlitchedText(text);
        }
      }, 30);
    };

    startGlitch();
    const loopInterval = setInterval(startGlitch, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(loopInterval);
    };
  }, [text]);

  return <span>{glitchedText}</span>;
}

// Floating binary particles
function BinaryParticle({ delay }: { delay: number }) {
  /* eslint-disable react-hooks/purity */
  const { binary, left, duration } = useMemo(() => ({
    binary: Math.random() > 0.5 ? "1" : "0",
    left: Math.random() * 100,
    duration: 5 + Math.random() * 5
  }), []);
  /* eslint-enable react-hooks/purity */

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{
        y: "100vh",
        opacity: [0, 0.3, 0.3, 0]
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute text-[hsl(var(--primary))] text-sm font-mono pointer-events-none select-none"
      style={{ left: `${left}%` }}
    >
      {binary}
    </motion.div>
  );
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setMounted(true);
    setCurrentPath(window.location.pathname);
  }, []);

  // Generate stable random delays for particles
  /* eslint-disable react-hooks/purity */
  const particleDelays = useMemo(() => {
    return Array.from({ length: 20 }, () => Math.random() * 3);
  }, []);
  /* eslint-enable react-hooks/purity */

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen bg-[hsl(var(--background))] overflow-hidden flex items-center justify-center">
      {/* Binary rain */}
      <div className="absolute inset-0 overflow-hidden">
        {particleDelays.map((delay, i) => (
          <BinaryParticle key={i} delay={delay} />
        ))}
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Noise overlay */}
      <div className="noise absolute inset-0 opacity-50">
        <div className="absolute inset-0" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[200px]" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[hsl(var(--primary))]/10 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        {/* Large 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8"
        >
          <h1 className="text-[8rem] sm:text-[12rem] font-extrabold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[hsl(var(--foreground))] to-[hsl(var(--muted-foreground))]/30 font-[family-name:var(--font-syne)]">
            404
          </h1>
          {/* Glitch layers */}
          <div className="absolute inset-0 text-[8rem] sm:text-[12rem] font-extrabold leading-none tracking-tighter text-red-500/20 font-[family-name:var(--font-syne)] animate-pulse" style={{ transform: "translate(2px, 2px)" }}>
            404
          </div>
          <div className="absolute inset-0 text-[8rem] sm:text-[12rem] font-extrabold leading-none tracking-tighter text-[hsl(var(--primary))]/20 font-[family-name:var(--font-syne)] animate-pulse" style={{ transform: "translate(-2px, -2px)" }}>
            404
          </div>
        </motion.div>

        {/* Terminal window */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] overflow-hidden shadow-2xl text-left"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-[hsl(0_0%_6%)] border-b border-[hsl(var(--border))]">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="ml-3 text-xs font-mono text-[hsl(var(--muted-foreground))]">
              system.error
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-2">
            <div className="text-red-400">
              <span className="text-[hsl(var(--muted-foreground))]">[ERROR]</span> Route not found
            </div>
            <div className="text-[hsl(var(--muted-foreground))]">
              <span className="text-[hsl(var(--foreground))]">→</span> requested: <span className="text-yellow-400">&quot;{currentPath}&quot;</span>
            </div>
            <div className="text-[hsl(var(--muted-foreground))]">
              <span className="text-[hsl(var(--foreground))]">→</span> status: <span className="text-red-400">NOT_FOUND</span>
            </div>
            <div className="pt-3 border-t border-[hsl(var(--border))]/50 mt-3">
              <span className="text-[hsl(var(--primary))]">$ </span>
              <span className="text-[hsl(var(--foreground))]">redirect --to </span>
              <span className="text-[hsl(var(--primary))]">/home</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="ml-0.5 inline-block w-2 h-4 bg-[hsl(var(--primary))]"
              />
            </div>
          </div>
        </motion.div>

        {/* Error message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 space-y-4"
        >
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[hsl(var(--foreground))] font-[family-name:var(--font-syne)]">
            <GlitchText text="PAGE NOT FOUND" />
          </h2>
          <p className="text-sm text-[hsl(var(--muted-foreground))] max-w-md mx-auto">
            Looks like you&apos;ve ventured into uncharted territory. The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/"
            className="group flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-6 py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-all hover:opacity-90 glow"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-transparent px-6 py-3 text-sm font-medium text-[hsl(var(--foreground))] transition-all hover:bg-[hsl(var(--secondary))] hover:border-[hsl(var(--primary))]/50"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </motion.div>

        {/* Helpful links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm"
        >
          <Link
            href="https://app.opendsa.vercel.app"
            className="flex items-center gap-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            <Globe className="h-4 w-4" />
            Launch App
          </Link>
          <Link
            href="https://docs.opendsa.vercel.app"
            className="flex items-center gap-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            <BookOpen className="h-4 w-4" />
            Documentation
          </Link>
          <Link
            href="https://github.com/soloshun/opendsa"
            className="flex items-center gap-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            <Github className="h-4 w-4" />
            GitHub
          </Link>
        </motion.div>

        {/* Fun message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-xs font-mono text-[hsl(var(--muted-foreground))]/50"
        >
          Error code: ALGORITHM_NOT_IN_REGISTRY • Time complexity: O(404)
        </motion.p>
      </div>
    </div>
  );
}
