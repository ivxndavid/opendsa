import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs'

// Get the default MDX components from the theme
const themeComponents = getThemeComponents()

// Merge your custom components with the theme components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    ...components
  }
}

