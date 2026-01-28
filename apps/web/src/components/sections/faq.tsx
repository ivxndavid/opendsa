"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Terminal, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "0x01",
    question: "IS OPENDSA REALLY FREE?",
    answer: "Yes! OpenDSA is 100% free and open source under the MIT license. No subscriptions, no premium tiers, no hidden costs. Ever.",
  },
  {
    id: "0x02",
    question: "WHAT ALGORITHMS ARE SUPPORTED?",
    answer: "We support all forms of algorithms including sorting algorithms (bubble, quick, merge, heap, insertion, selection), searching (binary, linear), graph algorithms (BFS, DFS, Dijkstra's), tree operations (BST, AVL), ML & DL algorithms, Maths, Physics and more. More are being added regularly.",
  },
  {
    id: "0x03",
    question: "CAN I CONTRIBUTE NEW ALGORITHMS?",
    answer: "Absolutely! We welcome contributions. Check our CONTRIBUTING.md guide on GitHub or documentation website at https://docs.opendsa.vercel.app/ to get started. Each visualizer is a modular plugin, making it easy to add new ones.",
  },
  {
    id: "0x04",
    question: "DOES IT WORK OFFLINE?",
    answer: "Yes, once loaded, the visualizations work entirely in your browser. No server calls needed for running animations or stepping through algorithms.",
  },
  {
    id: "0x05",
    question: "CAN I USE IT FOR TEACHING?",
    answer: "Yes! OpenDSA is perfect for educators. Share specific visualization states via URL, embed visualizers in your course materials, and let students explore at their own pace.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(var(--background))] opacity-90" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Noise overlay */}
      <div className="noise absolute inset-0">
        <div className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left side - Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            {/* Label */}
            <div className="flex items-center gap-2 mb-6">
              <Terminal className="h-4 w-4 text-[hsl(var(--primary))]" />
              <span className="mono-label">/ HELP_TERMINAL</span>
            </div>

            {/* Heading - stacked words */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[hsl(var(--foreground))] leading-[0.9]">
              FREQ.
              <br />
              ASKED
              <br />
              <span className="text-[hsl(var(--primary))]">QUEST.</span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base text-[hsl(var(--muted-foreground))] max-w-sm">
              Common questions about licensing, architecture, and technical capabilities.
            </p>

            {/* Contact card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 p-5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]"
            >
              <div className="noise absolute inset-0 rounded-xl overflow-hidden opacity-30">
                <div className="absolute inset-0" />
              </div>
              <div className="relative z-10">
                <MessageSquare className="h-5 w-5 text-[hsl(var(--muted-foreground))] mb-3" />
                <p className="text-sm text-[hsl(var(--foreground))] font-medium mb-1">
                  Still have questions?
                </p>
                <Link
                  href="https://discord.gg/mfQvUa2y4r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[hsl(var(--primary))] hover:underline"
                >
                  JOIN COMMUNITY
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <p className="mt-3 text-xs text-[hsl(var(--muted-foreground))] font-mono">
                  <a href="https://github.com/soloshun/opendsa/discussions"> github.com/.../.../discussions</a>
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - FAQ items */}
          <div className="lg:col-span-3 space-y-3">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full group"
                >
                  <div
                    className={`flex items-center justify-between p-4 sm:p-5 rounded-xl border transition-all duration-300 ${openId === item.id
                      ? "border-[hsl(var(--primary))]/50 bg-[hsl(var(--primary))]/5"
                      : "border-[hsl(var(--border))] bg-[hsl(var(--card))] hover:border-[hsl(var(--primary))]/30"
                      }`}
                  >
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-xs font-mono text-[hsl(var(--primary))] opacity-60">
                        {item.id}
                      </span>
                      <span className="text-sm sm:text-base font-bold text-[hsl(var(--foreground))] uppercase tracking-wide">
                        {item.question}
                      </span>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 text-[hsl(var(--muted-foreground))] transition-transform duration-300 ${openId === item.id ? "rotate-90" : "group-hover:translate-x-1"
                        }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {openId === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 py-4 ml-12 sm:ml-14 text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
