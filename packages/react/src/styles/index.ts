import { colors, fontSizes, fontWeights, fonts, lineHeights, space, radii} from '@miragem/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'
import type * as Stitches from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
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

// Adicione essas declarações de tipo explícitas
export type StyledComponent = typeof styled
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