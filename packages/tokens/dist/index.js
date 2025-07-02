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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  colors: () => colors,
  fontSize: () => fontSize,
  fontWeight: () => fontWeight,
  fonts: () => fonts,
  lineHeight: () => lineHeight,
  space: () => space
});
module.exports = __toCommonJS(index_exports);

// src/colors.ts
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

// src/space.ts
var space = {
  2: "0.5rem",
  4: "1rem",
  6: "1.5rem"
};

// src/line-heights.ts
var lineHeight = {
  base: "120%"
};

// src/fonts.ts
var fonts = {
  default: "Inter, sans-serif"
};

// src/font-weight.ts
var fontWeight = {
  regular: "400",
  semiBold: "600",
  bold: "700"
};

// src/font-size.ts
var fontSize = {
  sm: "0.812rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "1.562rem"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontSize,
  fontWeight,
  fonts,
  lineHeight,
  space
});
