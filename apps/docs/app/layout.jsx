import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import 'katex/dist/katex.min.css'
import { JetBrains_Mono, Inter } from "next/font/google";
// import Image from 'next/image'

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

export const metadata = {
  title: {
    default: 'OpenDSA Docs',
    template: '%s | OpenDSA Docs'
  },
  description: 'OpenDSA documentation',
  authors: [{ name: "Solomon Eshun" }],
}

const navbar = (
  <Navbar
    logo={<b>OpenDSA</b>}
  />
)

const footer = <Footer >
  <span>{new Date().getFullYear()} © OpenDSA by {" "} <a href="https://github.com/soloshun">Solo Shun</a></span>.
</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body className={`${jetbrainsMono.variable} ${inter.variable} antialiased`}>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/soloshun/opendsa/tree/dev/apps/docs"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

