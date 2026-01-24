import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'OpenAlgo Docs',
    template: '%s | OpenAlgo Docs'
  },
  description: 'OpenAlgo documentation'
}

const navbar = (
  <Navbar
    logo={<b>OpenAlgo</b>}
  />
)

const footer = <Footer>{new Date().getFullYear()} © OpenAlgo.</Footer>

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/solo-shun/openalgo/tree/dev/apps/docs"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

