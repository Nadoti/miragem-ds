import type { IPixelsProps } from "../interface/pixels.interface";
import { colors } from "../tokens";

export function PixelBottom({ background, ...props }: IPixelsProps) {
  const isBackground = background === "primary";
  const backgroundColor = isBackground ? colors.gray400 : colors.gray100;
  
  return (
    <>
      {isBackground ? (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 180 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          {...props}
          style={{
            maxWidth: "180px",
            maxHeight: "178px",
            ...props.style
          }}
        >
          <g opacity="0.3">
            <rect width="45" height="45" transform="matrix(-1 0 0 1 180 45)" fill={backgroundColor}/>
            <rect width="45" height="45" transform="matrix(-1 0 0 1 135 45)" fill={backgroundColor} fillOpacity="0.5"/>
            <rect width="45" height="45" transform="matrix(-1 0 0 1 135 90)" fill={backgroundColor} fillOpacity="0.9"/>
            <rect width="45" height="45" transform="matrix(-1 0 0 1 89.9998 45)" fill={backgroundColor} fillOpacity="0.9"/>
            <rect width="45" height="45" transform="matrix(-1 0 0 1 45 45)" fill={backgroundColor} fillOpacity="0.5"/>
            <rect width="45" height="45" transform="matrix(-1 0 0 1 45 0)" fill={backgroundColor} fillOpacity="0.9"/>
            <rect width="45" height="45" transform="matrix(-1 0 0 1 180 132.465)" fill={backgroundColor} fillOpacity="0.9"/>
          </g>
        </svg>
      ) : (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 178 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          {...props}
          style={{
            maxWidth: "178px",
            maxHeight: "180px",
            ...props.style
          }}
        >
          <rect x="45" y="180" width="45" height="45" transform="rotate(-90 45 180)" fill={backgroundColor}/>
          <rect x="45" y="135" width="45" height="45" transform="rotate(-90 45 135)" fill={backgroundColor} fillOpacity="0.5"/>
          <rect x="90" y="135" width="45" height="45" transform="rotate(-90 90 135)" fill={backgroundColor} fillOpacity="0.9"/>
          <rect x="45" y="89.9999" width="45" height="45" transform="rotate(-90 45 89.9999)" fill={backgroundColor} fillOpacity="0.9"/>
          <rect x="45" y="45" width="45" height="45" transform="rotate(-90 45 45)" fill={backgroundColor} fillOpacity="0.5"/>
          <rect x="0" y="45" width="45" height="45" transform="rotate(-90 0 45)" fill={backgroundColor} fillOpacity="0.9"/>
          <rect x="132.465" y="180" width="45" height="45" transform="rotate(-90 132.465 180)" fill={backgroundColor} fillOpacity="0.9"/>
        </svg>
      )}
    </>
  );
}