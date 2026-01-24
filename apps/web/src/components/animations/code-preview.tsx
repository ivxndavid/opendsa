"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CodePreview() {
  const [highlightedLine, setHighlightedLine] = useState(0);

  const codeLines = [
    { content: "function bubbleSort(arr) {", indent: 0 },
    { content: "for (let i = 0; i < arr.length; i++) {", indent: 1 },
    { content: "for (let j = 0; j < arr.length - i - 1; j++) {", indent: 2 },
    { content: "if (arr[j] > arr[j + 1]) {", indent: 3 },
    { content: "[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];", indent: 4 },
    { content: "}", indent: 3 },
    { content: "}", indent: 2 },
    { content: "}", indent: 1 },
    { content: "return arr;", indent: 1 },
    { content: "}", indent: 0 },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedLine((prev) => (prev + 1) % codeLines.length);
    }, 800);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className="bg-[hsl(0_0%_5%)] p-4 text-xs overflow-hidden" style={{ fontFamily: "var(--font-mono)" }}>
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          className={`flex items-center gap-3 py-0.5 px-2 rounded ${
            highlightedLine === index
              ? "bg-[hsl(var(--primary))]/15 text-[hsl(var(--primary))]"
              : "text-[hsl(var(--muted-foreground))]"
          }`}
          animate={{
            backgroundColor:
              highlightedLine === index
                ? "hsla(142, 71%, 45%, 0.15)"
                : "transparent",
          }}
          transition={{ duration: 0.2 }}
        >
          <span className="w-4 text-right opacity-40 select-none">
            {index + 1}
          </span>
          <span style={{ paddingLeft: `${line.indent * 12}px` }}>
            {line.content}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
