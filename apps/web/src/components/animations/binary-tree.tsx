"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TreeNode {
  value: number;
  x: number;
  y: number;
  left?: TreeNode;
  right?: TreeNode;
}

export function BinaryTree() {
  const [visitedNodes, setVisitedNodes] = useState<number[]>([]);
  
  const tree: TreeNode = {
    value: 50,
    x: 100,
    y: 20,
    left: {
      value: 30,
      x: 50,
      y: 60,
      left: { value: 20, x: 25, y: 100 },
      right: { value: 40, x: 75, y: 100 },
    },
    right: {
      value: 70,
      x: 150,
      y: 60,
      left: { value: 60, x: 125, y: 100 },
      right: { value: 80, x: 175, y: 100 },
    },
  };

  const getAllNodes = (node: TreeNode | undefined): TreeNode[] => {
    if (!node) return [];
    return [node, ...getAllNodes(node.left), ...getAllNodes(node.right)];
  };

  const nodes = getAllNodes(tree);

  useEffect(() => {
    const animateTraversal = async () => {
      setVisitedNodes([]);
      const order = [50, 30, 20, 40, 70, 60, 80];
      
      for (const value of order) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        setVisitedNodes((prev) => [...prev, value]);
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));
    };

    const interval = setInterval(animateTraversal, 8000);
    animateTraversal();

    return () => clearInterval(interval);
  }, []);

  const edges = [
    { x1: 100, y1: 30, x2: 50, y2: 55 },
    { x1: 100, y1: 30, x2: 150, y2: 55 },
    { x1: 50, y1: 70, x2: 25, y2: 95 },
    { x1: 50, y1: 70, x2: 75, y2: 95 },
    { x1: 150, y1: 70, x2: 125, y2: 95 },
    { x1: 150, y1: 70, x2: 175, y2: 95 },
  ];

  return (
    <svg viewBox="0 0 200 130" className="w-full h-full">
      {/* Edges */}
      {edges.map((edge, index) => (
        <line
          key={index}
          x1={edge.x1}
          y1={edge.y1}
          x2={edge.x2}
          y2={edge.y2}
          stroke="hsl(0 0% 18%)"
          strokeWidth="1.5"
        />
      ))}

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.g key={node.value}>
          <motion.circle
            cx={node.x}
            cy={node.y + 10}
            r="12"
            fill={visitedNodes.includes(node.value) ? "hsl(142 71% 45%)" : "hsl(0 0% 11%)"}
            stroke={visitedNodes.includes(node.value) ? "hsl(142 71% 45%)" : "hsl(0 0% 18%)"}
            strokeWidth="2"
            initial={{ scale: 1 }}
            animate={{
              scale: visitedNodes.includes(node.value) ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.3 }}
          />
          <text
            x={node.x}
            y={node.y + 14}
            textAnchor="middle"
            fill={visitedNodes.includes(node.value) ? "hsl(0 0% 4%)" : "hsl(0 0% 64%)"}
            fontSize="10"
            fontWeight="600"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {node.value}
          </text>
        </motion.g>
      ))}
    </svg>
  );
}
