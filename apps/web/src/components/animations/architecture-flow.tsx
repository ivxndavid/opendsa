"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Plugin nodes
const plugins = [
  { id: "bubble", label: "BubbleSortPlugin", x: 50, y: 0 },
  { id: "quick", label: "QuickSortPlugin", x: 50, y: 20 },
  { id: "merge", label: "MergeSortPlugin", x: 50, y: 40 },
  { id: "binary", label: "BinarySearchPlugin", x: 50, y: 60 },
  { id: "bfs", label: "BFSPlugin", x: 50, y: 80 },
];





export function ArchitectureFlow() {
  const [activePlugin, setActivePlugin] = useState(0);
  const [flowStep, setFlowStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlowStep((prev) => {
        if (prev >= 4) {
          setActivePlugin((p) => (p + 1) % plugins.length);
          return 0;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80">
      <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {/* Background sections */}
        {/* Plugins Section */}
        <rect x="35" y="2" width="30" height="45" rx="2" fill="hsl(0 0% 12%)" stroke="hsl(0 0% 20%)" strokeWidth="0.3" />
        <text x="50" y="8" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="3" fontFamily="monospace">
          Visualizer Plugins
        </text>

        {/* Registry Section */}
        <rect x="35" y="52" width="30" height="25" rx="2" fill="hsl(0 0% 12%)" stroke="hsl(0 0% 20%)" strokeWidth="0.3" />
        <text x="50" y="57" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="3" fontFamily="monospace">
          Visualizer Registry
        </text>

        {/* App Section */}
        <rect x="5" y="52" width="25" height="40" rx="2" fill="hsl(0 0% 12%)" stroke="hsl(0 0% 20%)" strokeWidth="0.3" />
        <text x="17.5" y="57" textAnchor="middle" fill="hsl(0 0% 50%)" fontSize="3" fontFamily="monospace">
          Application
        </text>

        {/* Connection lines */}
        {/* Plugin to Register */}
        <motion.path
          d="M 50 45 L 50 60"
          stroke={flowStep >= 1 ? "hsl(142 71% 45%)" : "hsl(0 0% 25%)"}
          strokeWidth={flowStep >= 1 ? "0.8" : "0.4"}
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        {/* Register to Get */}
        <path
          d="M 50 66 L 50 72"
          stroke="hsl(0 0% 25%)"
          strokeWidth="0.4"
          fill="none"
        />

        {/* Router to Get */}
        <motion.path
          d="M 25 65 L 45 65"
          stroke={flowStep >= 2 ? "hsl(142 71% 45%)" : "hsl(0 0% 25%)"}
          strokeWidth={flowStep >= 2 ? "0.8" : "0.4"}
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        {/* Get to Renderer */}
        <motion.path
          d="M 25 72 L 25 82"
          stroke={flowStep >= 3 ? "hsl(142 71% 45%)" : "hsl(0 0% 25%)"}
          strokeWidth={flowStep >= 3 ? "0.8" : "0.4"}
          fill="none"
          markerEnd="url(#arrowhead)"
        />

        {/* Arrow marker */}
        <defs>
          <marker id="arrowhead" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
            <polygon points="0 0, 4 2, 0 4" fill="hsl(142 71% 45%)" />
          </marker>
        </defs>

        {/* Flowing dot animation */}
        {flowStep === 1 && (
          <motion.circle
            initial={{ cx: 50, cy: 45 }}
            animate={{ cx: 50, cy: 60 }}
            transition={{ duration: 0.6 }}
            r="1.5"
            fill="hsl(142 71% 45%)"
          />
        )}
        {flowStep === 2 && (
          <motion.circle
            initial={{ cx: 25, cy: 65 }}
            animate={{ cx: 45, cy: 65 }}
            transition={{ duration: 0.6 }}
            r="1.5"
            fill="hsl(142 71% 45%)"
          />
        )}
        {flowStep === 3 && (
          <motion.circle
            initial={{ cx: 25, cy: 72 }}
            animate={{ cx: 25, cy: 82 }}
            transition={{ duration: 0.6 }}
            r="1.5"
            fill="hsl(142 71% 45%)"
          />
        )}

        {/* Plugin nodes */}
        {plugins.map((plugin, index) => (
          <g key={plugin.id}>
            <motion.rect
              x={plugin.x - 12}
              y={plugin.y + 10}
              width="24"
              height="6"
              rx="1"
              fill={activePlugin === index && flowStep >= 0 ? "hsl(142 71% 45% / 0.2)" : "hsl(0 0% 8%)"}
              stroke={activePlugin === index && flowStep >= 0 ? "hsl(142 71% 45%)" : "hsl(0 0% 25%)"}
              strokeWidth="0.4"
              animate={{
                fill: activePlugin === index && flowStep >= 0 ? "hsl(142 71% 45% / 0.2)" : "hsl(0 0% 8%)",
                stroke: activePlugin === index && flowStep >= 0 ? "hsl(142 71% 45%)" : "hsl(0 0% 25%)",
              }}
            />
            <text
              x={plugin.x}
              y={plugin.y + 14}
              textAnchor="middle"
              fill={activePlugin === index && flowStep >= 0 ? "hsl(142 71% 45%)" : "hsl(0 0% 60%)"}
              fontSize="2.5"
              fontFamily="monospace"
            >
              {plugin.label}
            </text>
          </g>
        ))}

        {/* Registry nodes */}
        <g>
          <motion.rect
            x="38" y="60" width="24" height="6" rx="1"
            fill={flowStep >= 1 ? "hsl(142 71% 45% / 0.2)" : "hsl(0 0% 8%)"}
            stroke={flowStep >= 1 ? "hsl(142 71% 45%)" : "hsl(0 0% 25%)"}
            strokeWidth="0.4"
          />
          <text x="50" y="64" textAnchor="middle" fill={flowStep >= 1 ? "hsl(142 71% 45%)" : "hsl(0 0% 60%)"} fontSize="2.5" fontFamily="monospace">
            register
          </text>
        </g>

        <g>
          <motion.rect
            x="38" y="70" width="12" height="5" rx="1"
            fill={flowStep >= 2 ? "hsl(142 71% 45% / 0.2)" : "hsl(0 0% 8%)"}
            stroke={flowStep >= 2 ? "hsl(142 71% 45%)" : "hsl(0 0% 25%)"}
            strokeWidth="0.4"
          />
          <text x="44" y="73.5" textAnchor="middle" fill={flowStep >= 2 ? "hsl(142 71% 45%)" : "hsl(0 0% 60%)"} fontSize="2" fontFamily="monospace">
            get
          </text>
        </g>

        <g>
          <rect x="52" y="70" width="12" height="5" rx="1" fill="hsl(0 0% 8%)" stroke="hsl(0 0% 25%)" strokeWidth="0.4" />
          <text x="58" y="73.5" textAnchor="middle" fill="hsl(0 0% 60%)" fontSize="1.8" fontFamily="monospace">
            getByCategory
          </text>
        </g>

        {/* App nodes */}
        <g>
          <motion.rect
            x="8" y="62" width="20" height="6" rx="1"
            fill={flowStep >= 2 ? "hsl(142 71% 45% / 0.2)" : "hsl(0 0% 8%)"}
            stroke={flowStep >= 2 ? "hsl(142 71% 45%)" : "hsl(0 0% 25%)"}
            strokeWidth="0.4"
          />
          <text x="18" y="66" textAnchor="middle" fill={flowStep >= 2 ? "hsl(142 71% 45%)" : "hsl(0 0% 60%)"} fontSize="2.2" fontFamily="monospace">
            Dynamic Router
          </text>
        </g>

        <g>
          <motion.rect
            x="8" y="82" width="20" height="6" rx="1"
            fill={flowStep >= 3 ? "hsl(142 71% 45% / 0.2)" : "hsl(0 0% 8%)"}
            stroke={flowStep >= 3 ? "hsl(142 71% 45%)" : "hsl(0 0% 25%)"}
            strokeWidth="0.4"
          />
          <text x="18" y="86" textAnchor="middle" fill={flowStep >= 3 ? "hsl(142 71% 45%)" : "hsl(0 0% 60%)"} fontSize="2" fontFamily="monospace">
            Visualizer Renderer
          </text>
        </g>
      </svg>

      {/* Current step indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {[0, 1, 2, 3, 4].map((step) => (
          <div
            key={step}
            className={`h-1.5 w-1.5 rounded-full transition-all ${flowStep === step
              ? "bg-[hsl(var(--primary))] scale-125"
              : "bg-[hsl(var(--muted-foreground))]/30"
              }`}
          />
        ))}
      </div>
    </div>
  );
}
