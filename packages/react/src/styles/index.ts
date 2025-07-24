import { colors, fontSizes, fontWeights, fonts, lineHeights, space, radii} from '@miragem/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'

// Crie a configuração do Stitches
const stitches = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})

// Exporte com tipos explícitos
export const styled: typeof stitches.styled = stitches.styled
export const css: typeof stitches.css = stitches.css
export const globalCss: typeof stitches.globalCss = stitches.globalCss
export const keyframes: typeof stitches.keyframes = stitches.keyframes
export const getCssText: typeof stitches.getCssText = stitches.getCssText
export const theme: typeof stitches.theme = stitches.theme
export const createTheme: typeof stitches.createTheme = stitches.createTheme
export const config: typeof stitches.config = stitches.config

// Tipos auxiliares
export type CSS = Stitches.CSS<typeof config>
export type { VariantProps } from '@stitches/react'

export const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  body: {
    fontFamily: '$default',
  },
});