"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Node {
  id: string;
  x: number;
  y: number;
}

interface Edge {
  from: string;
  to: string;
}

export function GraphVisualization() {
  const [visitedNodes, setVisitedNodes] = useState<string[]>([]);
  const [visitedEdges, setVisitedEdges] = useState<string[]>([]);

  const nodes: Node[] = [
    { id: "A", x: 50, y: 30 },
    { id: "B", x: 100, y: 20 },
    { id: "C", x: 150, y: 40 },
    { id: "D", x: 30, y: 80 },
    { id: "E", x: 90, y: 90 },
    { id: "F", x: 160, y: 100 },
  ];

  const edges: Edge[] = [
    { from: "A", to: "B" },
    { from: "A", to: "D" },
    { from: "B", to: "C" },
    { from: "B", to: "E" },
    { from: "D", to: "E" },
    { from: "C", to: "F" },
    { from: "E", to: "F" },
  ];

  useEffect(() => {
    const animateBFS = async () => {
      setVisitedNodes([]);
      setVisitedEdges([]);

      const order = ["A", "B", "D", "C", "E", "F"];
      const edgeOrder = ["A-B", "A-D", "B-C", "B-E", "D-E", "C-F"];

      for (let i = 0; i < order.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 400));
        setVisitedNodes((prev) => [...prev, order[i]]);
        if (edgeOrder[i]) {
          setVisitedEdges((prev) => [...prev, edgeOrder[i]]);
        }
      }

      await new Promise((resolve) => setTimeout(resolve, 2500));
    };

    const interval = setInterval(animateBFS, 7000);
    animateBFS();

    return () => clearInterval(interval);
  }, []);

  const getNodePos = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <svg viewBox="0 0 200 130" className="w-full h-full">
      {/* Edges */}
      {edges.map((edge) => {
        const from = getNodePos(edge.from);
        const to = getNodePos(edge.to);
        const edgeId = `${edge.from}-${edge.to}`;
        const isVisited = visitedEdges.includes(edgeId);

        return (
          <motion.line
            key={edgeId}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke={isVisited ? "hsl(142 71% 45%)" : "hsl(0 0% 18%)"}
            strokeWidth={isVisited ? "2" : "1.5"}
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.5 }}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => {
        const isVisited = visitedNodes.includes(node.id);

        return (
          <motion.g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="14"
              fill={isVisited ? "hsl(142 71% 45%)" : "hsl(0 0% 11%)"}
              stroke={isVisited ? "hsl(142 71% 45%)" : "hsl(0 0% 18%)"}
              strokeWidth="2"
              animate={{
                scale: isVisited ? [1, 1.15, 1] : 1,
              }}
              transition={{ duration: 0.3 }}
            />
            <text
              x={node.x}
              y={node.y + 4}
              textAnchor="middle"
              fill={isVisited ? "hsl(0 0% 4%)" : "hsl(0 0% 64%)"}
              fontSize="11"
              fontWeight="700"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {node.id}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}
