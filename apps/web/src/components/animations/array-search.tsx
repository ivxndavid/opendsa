"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const array = [2, 5, 8, 11, 12, 16, 23, 28, 38, 56, 60, 67, 72, 81, 91, 99, 123, 212];

export function ArraySearch() {
  const target = 67;
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(array.length - 1);
  const [found, setFound] = useState(false);

  useEffect(() => {
    const animateBinarySearch = async () => {
      setCurrentIndex(-1);
      setLeft(0);
      setRight(array.length - 1);
      setFound(false);

      let l = 0;
      let r = array.length - 1;

      while (l <= r) {
        const mid = Math.floor((l + r) / 2);
        setCurrentIndex(mid);
        setLeft(l);
        setRight(r);
        await new Promise((resolve) => setTimeout(resolve, 700));

        if (array[mid] === target) {
          setFound(true);
          break;
        } else if (array[mid] < target) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 2500));
    };

    const interval = setInterval(animateBinarySearch, 8000);
    animateBinarySearch();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-1.5 justify-center">
        {array.map((num, index) => {
          const isInRange = index >= left && index <= right;
          const isCurrent = index === currentIndex;
          const isFound = found && isCurrent;

          return (
            <motion.div
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-md text-xs font-semibold border transition-colors ${isFound
                ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] border-[hsl(var(--primary))]"
                : isCurrent
                  ? "bg-yellow-500/20 text-yellow-500 border-yellow-500"
                  : isInRange
                    ? "bg-[hsl(var(--secondary))] border-[hsl(var(--border))] text-[hsl(var(--foreground))]"
                    : "bg-[hsl(var(--muted))]/30 border-transparent text-[hsl(var(--muted-foreground))]/50"
                }`}
              style={{ fontFamily: "var(--font-mono)" }}
              animate={{
                scale: isCurrent ? 1.1 : 1,
              }}
              transition={{ duration: 0.2 }}
            >
              {num}
            </motion.div>
          );
        })}
      </div>
      <div className="text-center text-xs text-[hsl(var(--muted-foreground))]" style={{ fontFamily: "var(--font-mono)" }}>
        Target: <span className="text-[hsl(var(--primary))] font-semibold">{target}</span>
        {found && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="ml-2 text-[hsl(var(--primary))]"
          >
            Found!
          </motion.span>
        )}
      </div>
    </div>
  );
}
