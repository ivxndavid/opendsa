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

export const metadata: Metadata = {
  title: "OpenDSA App - Coming Soon",
  description: "The open-source algorithm visualization platform. Interactive visualizations for sorting, searching, graphs, trees, and more.",
  keywords: ["algorithms", "data structures", "visualization", "learning", "education", "open source"],
  authors: [{ name: "Solomon Eshun", url: "https://github.com/soloshun" }],
  openGraph: {
    title: "OpenDSA - Coming Soon",
    description: "The open-source algorithm visualization platform is under development.",
    url: "https://app.opendsa.vercel.app",
    siteName: "OpenDSA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenDSA - Coming Soon",
    description: "The open-source algorithm visualization platform is under development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${syne.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
