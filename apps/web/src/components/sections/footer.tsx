"use client";

import { Github, Twitter, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Launch App", href: "https://app.opendsa.dev" },
  ],
  resources: [
    { label: "Documentation", href: "https://docs.opendsa.dev" },
    { label: "Contributing", href: "https://github.com/soloshun/opendsa/blob/main/CONTRIBUTING.md" },
    { label: "Changelog", href: "https://github.com/soloshun/opendsa/releases" },
  ],
  community: [
    { label: "GitHub", href: "https://github.com/soloshun/opendsa" },
    { label: "Discord", href: "#" },
    { label: "Twitter", href: "#" },
  ],
};

export function Footer() {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAvatar() {
      try {
        const res = await fetch("https://api.github.com/users/soloshun");
        if (res.ok) {
          const data = await res.json();
          setAvatarUrl(data.avatar_url);
        }
      } catch (error) {
        console.error("Failed to fetch avatar:", error);
      }
    }
    fetchAvatar();
  }, []);

  return (
    <footer className="relative border-t border-[hsl(var(--border))] overflow-hidden">
      {/* Gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--primary))]/10 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--primary))_0%,_transparent_60%)] opacity-[0.08]" />
      
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(var(--card))]/80" />
      
      {/* Noise overlay */}
      <div className="noise absolute inset-0">
        <div className="absolute inset-0" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--primary))]">
                <span className="font-mono text-sm font-bold text-[hsl(var(--primary-foreground))]">
                  {"<>"}
                </span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[hsl(var(--foreground))]">
                OPEN<span className="text-[hsl(var(--primary))]">DSA</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-[hsl(var(--muted-foreground))] max-w-xs leading-relaxed">
              An open-source, interactive platform for visualizing data
              structures and algorithms.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="https://github.com/soloshun/opendsa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] transition-all hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary))]/10 hover:border-[hsl(var(--primary))]/30 border border-transparent"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--secondary))] text-[hsl(var(--muted-foreground))] transition-all hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--primary))]/10 hover:border-[hsl(var(--primary))]/30 border border-transparent"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold text-[hsl(var(--foreground))] uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold text-[hsl(var(--foreground))] uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xs font-semibold text-[hsl(var(--foreground))] uppercase tracking-wider mb-4">Community</h3>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center justify-between gap-4 border-t border-[hsl(var(--border))] pt-8 md:flex-row">
          <p className="text-sm text-[hsl(var(--muted-foreground))] font-mono">
            &copy; {new Date().getFullYear()} OpenDSA. MIT License.
          </p>
          <div className="flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))]">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by</span>
            <Link
              href="https://github.com/soloshun"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              {avatarUrl && (
                <Image
                  src={avatarUrl}
                  alt="Solomon Eshun"
                  width={24}
                  height={24}
                  className="rounded-full ring-2 ring-[hsl(var(--border))]"
                />
              )}
              Solomon Eshun
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
