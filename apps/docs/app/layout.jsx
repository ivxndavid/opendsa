import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import 'katex/dist/katex.min.css'
import { JetBrains_Mono, Inter } from "next/font/google";
import { GitHubStarButton } from '../components/github-star-button'

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const siteUrl = "https://docs-opendsa.vercel.app"; // TODO: Change to https://docs.opendsa.dev after domain purchase

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'OpenDSA Documentation - Learn Algorithms & Data Structures',
    template: '%s | OpenDSA Docs'
  },
  description: 'Comprehensive documentation for OpenDSA - the open-source algorithm visualization platform. Learn about architecture, contributing, roadmap, and how to build your own visualizers.',
  keywords: [
    'OpenDSA documentation',
    'algorithm visualization docs',
    'data structures guide',
    'contributing guide',
    'open source project',
    'Next.js documentation',
    'algorithm implementation',
    'visualization tutorial',
  ],
  authors: [{ name: "Solomon Eshun", url: "https://github.com/soloshun" }],
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
    siteName: "OpenDSA Docs",
    title: "OpenDSA Documentation",
    description: "Learn how to use and contribute to OpenDSA - the open-source algorithm visualization platform.",
    images: [
      {
        url: "/og-docs.png", // TODO: Add screenshot
        width: 1200,
        height: 630,
        alt: "OpenDSA Documentation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@opendsa",
    creator: "@soloshun",
    title: "OpenDSA Documentation",
    description: "Learn how to use and contribute to OpenDSA - the open-source algorithm visualization platform.",
    images: ["/og-docs.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
}

const navbar = (
  <Navbar
    logo={
      // <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      //   <div style={{
      //     display: 'flex',
      //     height: '28px',
      //     width: '28px',
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //     borderRadius: '6px',
      //     backgroundColor: '#22c55e',
      //     fontSize: '12px',
      //     fontWeight: 'bold',
      //     color: '#000',
      //     fontFamily: 'monospace'
      //   }}>
      //     {'<>'}
      //   </div>
      //   <span style={{ fontWeight: 'bold' }}>OpenDSA</span>
      // </div>
        <span style={{ fontWeight: 'bold' }}>OpenDSA</span>
    }
    projectLink="https://github.com/soloshun/opendsa"
  >
    <GitHubStarButton />
  </Navbar>
)

const footer = <Footer>
  <span>{new Date().getFullYear()} © OpenDSA by {" "} <a href="https://github.com/soloshun" target="_blank" rel="noopener noreferrer">Solo Shun</a>. MIT License.</span>
</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#22c55e" />
      </Head>
      <body className={`${jetbrainsMono.variable} ${inter.variable} antialiased`}>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/soloshun/opendsa/tree/dev/apps/docs"
          editLink="Edit this page on GitHub"
          feedback={{ content: "Question? Give us feedback →" }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
