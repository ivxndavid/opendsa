"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Box, Palette, Database, Layers } from "lucide-react";

const technologies = [
  {
    category: "Framework",
    name: "Next.js 14",
    description: "App Router & Server Components",
    icon: <Box className="h-5 w-5" />,
    highlight: true,
  },
  {
    category: "Animation",
    name: "Framer Motion",
    description: "Smooth declarative animations",
    icon: <Zap className="h-5 w-5" />,
    highlight: true,
  },
  {
    category: "Visualization",
    name: "D3.js + Canvas",
    description: "Powerful data visualization",
    icon: <Layers className="h-5 w-5" />,
    highlight: false,
  },
  {
    category: "Styling",
    name: "TailwindCSS",
    description: "Utility-first CSS",
    icon: <Palette className="h-5 w-5" />,
    highlight: false,
  },
  {
    category: "State",
    name: "Zustand",
    description: "Lightweight state",
    icon: <Database className="h-5 w-5" />,
    highlight: false,
  },
  {
    category: "Build",
    name: "Turborepo",
    description: "High-performance monorepo",
    icon: <Cpu className="h-5 w-5" />,
    highlight: false,
  },
];

export function TechStack() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background with accent gradient */}
      <div className="absolute inset-0 bg-[hsl(var(--background))] opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--primary))]/5 via-transparent to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Noise overlay */}
      <div className="noise absolute inset-0">
        <div className="absolute inset-0" />
      </div>

      {/* Decorative orb */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[hsl(var(--primary))]/10 rounded-full blur-[150px] -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Left side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32"
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="h-4 w-4 text-[hsl(var(--primary))]" />
              <span className="mono-label">/ System Diagnostics</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-tight">
              UNDER THE
              <br />
              <span className="text-[hsl(var(--primary))]">HOOD</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed max-w-sm">
              Built on modern browser capabilities. No servers needed for visualizations.
              Everything runs client-side for instant feedback.
            </p>
          </motion.div>

          {/* Right side - Tech grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className={`group relative rounded-xl border p-4 sm:p-5 transition-all duration-300 hover:border-[hsl(var(--primary))]/50 ${tech.highlight
                    ? "border-[hsl(var(--primary))]/30 bg-[hsl(var(--card))]"
                    : "border-[hsl(var(--border))] bg-[hsl(var(--card))]"
                    }`}
                >
                  {/* Noise overlay */}
                  <div className="noise absolute inset-0 rounded-xl overflow-hidden opacity-30">
                    <div className="absolute inset-0" />
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg mb-3 ${tech.highlight
                      ? "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] border border-[hsl(var(--primary))]/20"
                      : "bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]"
                      }`}>
                      {tech.icon}
                    </div>

                    <span className="text-[10px] font-mono uppercase tracking-wider text-[hsl(var(--muted-foreground))]">
                      {tech.category}
                    </span>
                    <h3 className={`mt-1 text-sm sm:text-base font-bold uppercase ${tech.highlight ? "text-[hsl(var(--primary))]" : "text-[hsl(var(--foreground))]"
                      }`}>
                      {tech.name}
                    </h3>
                    <p className="mt-1 text-xs text-[hsl(var(--muted-foreground))] leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
