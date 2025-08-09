import type { HTMLAttributes, ReactNode } from "react";

export interface ICardProps extends HTMLAttributes<HTMLDivElement> {
  background?: "primary" | "secondary";
  children: ReactNode;
  isImageBackground: boolean;
  imageBackground?: string;
  positionImageBackground?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  isPixelsImages?: boolean;
  sidePixelsImages?: "left" | "right";
  className?: string;
  heightAuto: boolean;
}