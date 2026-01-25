"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const keys = [
  { key: "Space", label: "Play/Pause", width: "flex-1" },
  { key: "←", label: "Prev Step", width: "w-10" },
  { key: "→", label: "Next Step", width: "w-10" },
  { key: "R", label: "Reset", width: "w-10" },
];

export function KeyboardDemo() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const key = keys[currentIndex].key;
      setActiveKey(key);
      
      setTimeout(() => {
        setActiveKey(null);
      }, 300);
      
      setCurrentIndex((prev) => (prev + 1) % keys.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="space-y-3">
      {/* Keyboard row */}
      <div className="flex gap-2">
        {keys.map(({ key, width }) => (
          <motion.div
            key={key}
            animate={{
              scale: activeKey === key ? 0.95 : 1,
              backgroundColor: activeKey === key 
                ? "hsl(142 71% 45% / 0.2)" 
                : "hsl(var(--secondary))",
              borderColor: activeKey === key 
                ? "hsl(142 71% 45% / 0.5)" 
                : "hsl(var(--border) / 0.5)",
            }}
            transition={{ duration: 0.15 }}
            className={`${width} h-8 rounded-md border flex items-center justify-center text-xs font-mono text-[hsl(var(--muted-foreground))]`}
          >
            {key}
          </motion.div>
        ))}
      </div>

      {/* Current action indicator */}
      <div className="flex items-center gap-2 text-[10px] text-[hsl(var(--muted-foreground))]">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5"
        >
          <span className="text-[hsl(var(--primary))] font-mono">{keys[currentIndex].key}</span>
          <span>→</span>
          <span>{keys[currentIndex].label}</span>
        </motion.div>
      </div>
    </div>
  );
}
