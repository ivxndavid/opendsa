"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export function AIAssistant() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState("");
  
  const steps = [
    { prompt: "Explain bubble sort", response: "Bubble sort compares adjacent elements..." },
    { prompt: "Optimize this code", response: "Use quick sort for O(n log n)..." },
    { prompt: "Show me BFS", response: "Starting BFS from node A..." },
  ];

  useEffect(() => {
    const currentResponse = steps[currentStep].response;
    let charIndex = 0;
    setDisplayText("");

    const typeInterval = setInterval(() => {
      if (charIndex < currentResponse.length) {
        setDisplayText(currentResponse.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentStep((prev) => (prev + 1) % steps.length);
        }, 2000);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentStep]);

  return (
    <div className="space-y-3">
      {/* AI Chat */}
      <div className="space-y-2">
        {/* User prompt */}
        <div className="flex items-start gap-2">
          <div className="h-4 w-4 rounded-full bg-[hsl(var(--secondary))] flex items-center justify-center flex-shrink-0">
            <span className="text-[6px] font-bold text-[hsl(var(--muted-foreground))]">U</span>
          </div>
          <div className="rounded-md bg-[hsl(var(--secondary))] px-2 py-1 text-[10px] text-[hsl(var(--muted-foreground))]">
            {steps[currentStep].prompt}
          </div>
        </div>

        {/* AI response */}
        <div className="flex items-start gap-2">
          <div className="h-4 w-4 rounded-full bg-[hsl(var(--primary))]/20 flex items-center justify-center flex-shrink-0">
            <Sparkles className="h-2 w-2 text-[hsl(var(--primary))]" />
          </div>
          <div className="flex-1">
            <div className="rounded-md bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20 px-2 py-1 text-[10px] text-[hsl(var(--foreground))]">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-0.5 h-2.5 bg-[hsl(var(--primary))] ml-0.5 align-middle"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-2">
        <div className="h-px flex-1 bg-[hsl(var(--border))]" />
        <span className="text-[8px] text-[hsl(var(--muted-foreground))] font-mono">EDITOR</span>
        <div className="h-px flex-1 bg-[hsl(var(--border))]" />
      </div>

      {/* Mini Code Editor */}
      <div className="rounded-md bg-[hsl(0_0%_5%)] border border-[hsl(var(--border))]/50 overflow-hidden">
        {/* Editor tabs */}
        <div className="flex gap-1 px-2 py-1 bg-[hsl(0_0%_8%)] border-b border-[hsl(var(--border))]/30">
          {["JS", "PY", "C++"].map((lang, i) => (
            <span
              key={lang}
              className={`px-1.5 py-0.5 text-[8px] font-mono rounded ${
                i === 0 
                  ? "bg-[hsl(var(--primary))]/20 text-[hsl(var(--primary))]" 
                  : "text-[hsl(var(--muted-foreground))]/50"
              }`}
            >
              {lang}
            </span>
          ))}
        </div>
        {/* Mini code */}
        <div className="p-2 text-[9px] font-mono">
          <div className="text-purple-400">function <span className="text-yellow-300">sort</span>(arr) {"{"}</div>
          <div className="text-[hsl(var(--muted-foreground))] pl-2">// AI optimized</div>
          <div className="text-[hsl(var(--muted-foreground))] pl-2">...</div>
          <div className="text-purple-400">{"}"}</div>
        </div>
      </div>
    </div>
  );
}
