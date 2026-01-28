import type { Metadata } from "next";
import { JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://app.opendsa.vercel.app"; // TODO: Change to https://app.opendsa.dev after domain purchase

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "OpenDSA App - Coming Soon | Algorithm Visualization Platform",
    template: "%s | OpenDSA App",
  },
  description:
    "The OpenDSA algorithm visualization app is under active development. Visualize sorting, searching, graphs, trees, and 70+ algorithms with beautiful interactive animations. Star us on GitHub to follow our progress!",
  keywords: [
    "algorithm visualization app",
    "data structures app",
    "interactive algorithms",
    "sorting visualization",
    "graph algorithms",
    "tree visualization",
    "learn algorithms",
    "computer science",
    "coding practice",
    "DSA tool",
    "open source",
    "coming soon",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "OpenDSA App",
    title: "OpenDSA App - Coming Soon",
    description:
      "The open-source algorithm visualization platform is under development. Star us on GitHub!",
    images: [
      {
        url: "/og-coming-soon.png", // TODO: Add screenshot
        width: 1200,
        height: 630,
        alt: "OpenDSA App - Coming Soon",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@opendsa",
    creator: "@soloshun",
    title: "OpenDSA App - Coming Soon",
    description:
      "The open-source algorithm visualization platform is under development. Star us on GitHub!",
    images: ["/og-coming-soon.png"], // TODO: Add screenshot
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${syne.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#22c55e" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
