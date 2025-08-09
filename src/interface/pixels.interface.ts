import type { HTMLAttributes } from "react";

export interface IPixelsProps extends HTMLAttributes<HTMLOrSVGElement> {
  background?: "primary" | "secondary";
}