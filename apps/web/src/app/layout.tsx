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

export const metadata: Metadata = {
  title: "OpenDSA - Visualize Data Structures & Algorithms",
  description:
    "An open-source, interactive platform for visualizing data structures and algorithms. Learn through beautiful animations and step-by-step explanations.",
  keywords: [
    "algorithms",
    "data structures",
    "visualization",
    "learning",
    "open source",
    "education",
    "sorting",
    "searching",
    "graphs",
    "trees",
  ],
  authors: [{ name: "Solomon Eshun" }],
  openGraph: {
    title: "OpenDSA - Visualize Data Structures & Algorithms",
    description:
      "An open-source, interactive platform for visualizing data structures and algorithms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenDSA - Visualize Data Structures & Algorithms",
    description:
      "An open-source, interactive platform for visualizing data structures and algorithms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${syne.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
