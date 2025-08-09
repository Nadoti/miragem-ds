import { cva } from "../../../styled-system/css"

export const cardContainer = cva({
  base: {
    width: "100%",
    paddingLeft: "6",
    paddingRight: "6",
    paddingTop: "6",
    paddingBottom: "6",
    background: "gray50",
    borderRadius: "8px",
    position: "relative",
    overflow: "hidden" 
  },
  variants: {
    background: {
      primary: {
        background: "blue600"
      },
      secondary: {
        background: "gray300"
      },
    },
    heightAuto: {
      true: {
        height: "auto",
        minHeight: "200px"
      },
      false: {
        minHeight: "500px",
      }
    }
  }
})

export const cardImgContainer = cva({
  base: {
    position: "absolute",
    zIndex: "1",
    maxWidth: "40%", 
    maxHeight: "60%",
  },
  variants: {
    positionImageBackground: {
      "top-left": {
        top: "10",
        left: "10"
      },
      "top-right": {
        top: "10",
        right: "10"
      },
      "bottom-left": {
        bottom: "10",
        left: "10"
      },
      "bottom-right": {
        bottom: "10",
        right: "10"
      }
    }
  }
})

export const cardPixelsTopContainer = cva({
  base: {
    position: "absolute",
    zIndex: "1",
    maxWidth: "min(180px, 35%)",
    maxHeight: "min(178px, 40%)",
  },
  variants: {
    sidePixelsImages: {
      "right": {
        top: "0",
        right: "0"
      },
      "left": {
        top: "0",
        left: "0"
      },
    }
  }
})

export const cardPixelsBottomContainer = cva({
  base: {
    position: "absolute",
    zIndex: "1",
    maxWidth: "min(178px, 35%)", 
    maxHeight: "min(180px, 40%)", 
  },
  variants: {
    sidePixelsImages: {
      "right": {
        bottom: "0",
        left: "0"
      },
      "left": {
        bottom: "0",
        right: "0"
      },
    }
  }
})

export const imgBackground = cva({
  base: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    maxWidth: "320px", 
  }
})

export const pixelSvgStyle = {
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  maxHeight: "100%"
};