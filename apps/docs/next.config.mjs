import nextra from 'nextra'

const withNextra = nextra({
  // Nextra-specific options can go here.
})

export default withNextra({
  turbopack: {
    resolveAlias: {
      // Required by Nextra (see mdx-components file convention)
      'next-mdx-import-source-file': './mdx-components.js'
    }
  }
})

