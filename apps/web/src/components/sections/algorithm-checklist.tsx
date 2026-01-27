"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronRight, Check, Circle, Terminal, Sparkles, Rocket } from "lucide-react";
import { categories, getTotalCount, getCategoryCount, type Category, type AlgorithmTopic } from "@/lib/algorithms-data";

interface SubcategoryProps {
  name: string;
  topics: AlgorithmTopic[];
}

function Subcategory({ name, topics }: SubcategoryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const implementedCount = topics.filter(t => t.implemented).length;

  return (
    <div className="space-y-1">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-[hsl(var(--foreground))]/80 text-xs sm:text-sm font-medium flex items-center gap-2 hover:text-[hsl(var(--foreground))] transition-colors py-1"
      >
        {isOpen ? (
          <ChevronDown className="h-3 w-3 text-[hsl(var(--muted-foreground))]" />
        ) : (
          <ChevronRight className="h-3 w-3 text-[hsl(var(--muted-foreground))]" />
        )}
        <span className="cursor-pointer">{name}</span>
        <span className="text-[10px] font-mono text-[hsl(var(--muted-foreground))] ml-auto">
          {implementedCount}/{topics.length}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-5 space-y-0.5 overflow-hidden"
          >
            {topics.map((item, index) => (
              <div
                key={index}
                className={`group flex items-center justify-between text-xs transition-colors duration-200 py-0.5 ${item.implemented
                  ? "text-[hsl(var(--primary))]"
                  : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                  }`}
              >
                <span className="flex items-center gap-2 cursor-default">
                  <span className="text-[hsl(var(--muted-foreground))]/50 ">
                    {index === topics.length - 1 ? "└─" : "├─"}
                  </span>
                  {item.name}
                </span>
                <span title={item.implemented ? "Implemented" : "Pending"}>
                  {item.implemented ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Circle className="h-3 w-3" />
                  )}
                </span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface CategorySectionProps {
  category: Category;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

function CategorySection({ category, visible, setVisible }: CategorySectionProps) {
  const { total, implemented } = getCategoryCount(category);

  return (
    <div className="w-full">
      <button
        className="w-full text-left text-[hsl(var(--primary))] text-sm sm:text-base font-semibold mb-4 cursor-pointer hover:text-[hsl(var(--primary))]/80 flex items-center gap-2 transition-colors"
        onClick={() => setVisible(!visible)}
      >
        {visible ? (
          <ChevronDown className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
        <span>{category.title}</span>
        <span className="text-xs font-mono text-[hsl(var(--muted-foreground))] ml-auto">
          {implemented}/{total}
        </span>
      </button>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4 space-y-2 overflow-hidden"
          >
            {Object.entries(category.items).map(([topic, { topics }]) => (
              <Subcategory key={topic} name={topic} topics={topics} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function AlgorithmChecklist() {
  const [dsVisible, setDsVisible] = useState(true);
  const [algoVisible, setAlgoVisible] = useState(true);
  const { total, implemented } = getTotalCount();
  const progress = Math.round((implemented / total) * 100);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(var(--background))]/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--primary))]/5 to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Noise overlay */}
      <div className="noise absolute inset-0">
        <div className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Rocket className="h-4 w-4 text-[hsl(var(--primary))]" />
            <span className="mono-label">/ Implementation Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
            THE <span className="text-[hsl(var(--primary))]">AMBITIOUS</span> LIST
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            {total}+ algorithms and data structures. This is what we&apos;re building together.
            Pick one and contribute, or suggest new ones. ML/DL, Maths, Physics, algorithms from other fields, and visualizers are all welcome.
          </p>

          {/* Progress bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="flex items-center justify-between text-xs font-mono text-[hsl(var(--muted-foreground))] mb-2">
              <span>Progress</span>
              <span>{implemented}/{total} ({progress}%)</span>
            </div>
            <div className="h-2 w-full rounded-full bg-[hsl(var(--secondary))] overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-[hsl(var(--primary))]"
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Terminal-style container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(0_0%_4%)]/90 overflow-hidden shadow-2xl shadow-black/50"
        >
          {/* Terminal header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-[hsl(var(--border))] bg-[hsl(0_0%_6%)]">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              <Terminal className="h-4 w-4 text-[hsl(var(--muted-foreground))] ml-2" />
            </div>
            <span className="text-xs font-mono text-[hsl(var(--muted-foreground))]">
              opendsa@roadmap ~ $
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-4 sm:p-6">
            {/* Header banner */}
            <div className="text-center mb-6 pb-4 border-b border-[hsl(var(--border))]/50">
              <div className="flex items-center justify-center gap-2 text-[hsl(var(--primary))] font-bold text-lg sm:text-xl">
                <Sparkles className="h-5 w-5" />
                OpenDSA Implementation Roadmap
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-xs text-[hsl(var(--muted-foreground))] mt-2">
                Click on any category to expand/collapse
              </p>
            </div>

            {/* Two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="lg:border-r lg:border-[hsl(var(--border))]/30 lg:pr-8">
                <CategorySection
                  category={categories.dataStructures}
                  visible={dsVisible}
                  setVisible={setDsVisible}
                />
              </div>

              <div>
                <CategorySection
                  category={categories.algorithms}
                  visible={algoVisible}
                  setVisible={setAlgoVisible}
                />
              </div>
            </div>

            {/* Legend */}
            <div className="mt-6 pt-4 border-t border-[hsl(var(--border))]/50 flex flex-wrap items-center gap-4 text-xs text-[hsl(var(--muted-foreground))]">
              <span>Status:</span>
              <span className="flex items-center gap-1.5 text-[hsl(var(--primary))]">
                <Check className="h-3 w-3" /> Implemented
              </span>
              <span className="flex items-center gap-1.5">
                <Circle className="h-3 w-3" /> Pending
              </span>
            </div>

            {/* Cursor */}
            <div className="mt-4 text-[hsl(var(--primary))] font-mono text-sm flex items-center gap-1">
              <span>$</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-[hsl(var(--primary))]"
              />
            </div>
          </div>
        </motion.div>

        {/* Future plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
            <span className="text-[hsl(var(--primary))] font-semibold">Open to Contributions:</span>{" "}
            Machine Learning, Deep Learning, Physics, Math, Algorithm Visualizers etc...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
