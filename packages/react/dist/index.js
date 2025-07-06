"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var index_exports = {};
__export(index_exports, {
  Input: () => Input,
  Select1: () => Select1
});
module.exports = __toCommonJS(index_exports);

// src/components/Select.tsx
var import_react = require("@stitches/react");
var import_jsx_runtime = require("react/jsx-runtime");
var Select = (0, import_react.styled)("select", {
  appearance: "none"
});
function Select1() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: "", children: "Teste090000" }) });
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
var import_react2 = require("@stitches/react");
var {
  styled: styled2,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = (0, import_react2.createStitches)({
  themeMap: {
    ...import_react2.defaultThemeMap,
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input,
  Select1
});
