"use client";

import React from "react";

import { motion } from "framer-motion";
import {
  BarChart3,
  Binary,
  Braces,
  GitBranch,
  Layers,
  Play,
  Zap,
  Keyboard,
  Share2,
  Sparkles,
  ClipboardCopy,
  Check
} from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { SortingBars } from "@/components/animations/sorting-bars";
import { BinaryTree } from "@/components/animations/binary-tree";
import { GraphVisualization } from "@/components/animations/graph-visualization";
import { CodePreview } from "@/components/animations/code-preview";
import { ArraySearch } from "@/components/animations/array-search";
import { AIAssistant } from "@/components/animations/ai-assistant";
import { KeyboardDemo } from "@/components/animations/keyboard-demo";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  index?: number;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="group/btn relative flex items-center justify-center rounded-md bg-[hsl(var(--primary))]/20 p-2 text-[hsl(var(--primary))]/80 transition-all hover:bg-[hsl(var(--primary))]/30 hover:text-[hsl(var(--primary))] cursor-pointer"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.div
              key="check"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <Check className="h-4 w-4" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
            >
              <ClipboardCopy className="h-4 w-4" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tooltip */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-opacity">
          <div className="bg-[hsl(var(--primary))] text-[hsl(var(--background))] text-[10px] font-bold py-1 px-2 rounded whitespace-nowrap">
            {copied ? "Copied!" : "Copy URL"}
            {/* Arrow */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[hsl(var(--primary))] rotate-45" />
          </div>
        </div>
      </button>
    </div>
  );
}

