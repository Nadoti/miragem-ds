// src/components/Select.tsx
import { styled } from "@stitches/react";
import { jsx } from "react/jsx-runtime";
var Select = styled("select", {
  appearance: "none"
});
function Select1() {
  return /* @__PURE__ */ jsx(Select, { children: /* @__PURE__ */ jsx("option", { value: "", children: "Teste090000" }) });
}

// ../tokens/dist/index.mjs
var colors = {
  black: "#000000",
  white: "#FFFFFF",
  gray100: "#DEE9EA",
  gray700: "#8B8B8B",
  green100: "#F8F8F8",
  green500: "#47A138",
  blue600: "#004D61",
  red500: "#FF5031"
};
var space = {
  2: "0.5rem",
  4: "1rem",
  6: "1.5rem"
};
var lineHeights = {
  base: "120%"
};
var fonts = {
  default: "Inter, sans-serif"
};
var fontWeights = {
  regular: "400",
  semiBold: "600",
  bold: "700"
};
var fontSizes = {
  sm: "0.812rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.562rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled: styled2,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space"
  },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Input.tsx
var Input = styled2("input", {});
export {
  Input,
  Select1
};
