import { defineConfig } from '@pandacss/dev'
import { convertTokensToValues } from "./src/utils/convertTokens"
import { 
  colors, 
  fontSizes, 
  fontWeights, 
  fonts, 
  lineHeights, 
  radii, 
  space 
} from "./src/tokens"

export default defineConfig({

  
  // Whether to use css reset
  preflight: true,

  globalCss: {
    '*': {
      margin: '0',
      padding: '0',
      boxSizing: 'border-box'
    },
  },

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: convertTokensToValues(colors),
        spacing: convertTokensToValues(space),
        radii: convertTokensToValues(radii),
        fontSizes: convertTokensToValues(fontSizes),
        lineHeights: convertTokensToValues(lineHeights),
        fontWeights: convertTokensToValues(fontWeights),
        fonts: convertTokensToValues(fonts),
      }
    }
  },

  // The output directory for your css system
  outdir: 'styled-system',

  // Build CSS for library mode
  minify: true,
  hash: false
})