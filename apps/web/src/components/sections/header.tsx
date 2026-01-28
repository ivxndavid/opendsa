"use client";

import { motion } from "framer-motion";
import { Github, Menu, X, Star } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "https://docs.opendsa.vercel.app", label: "Docs", external: true }, // TODO: CHANGE URL TO https://docs.opendsa.dev AFTER DOMAIN IS BOUGHT
];

function useGitHubStars() {
  const [stars, setStars] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStars() {
      try {
        const res = await fetch("https://api.github.com/repos/soloshun/opendsa");
        if (res.ok) {
          const data = await res.json();
          setStars(data.stargazers_count);
        }
      } catch (error) {
        console.error("Failed to fetch stars:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchStars();
  }, []);

  return { stars, loading };
}

function formatStars(count: number | null): string {
  if (count === null) return "";
  if (count >= 1000) {
    return (count / 1000).toFixed(1) + "k";
  }
  return count.toString();
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { stars, loading } = useGitHubStars();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl"
    >
      {/* Main nav container - rounded pill style */}
      <nav className="relative flex items-center justify-between rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--background))]/80 backdrop-blur-xl px-2 py-2 shadow-lg shadow-black/20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 pl-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--primary))]">
            <span className="font-mono text-sm font-bold text-[hsl(var(--primary-foreground))]">
              {"<>"}
            </span>
          </div>
          <span className="text-lg font-bold tracking-tight text-[hsl(var(--foreground))]">
            OPEN<span className="text-[hsl(var(--primary))]">DSA</span>
          </span>
        </Link>

        {/* Desktop Navigation - centered */}
        <div className="hidden md:flex md:items-center md:gap-1 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="px-4 py-2 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))] rounded-full hover:bg-[hsl(var(--secondary))]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="hidden md:flex md:items-center md:gap-2">
          {/* GitHub star button with count */}
          <Link
            href="https://github.com/soloshun/opendsa"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] px-4 py-2 text-sm font-medium text-[hsl(var(--foreground))] transition-all hover:border-[hsl(var(--primary))]/50 hover:bg-[hsl(var(--secondary))]"
          >
            <Github className="h-4 w-4" />
            <span>Star</span>
            {!loading && stars !== null && (
              <span className="flex items-center gap-1 bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-2 py-0.5 rounded-full text-xs font-semibold">
                <Star className="h-3 w-3 fill-current" />
                {formatStars(stars)}
              </span>
            )}
          </Link>

          {/* Launch App CTA */}
          <Link
            href="https://app.opendsa.vercel.app" // TODO: CHANGE URL TO https://app.opendsa.dev AFTER DOMAIN IS BOUGHT
            className="flex items-center gap-2 rounded-full bg-[hsl(var(--primary))] px-5 py-2 text-sm font-semibold text-[hsl(var(--primary-foreground))] transition-all hover:opacity-90 glow-sm"
          >
            LAUNCH APP
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--secondary))] text-[hsl(var(--foreground))]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="mt-2 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--background))]/95 backdrop-blur-xl p-4 md:hidden"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block rounded-xl py-3 px-4 text-sm font-medium text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--secondary))]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-2 pt-4 mt-4 border-t border-[hsl(var(--border))]">
            <Link
              href="https://github.com/soloshun/opendsa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--secondary))] py-3 text-sm font-medium text-[hsl(var(--foreground))]"
            >
              <Github className="h-4 w-4" />
              <span>Star</span>
              {!loading && stars !== null && (
                <span className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] px-2 py-0.5 rounded-full text-xs font-semibold">
                  {formatStars(stars)}
                </span>
              )}
            </Link>
            <Link
              href="https://app.opendsa.vercel.app" // TODO: CHANGE URL TO https://app.opendsa.dev AFTER DOMAIN IS BOUGHT
              className="flex-1 flex items-center justify-center rounded-xl bg-[hsl(var(--primary))] py-3 text-sm font-semibold text-[hsl(var(--primary-foreground))]"
            >
              Launch App
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
