"use client";

import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, ExternalLink, Crown, Code2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface GitHubStats {
  stars: number;
  forks: number;
  contributors: number;
}

interface Contributor {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

// Contribution tier colors and badges
function getContributorTier(contributions: number) {
  if (contributions >= 100) {
    return {
      tier: "legendary",
      color: "from-amber-400 via-yellow-500 to-amber-600",
      border: "border-amber-400/60",
      glow: "shadow-amber-500/30",
      badge: "bg-gradient-to-r from-amber-500 to-yellow-500",
      textColor: "text-amber-400",
      emoji: "👑",
    };
  }
  if (contributions >= 50) {
    return {
      tier: "gold",
      color: "from-yellow-400 to-amber-500",
      border: "border-yellow-400/50",
      glow: "shadow-yellow-500/20",
      badge: "bg-gradient-to-r from-yellow-500 to-amber-500",
      textColor: "text-yellow-400",
      emoji: "⭐",
    };
  }
  if (contributions >= 20) {
    return {
      tier: "silver",
      color: "from-slate-300 to-slate-400",
      border: "border-slate-400/40",
      glow: "shadow-slate-400/15",
      badge: "bg-gradient-to-r from-slate-400 to-slate-500",
      textColor: "text-slate-300",
      emoji: "",
    };
  }
  if (contributions >= 10) {
    return {
      tier: "bronze",
      color: "from-orange-400 to-orange-600",
      border: "border-orange-400/30",
      glow: "shadow-orange-500/10",
      badge: "bg-gradient-to-r from-orange-500 to-orange-600",
      textColor: "text-orange-400",
      emoji: "",
    };
  }
  return {
    tier: "contributor",
    color: "from-[hsl(var(--primary))] to-emerald-600",
    border: "border-[hsl(var(--border))]",
    glow: "",
    badge: "bg-[hsl(var(--primary))]",
    textColor: "text-[hsl(var(--primary))]",
    emoji: "",
  };
}

function formatContributions(count: number): string {
  if (count >= 100) return "99+";
  return count.toString();
}

interface ContributorAvatarProps {
  contributor: Contributor;
  index: number;
}

function ContributorAvatar({ contributor, index }: ContributorAvatarProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const tier = getContributorTier(contributor.contributions);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative group"
    >
      <Link
        href={contributor.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative"
      >
        {/* Glow effect for top contributors */}
        {tier.tier === "legendary" && (
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
        )}
        {tier.tier === "gold" && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-sm opacity-40 group-hover:opacity-60 transition-opacity" />
        )}

        {/* Avatar container */}
        <div
          className={`relative h-12 w-12 sm:h-14 sm:w-14 rounded-full overflow-hidden border-2 ${tier.border} transition-all duration-300 group-hover:scale-110 group-hover:border-[hsl(var(--primary))] ${tier.glow ? `shadow-lg ${tier.glow}` : ""}`}
        >
          {isInView ? (
            <Image
              src={contributor.avatar_url}
              alt={contributor.login}
              fill
              className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
              onLoad={() => setIsLoaded(true)}
              sizes="56px"
            />
          ) : null}

          {/* Loading skeleton */}
          {(!isInView || !isLoaded) && (
            <div className="absolute inset-0 bg-[hsl(var(--secondary))] animate-pulse" />
          )}
        </div>

        {/* Crown for legendary contributors */}
        {tier.emoji && (
          <span className="absolute -top-1 -right-1 text-sm sm:text-base z-10">
            {tier.emoji}
          </span>
        )}

        {/* Contribution badge */}
        <div
          className={`absolute -bottom-1 -right-1 ${tier.badge} text-[9px] sm:text-[10px] font-bold text-white px-1.5 py-0.5 rounded-full min-w-[20px] text-center shadow-lg z-10`}
        >
          {formatContributions(contributor.contributions)}
        </div>

        {/* Hover tooltip */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none z-20">
          <div className="bg-[hsl(0_0%_8%)] border border-[hsl(var(--border))] rounded-lg px-3 py-2 shadow-xl whitespace-nowrap">
            {/* Username */}
            <div className={`font-mono text-xs sm:text-sm font-bold ${tier.textColor}`}>
              @{contributor.login}
            </div>
            {/* Contribution count */}
            <div className="flex items-center gap-1.5 mt-1 text-[10px] sm:text-xs text-[hsl(var(--muted-foreground))]">
              <Code2 className="h-3 w-3" />
              <span>{contributor.contributions} commits</span>
              {tier.emoji && <span>{tier.emoji}</span>}
            </div>
            {/* Tier badge */}
            <div className={`mt-1.5 text-[9px] font-mono uppercase tracking-wider ${tier.textColor}`}>
              {tier.tier}
            </div>
            {/* Arrow */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[hsl(var(--border))]" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function OpenSource() {
  const [stats, setStats] = useState<GitHubStats>({ stars: 0, forks: 0, contributors: 1 });
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
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

        // Fetch contributors
        const contribRes = await fetch("https://api.github.com/repos/soloshun/opendsa/contributors?per_page=50");
        if (contribRes.ok) {
          const contribData: Contributor[] = await contribRes.json();
          setContributors(contribData);
          setStats(prev => ({ ...prev, contributors: contribData.length }));
        }
      } catch (error) {
        console.error("Failed to fetch GitHub data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
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
          {/* Heading */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Github className="h-4 w-4 text-[hsl(var(--primary))]" />
            <span className="mono-label">/ Open Source</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-[hsl(var(--foreground))]">
            BUILT BY THE <span className="text-[hsl(var(--primary))]">COMMUNITY</span>
            <br />
            FOR THE <span className="text-[hsl(var(--primary))]">COMMUNITY</span>
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            OpenDSA is 100% open source and always will be. Join us in building
            the best algorithm visualization platform.
          </p>

          {/* Contributors showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 sm:mt-14"
          >
            {/* Contributors header */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-[hsl(var(--border))]" />
              <div className="flex items-center gap-2 text-sm font-mono text-[hsl(var(--muted-foreground))]">
                <Crown className="h-4 w-4 text-amber-400" />
                <span>Contributors</span>
                <span className="text-[hsl(var(--primary))]">({stats.contributors})</span>
              </div>
              <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-[hsl(var(--border))]" />
            </div>

            {/* Contributors grid */}
            <div className="relative rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--card))]/50 backdrop-blur-sm p-6 sm:p-8">
              {/* Terminal-like header */}
              <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-4 py-2 border-b border-[hsl(var(--border))] bg-[hsl(0_0%_6%)]/80 rounded-t-2xl">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[10px] font-mono text-[hsl(var(--muted-foreground))] ml-2">
                  git log --format=&quot;%an&quot; | sort -u
                </span>
              </div>

              {/* Contributors avatars */}
              <div className="pt-8 sm:pt-10">
                {loading ? (
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[hsl(var(--secondary))] animate-pulse"
                      />
                    ))}
                  </div>
                ) : contributors.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {contributors.map((contributor, index) => (
                      <ContributorAvatar
                        key={contributor.id}
                        contributor={contributor}
                        index={index}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-[hsl(var(--muted-foreground))] py-4">
                    Be the first contributor!
                  </p>
                )}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-4 border-t border-[hsl(var(--border))]/50 flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs text-[hsl(var(--muted-foreground))]">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500" />
                  <span>👑 100+ commits</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500" />
                  <span>⭐ 50+ commits</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-slate-300 to-slate-400" />
                  <span>20+ commits</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
                  <span>Contributor</span>
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {[
              { icon: <Star className="h-5 w-5 sm:h-6 sm:w-6" />, label: "Stars", value: loading ? "..." : stats.stars.toString() },
              { icon: <GitFork className="h-5 w-5 sm:h-6 sm:w-6" />, label: "Forks", value: loading ? "..." : stats.forks.toString() },
              { icon: <Users className="h-5 w-5 sm:h-6 sm:w-6" />, label: "Contributors", value: loading ? "..." : stats.contributors.toString() },
              { icon: <Github className="h-5 w-5 sm:h-6 sm:w-6" />, label: "MIT License", value: "Free" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="relative group flex flex-col items-center gap-2 p-4 sm:p-6 rounded-2xl bg-[hsl(var(--card))]/80 border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/30 transition-colors"
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
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-[hsl(var(--border))] bg-transparent px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-medium text-[hsl(var(--foreground))] transition-all hover:bg-[hsl(var(--secondary))]/80 hover:border-[hsl(var(--primary))]/50"
            >
              Become a Contributor
            </Link>
          </div>

          {/* Contribution types */}
          <div className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="text-[hsl(var(--primary))] text-sm font-semibold">Contribution types:</span>{" "}
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
