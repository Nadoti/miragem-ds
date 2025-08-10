import type { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant: "default" | "line";
  disabled?: boolean;
  type: "text" | "number"
}