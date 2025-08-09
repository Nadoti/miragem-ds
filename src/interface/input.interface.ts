import type { HTMLAttributes } from "react";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: "default" | "line" | undefined;
  disabled?: boolean;
}