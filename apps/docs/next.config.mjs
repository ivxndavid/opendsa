import nextra from 'nextra'

const withNextra = nextra({
  // Nextra-specific options can go here.
  latex: true,
  // This helps with code block parsing
  defaultShowCopyCode: true,
})

export default withNextra({
  turbopack: {
    resolveAlias: {
      // Required by Nextra (see mdx-components file convention)
      'next-mdx-import-source-file': './mdx-components.js'
    }
  }
})

