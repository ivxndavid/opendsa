"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Compass,
  Rocket,
  Users,
  CheckCircle2,
  Circle,
} from "lucide-react";

interface RoadmapItem {
  phase: string;
  title: string;
  quarter: string;
  status: "completed" | "current" | "upcoming";
  items: string[];
  icon: React.ReactNode;
}

const roadmapItems: RoadmapItem[] = [
  {
    phase: "01",
    title: "Foundation",
    quarter: "Q1 2026",
    status: "current",
    icon: <Rocket className="h-5 w-5" />,
    items: [
      "Turborepo monorepo setup",
      "5 sorting algorithms",
      "2 searching algorithms",
      "Animation engine",
    ],
  },
  {
    phase: "02",
    title: "Core Features",
    quarter: "Q2 2026",
    status: "upcoming",
    icon: <Code2 className="h-5 w-5" />,
    items: [
      "Graph algorithms",
      "Tree visualizations",
      "Data structures",
      "Code editor integration",
    ],
  },
  {
    phase: "03",
    title: "Learning",
    quarter: "Q3 2026",
    status: "upcoming",
    icon: <Users className="h-5 w-5" />,
    items: [
      "Learning paths",
      "Interactive tutorials",
      "Challenge mode",
      "Community features",
    ],
  },
  {
    phase: "04",
    title: "Advanced",
    quarter: "Q4 2026",
    status: "upcoming",
    icon: <Compass className="h-5 w-5" />,
    items: [
      "User accounts",
      "Save visualizations",
      "Embed widget",
      "Public API",
    ],
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--background))] to-[hsl(var(--primary))]/5 opacity-95" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Noise overlay */}
      <div className="noise absolute inset-0">
        <div className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header - right aligned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 sm:mb-20 text-right"
        >
          <div className="flex items-center gap-3 mb-4 justify-end">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-[hsl(var(--border))] to-transparent" />
            <span className="mono-label">/ Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
            THE PATH TO{" "}
            <span className="text-[hsl(var(--primary))]">V1.0</span>
          </h2>
          <p className="mt-4 text-[hsl(var(--muted-foreground))] font-mono text-xs sm:text-sm">
            Building in public. Ship fast, iterate faster.
          </p>
        </motion.div>

        {/* Zigzag Timeline */}
        <div className="relative">
          {/* Animated connecting line - hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--primary))]/50 to-[hsl(var(--border))] origin-left"
            />
          </div>

          {/* Timeline items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {roadmapItems.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative ${isEven ? "lg:-mt-8" : "lg:mt-8"}`}
                >
                  {/* Connector dot */}
                  <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.15 + 0.3 }}
                      className={`h-4 w-4 rounded-full border-2 ${item.status === "current"
                        ? "bg-[hsl(var(--primary))] border-[hsl(var(--primary))] shadow-lg shadow-[hsl(var(--primary))]/50"
                        : item.status === "completed"
                          ? "bg-[hsl(var(--primary))] border-[hsl(var(--primary))]"
                          : "bg-[hsl(var(--background))] border-[hsl(var(--border))]"
                        }`}
                    />
                    {item.status === "current" && (
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 rounded-full bg-[hsl(var(--primary))]"
                      />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`relative group rounded-2xl border p-5 sm:p-6 transition-all duration-300 hover:border-[hsl(var(--primary))]/30 ${item.status === "current"
                      ? "border-[hsl(var(--primary))]/40 bg-[hsl(var(--card))]"
                      : "border-[hsl(var(--border))] bg-[hsl(var(--card))]"
                      }`}
                  >
                    {/* Noise overlay */}
                    <div className="noise absolute inset-0 rounded-2xl overflow-hidden opacity-50">
                      <div className="absolute inset-0" />
                    </div>

                    {/* Hover gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative z-10">
                      {/* Phase number and status */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-3xl font-extrabold text-[hsl(var(--primary))]/20 font-mono">
                          {item.phase}
                        </span>
                        {item.status === "current" ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))] border border-[hsl(var(--primary))]/30">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--primary))] opacity-75" />
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[hsl(var(--primary))]" />
                            </span>
                            In Progress
                          </span>
                        ) : item.status === "completed" ? (
                          <CheckCircle2 className="h-5 w-5 text-[hsl(var(--primary))]" />
                        ) : (
                          <Circle className="h-5 w-5 text-[hsl(var(--muted-foreground))]/30" />
                        )}
                      </div>

                      {/* Icon */}
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl mb-4 ${item.status === "current"
                        ? "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] border border-[hsl(var(--primary))]/20"
                        : "bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]"
                        }`}>
                        {item.icon}
                      </div>

                      {/* Title and quarter */}
                      <h3 className="text-lg sm:text-xl font-extrabold text-[hsl(var(--foreground))] uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs font-mono text-[hsl(var(--muted-foreground))]">
                        {item.quarter}
                      </p>

                      {/* Items list */}
                      <ul className="mt-4 space-y-2">
                        {item.items.map((listItem, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs sm:text-sm text-[hsl(var(--muted-foreground))]"
                          >
                            <span
                              className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${item.status === "current"
                                ? "bg-[hsl(var(--primary))]"
                                : "bg-[hsl(var(--muted-foreground))]/40"
                                }`}
                            />
                            <span>{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
