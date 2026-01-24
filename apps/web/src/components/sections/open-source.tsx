"use client";

import { motion } from "framer-motion";
import { Github, Heart, Star, GitFork, Users, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface GitHubStats {
  stars: number;
  forks: number;
  contributors: number;
}

export function OpenSource() {
  const [stats, setStats] = useState<GitHubStats>({ stars: 0, forks: 0, contributors: 1 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubStats() {
      try {
        // Fetch repo data
        const repoRes = await fetch("https://api.github.com/repos/soloshun/opendsa");
        if (repoRes.ok) {
          const repoData = await repoRes.json();
          setStats(prev => ({
            ...prev,
            stars: repoData.stargazers_count || 0,
            forks: repoData.forks_count || 0,
          }));
        }

        // Fetch contributors count
        const contribRes = await fetch("https://api.github.com/repos/soloshun/opendsa/contributors?per_page=1");
        if (contribRes.ok) {
          const linkHeader = contribRes.headers.get("Link");
          if (linkHeader) {
            const match = linkHeader.match(/page=(\d+)>; rel="last"/);
            if (match) {
              setStats(prev => ({ ...prev, contributors: parseInt(match[1]) }));
            }
          } else {
            const data = await contribRes.json();
            setStats(prev => ({ ...prev, contributors: data.length || 1 }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubStats();
  }, []);

  return (
    <section id="open-source" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Full-width gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--background))] via-[hsl(var(--primary))]/5 to-[hsl(var(--background))]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary))_0%,_transparent_70%)] opacity-[0.03]" />

      {/* Noise overlay */}
      <div className="noise absolute inset-0">
        <div className="absolute inset-0" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Gradient orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] bg-[hsl(var(--primary))]/10 rounded-full blur-[200px] -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="mx-auto mb-6 sm:mb-8 inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] border border-[hsl(var(--primary))]/20"
          >
            <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
          </motion.div>

          {/* Heading - creative layout */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
            BUILT BY THE <span className="text-[hsl(var(--primary))]">COMMUNITY</span>
            <br />
            FOR THE <span className="text-[hsl(var(--primary))]">COMMUNITY</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            OpenDSA is 100% open source and always will be. Join us in building
            the best algorithm visualization platform.
          </p>

          {/* Stats */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto opacity-80">
            {[
              { icon: <Star className="h-5 w-5 sm:h-6 sm:w-6" />, label: "Stars", value: loading ? "..." : stats.stars.toString() },
              { icon: <GitFork className="h-5 w-5 sm:h-6 sm:w-6" />, label: "Forks", value: loading ? "..." : stats.forks.toString() },
              { icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />, label: "Contributors", value: loading ? "..." : stats.contributors.toString() },
              { icon: <Heart className="h-5 w-5 sm:h-6 sm:w-6" />, label: "Sponsors", value: "0" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="relative group flex flex-col items-center gap-2 p-4 sm:p-6 rounded-2xl bg-[hsl(var(--card))] border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/30 transition-colors"
              >
                <div className="noise absolute inset-0 rounded-2xl overflow-hidden opacity-30">
                  <div className="absolute inset-0" />
                </div>
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="text-[hsl(var(--primary))]">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-[hsl(var(--foreground))]">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-[hsl(var(--muted-foreground))] font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="https://github.com/soloshun/opendsa"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-[hsl(var(--primary))] px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-[hsl(var(--primary-foreground))] transition-all hover:opacity-90 glow"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              Star on GitHub
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 opacity-50" />
            </Link>
            <Link
              href="https://github.com/soloshun/opendsa/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--border))] bg-transparent px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-[hsl(var(--foreground))] transition-all hover:bg-[hsl(var(--secondary))] hover:border-[hsl(var(--primary))]/50"
            >
              Contribute
            </Link>
          </div>

          {/* Contribution types */}
          <div className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              "New Algorithms",
              "Bug Fixes",
              "Documentation",
              "UI/UX Design",
              "Testing",
              "Translations",
            ].map((type) => (
              <span
                key={type}
                className="rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--card))]/50 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-[hsl(var(--muted-foreground))] font-mono hover:border-[hsl(var(--primary))]/30 transition-colors"
              >
                {type}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