function FeatureCard({ title, description, icon, children, className = "", index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-5 sm:p-6 transition-all duration-300 hover:border-[hsl(var(--primary))]/30 ${className}`}
    >
      {/* Noise overlay */}
      <div className="noise absolute inset-0 opacity-50">
        <div className="absolute inset-0" />
      </div>

      {/* Hover gradient - diagonal slant */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/8 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Corner glow on hover - slanted */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[hsl(var(--primary))]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rotate-12" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] border border-[hsl(var(--primary))]/20 mb-4">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold tracking-tight text-[hsl(var(--foreground))] uppercase">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[hsl(var(--muted-foreground))]">
          {description}
        </p>

        {/* Custom content */}
        {children && <div className="mt-4">{children}</div>}
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--secondary))]/30 to-[hsl(var(--background))]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Noise overlay */}
      <div className="noise absolute inset-0">
        <div className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header - left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="mono-label">/ Features</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[hsl(var(--border))] to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
            EVERYTHING YOU NEED
            <br />
            <span className="text-[hsl(var(--primary))]">100% FREE</span>
          </h2>
          <p className="mt-4 text-[hsl(var(--muted-foreground))] font-mono text-xs sm:text-sm max-w-md">
            Professional visualizations. Zero cost. No catch.
          </p>
        </motion.div>

        {/* Bento Grid - Row 1: Large + 2 small stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 mb-4 lg:mb-5">
          {/* Sorting Algorithms - Large card */}
          <FeatureCard
            title="Sorting Algorithms"
            description="Watch bubble sort, quick sort, merge sort, and more with smooth step-by-step animations."
            icon={<BarChart3 className="h-5 w-5" />}
            className="lg:col-span-2"
            index={0}
          >
            <div className="mt-2 rounded-xl bg-[hsl(var(--secondary))]/50 p-4 border border-[hsl(var(--border))]/50">
              <SortingBars />
            </div>
          </FeatureCard>

          {/* Right column with 2 stacked cards */}
          <div className="flex flex-col gap-4 lg:gap-5">
            {/* Step Control */}
            <FeatureCard
              title="Step Control"
              description="Go forward, backward, or auto-play at your own pace."
              icon={<Play className="h-5 w-5" />}
              index={1}
            >
              <div className="flex gap-2 flex-wrap">
                {["Play", "Pause", "Step", "Reset"].map((action) => (
                  <span
                    key={action}
                    className="rounded-lg bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]/50 px-3 py-1.5 text-xs font-mono text-[hsl(var(--muted-foreground))]"
                  >
                    {action}
                  </span>
                ))}
              </div>
            </FeatureCard>

            {/* Speed Control */}
            <FeatureCard
              title="Speed Control"
              description="Slow-motion to lightning fast animations."
              icon={<Zap className="h-5 w-5" />}
              index={2}
            >
              <div className="space-y-2">
                <div className="h-2 w-full rounded-full bg-[hsl(var(--secondary))] overflow-hidden">
                  <motion.div
                    className="h-2 rounded-full bg-[hsl(var(--primary))]"
                    initial={{ width: "30%" }}
                    animate={{ width: ["30%", "80%", "50%", "30%"] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[hsl(var(--muted-foreground))]">
                  <span>0.5x</span>
                  <span>10x</span>
                </div>
              </div>
            </FeatureCard>
          </div>
        </div>

        {/* Row 2: Search full width */}
        <div className="mb-4 lg:mb-5">
          <FeatureCard
            title="Searching Algorithms"
            description="Linear, binary, and more with visual feedback on every comparison."
            icon={<Binary className="h-5 w-5" />}
            index={3}
          >
            <div className="mt-2 rounded-xl bg-[hsl(var(--secondary))]/50 p-4 border border-[hsl(var(--border))]/50">
              <ArraySearch />
            </div>
          </FeatureCard>
        </div>

        {/* Row 3: Tree + Keyboard + Graph (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-4 lg:mb-5">
          {/* Tree Structures */}
          <FeatureCard
            title="Tree Structures"
            description="Visualize BST, traversals, AVL rotations, and more."
            icon={<GitBranch className="h-5 w-5" />}
            index={4}
          >
            <div className="mt-2 h-36 rounded-xl bg-[hsl(var(--secondary))]/50 p-2 border border-[hsl(var(--border))]/50">
              <BinaryTree />
            </div>
          </FeatureCard>

          {/* Keyboard Shortcuts - with demo animation */}
          <FeatureCard
            title="Keyboard Shortcuts"
            description="Power user controls for efficient navigation."
            icon={<Keyboard className="h-5 w-5" />}
            index={5}
          >
            <div className="mt-2 rounded-xl bg-[hsl(var(--secondary))]/50 p-3 border border-[hsl(var(--border))]/50">
              <KeyboardDemo />
            </div>
          </FeatureCard>

          {/* Graph Algorithms */}
          <FeatureCard
            title="Graph Algorithms"
            description="BFS, DFS, Dijkstra's, and pathfinding visualized."
            icon={<Layers className="h-5 w-5" />}
            className="md:col-span-2 lg:col-span-1"
            index={6}
          >
            <div className="mt-2 h-36 rounded-xl bg-[hsl(var(--secondary))]/50 p-2 border border-[hsl(var(--border))]/50">
              <GraphVisualization />
            </div>
          </FeatureCard>
        </div>

        {/* Row 4: AI Assistant + Code Sync (2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 mb-4 lg:mb-5">
          {/* AI Assistant */}
          <FeatureCard
            title="AI Assistant"
            description="Get explanations, optimizations, and step-by-step guidance powered by AI."
            icon={<Sparkles className="h-5 w-5" />}
            index={7}
          >
            <div className="mt-2 rounded-xl bg-[hsl(var(--secondary))]/50 p-3 border border-[hsl(var(--border))]/50">
              <AIAssistant />
            </div>
          </FeatureCard>

          {/* Code Sync */}
          <FeatureCard
            title="Code Sync"
            description="See the exact line executing as the algorithm runs."
            icon={<Braces className="h-5 w-5" />}
            index={8}
          >
            <div className="mt-2 overflow-hidden rounded-xl border border-[hsl(var(--border))]/50">
              <CodePreview />
            </div>
          </FeatureCard>
        </div>

        {/* Row 5: Shareable URLs full width */}
        <FeatureCard
          title="Shareable URLs"
          description="Share your visualization state with a simple link. Perfect for teaching and collaboration."
          icon={<Share2 className="h-5 w-5" />}
          index={9}
        >
          <div className="rounded-lg bg-[hsl(var(--secondary))] border border-[hsl(var(--border))]/50 px-4 py-3 text-sm font-mono text-[hsl(var(--muted-foreground))] flex items-center justify-between">
            <span>opendsa.dev/visualize/sorting/bubble?data=5,3,8,1&step=4</span>
            <CopyButton text="Nothing here 🥲 - Coming soon" />
          </div>
        </FeatureCard>
      </div>
    </section>
  );
}
