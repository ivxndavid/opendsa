import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://opendsa.vercel.app"; // TODO: Change to https://opendsa.dev after domain purchase

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OpenDSA - Open Source Algorithm Visualization Platform",
    template: "%s | OpenDSA",
  },
  description:
    "OpenDSA is an open-source, interactive platform for visualizing data structures and algorithms. Learn sorting, searching, graphs, trees, and 70+ algorithms through beautiful animations and step-by-step explanations. Built with Next.js, TypeScript, and Framer Motion.",
  keywords: [
    "algorithm visualization",
    "data structures",
    "sorting algorithms",
    "searching algorithms",
    "graph algorithms",
    "tree traversal",
    "binary search tree",
    "heap",
    "hash table",
    "dynamic programming",
    "greedy algorithms",
    "divide and conquer",
    "bubble sort",
    "quick sort",
    "merge sort",
    "BFS",
    "DFS",
    "Dijkstra",
    "A* algorithm",
    "learn algorithms",
    "interactive learning",
    "computer science education",
    "open source",
    "visualization tool",
    "coding interview prep",
    "DSA practice",
  ],
  authors: [
    { name: "Solomon Eshun", url: "https://github.com/soloshun" },
  ],
  creator: "Solomon Eshun",
  publisher: "OpenDSA",
  icons: {
    icon: "/opendsa.ico",
    shortcut: "/opendsa.ico",
    apple: "/opendsa.ico",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "OpenDSA",
    title: "OpenDSA - Open Source Algorithm Visualization Platform",
    description:
      "Visualize 70+ algorithms and data structures with beautiful animations. Free, open-source, and built for learners.",
    images: [
      {
        url: "/og-image.png", // TODO: Add screenshot
        width: 1200,
        height: 630,
        alt: "OpenDSA - Algorithm Visualization Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@opendsa",
    creator: "@soloshun",
    title: "OpenDSA - Open Source Algorithm Visualization Platform",
    description:
      "Visualize 70+ algorithms and data structures with beautiful animations. Free and open-source.",
    images: ["/og-image.png"], // TODO: Add screenshot
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Education",
  classification: "Algorithm Visualization Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#22c55e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${syne.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
