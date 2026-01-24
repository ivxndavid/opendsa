"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export function SortingBars() {
  const [bars, setBars] = useState([45, 80, 30, 95, 55, 70, 25, 85, 40, 60]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);
  const [sortedIndices, setSortedIndices] = useState<number[]>([]);
  const isSorting = useRef(false);

  useEffect(() => {
    const animateBubbleSort = async () => {
      if (isSorting.current) return;
      isSorting.current = true;

      const arr = [45, 80, 30, 95, 55, 70, 25, 85, 40, 60];
      setBars([...arr]);
      setSortedIndices([]);
      setActiveIndices([]);

      await new Promise((resolve) => setTimeout(resolve, 500));

      const n = arr.length;

      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
          // Highlight comparing elements
          setActiveIndices([j, j + 1]);
          await new Promise((resolve) => setTimeout(resolve, 200));

          // Swap if needed
          if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            setBars([...arr]);
            await new Promise((resolve) => setTimeout(resolve, 150));
          }
        }
        // Mark the last element of this pass as sorted
        setSortedIndices((prev) => [...prev, n - 1 - i]);
      }

      // Mark first element as sorted too
      setSortedIndices((prev) => [...prev, 0]);
      setActiveIndices([]);

      // Wait before resetting
      await new Promise((resolve) => setTimeout(resolve, 2500));
      isSorting.current = false;
    };

    animateBubbleSort();
    const interval = setInterval(animateBubbleSort, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-center gap-1 h-32">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          layout
          className={`w-4 rounded-t-sm transition-colors duration-150 ${
            sortedIndices.includes(index)
              ? "bg-[hsl(var(--primary))]"
              : activeIndices.includes(index)
              ? "bg-yellow-500"
              : "bg-[hsl(var(--muted-foreground))]/40"
          }`}
          animate={{ height: `${height}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        />
      ))}
    </div>
  );
}
