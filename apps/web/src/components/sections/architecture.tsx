"use client";

import { motion } from "framer-motion";
import { Settings2, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
// import { ArchitectureFlow } from "@/components/animations/architecture-flow";

const codeTabs = [
  {
    name: "plugin.ts",
    code: `interface VisualizerPlugin {
  meta: {
    id: "bubble-sort",
    name: "Bubble Sort",
    category: "sorting",
  },
  generateSteps(arr: number[]): Step[],
  component: React.FC,
}`,
  },
  {
    name: "types.ts",
    code: `interface AnimationStep {
  type: "compare" | "swap" | "done";
  indices: number[];
  description: string;
}

type VisualizerCategory = 
  | "sorting" 
  | "searching" 
  | "graph";`,
  },
  {
    name: "registry.ts",
    code: `const registry = new Map();

export function register(plugin) {
  registry.set(plugin.meta.id, plugin);
}

export function get(id: string) {
  return registry.get(id);
}`,
  },
];

const flowSteps = [
  { id: "plugin", label: "BubbleSortPlugin", color: "primary" },
  { id: "register", label: "registry.register()", color: "yellow" },
  { id: "registry", label: "Visualizer Registry", color: "blue" },
  { id: "router", label: "/visualize/bubble-sort", color: "purple" },
  { id: "render", label: "Renderer", color: "primary" },
];

export function Architecture() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFlowStep, setActiveFlowStep] = useState(0);
  const [showDiagram, setShowDiagram] = useState(false);

  // Animate through flow steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFlowStep((prev) => (prev + 1) % flowSteps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(var(--background))]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Noise overlay */}
      <div className="noise absolute inset-0">
        <div className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top section: Text + Code Editor */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <Settings2 className="h-4 w-4 text-[hsl(var(--primary))]" />
              <span className="mono-label">/ System Architecture</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-tight">
              PLUGIN-BASED
              <br />
              <span className="text-[hsl(var(--primary))]">VISUALIZER ENGINE</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base text-[hsl(var(--muted-foreground))] leading-relaxed max-w-lg">
              Every algorithm is a self-contained plugin with its own visualization logic.
              This makes OpenDSA extensible, maintainable, and community-friendly.
            </p>

            {/* Features list */}
            <ul className="mt-6 space-y-3">
              {[
                "Step-based animation system",
                "Modular visualizer registry",
                "Shared UI components",
                "URL state sync",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3 text-[hsl(var(--muted-foreground))]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--primary))]" />
                  <span className="text-sm">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right side - Code Editor with Tabs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl border border-[hsl(var(--border))] bg-[hsl(0_0%_6%)] overflow-hidden shadow-2xl shadow-black/50">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[hsl(var(--border))] bg-[hsl(0_0%_8%)]">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                {/* Clickable tabs */}
                <div className="flex gap-1 ml-4">
                  {codeTabs.map((tab, index) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(index)}
                      className={`px-3 py-1 rounded-md text-xs font-mono transition-all ${activeTab === index
                        ? "bg-[hsl(var(--secondary))] text-[hsl(var(--primary))]"
                        : "text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]"
                        }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="p-4 sm:p-5 font-mono text-xs sm:text-sm overflow-x-auto min-h-[200px]"
              >
                <pre className="text-[hsl(var(--muted-foreground))]">
                  <code>
                    {codeTabs[activeTab].code.split("\n").map((line, i) => (
                      <div key={i} className="leading-relaxed">
                        {line.includes("interface") || line.includes("type") || line.includes("const") || line.includes("export") ? (
                          <span className="text-purple-400">{line.split(" ")[0]} </span>
                        ) : null}
                        {line.includes("interface") || line.includes("type") ? (
                          <span className="text-[hsl(var(--primary))]">{line.split(" ").slice(1).join(" ")}</span>
                        ) : line.includes("const") || line.includes("export") || line.includes("function") ? (
                          <span className="text-yellow-400">{line.split(" ").slice(1).join(" ")}</span>
                        ) : line.includes(":") && !line.includes("//") ? (
                          <>
                            <span className="text-blue-400">{line.split(":")[0]}</span>
                            <span>:{line.split(":").slice(1).join(":")}</span>
                          </>
                        ) : line.includes('"') ? (
                          <span className="text-amber-300">{line}</span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </div>
                    ))}
                  </code>
                </pre>
              </motion.div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[hsl(var(--primary))]/20 rounded-full blur-[60px] -z-10" />
          </motion.div>
        </div>

        {/* Middle section: Toggle between Flow types */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          {/* Flow title with toggle */}
          <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-3">
              <span className="mono-label text-xs">/ Plugin Registration Flow</span>
              <div className="h-px w-16 bg-gradient-to-r from-[hsl(var(--border))] to-transparent" />
            </div>
            {/* TODO: Disable here for now */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowDiagram(false)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${!showDiagram
                  ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
                  : "bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]"
                  }`}
              >
                Linear
              </button>
              {/* <button
                onClick={() => setShowDiagram(true)}
                className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all ${showDiagram
                  ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]"
                  : "bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))]"
                  }`}
              >
                Diagram
              </button> */}
            </div>
          </div>

          {/* Flow visualization */}
          <div className="relative rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 overflow-hidden">
            {/* Noise overlay */}
            <div className="noise absolute inset-0 opacity-30">
              <div className="absolute inset-0" />
            </div>

            {showDiagram ? (
              /* Architecture Diagram Flow */
              <div className="relative z-10">
                {/* <ArchitectureFlow /> */}
                <span className="text-xs text-[hsl(var(--muted-foreground))]">Coming soon</span>
              </div>
            ) : (
              /* Linear Flow */
              <>
                <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                  {flowSteps.map((step, index) => (
                    <div key={step.id} className="flex items-center gap-2 sm:gap-4">
                      <motion.div
                        animate={{
                          scale: activeFlowStep === index ? 1.05 : 1,
                          borderColor: activeFlowStep === index
                            ? "hsl(142 71% 45%)"
                            : "hsl(var(--border))",
                        }}
                        className={`relative px-3 sm:px-4 py-2 sm:py-3 rounded-lg border-2 transition-all ${activeFlowStep === index
                          ? "bg-[hsl(var(--primary))]/10"
                          : "bg-[hsl(var(--secondary))]"
                          }`}
                      >
                        {activeFlowStep === index && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="absolute inset-0 rounded-lg border-2 border-[hsl(var(--primary))]"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <span className={`relative z-10 text-[10px] sm:text-xs font-mono ${activeFlowStep === index
                          ? "text-[hsl(var(--primary))] font-semibold"
                          : "text-[hsl(var(--muted-foreground))]"
                          }`}>
                          {step.label}
                        </span>
                      </motion.div>

                      {/* Arrow */}
                      {index < flowSteps.length - 1 && (
                        <motion.div
                          animate={{
                            opacity: activeFlowStep === index ? 1 : 0.3,
                            scale: activeFlowStep === index ? 1.2 : 1,
                          }}
                          className="text-[hsl(var(--muted-foreground))]"
                        >
                          <ArrowRight className="h-4 w-4" />
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Step description */}
                <motion.div
                  key={activeFlowStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 text-center"
                >
                  <span className="text-xs text-[hsl(var(--muted-foreground))]">
                    {activeFlowStep === 0 && "Plugin defines meta, component, and step generator"}
                    {activeFlowStep === 1 && "Plugin is registered with the central registry"}
                    {activeFlowStep === 2 && "Registry stores all available visualizers"}
                    {activeFlowStep === 3 && "URL routes to specific visualizer by ID"}
                    {activeFlowStep === 4 && "Renderer loads and displays the visualization"}
                  </span>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
