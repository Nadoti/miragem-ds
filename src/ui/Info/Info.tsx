import type { HTMLAttributes } from "react";
import { cva } from "../../../styled-system/css";

export interface InfoProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "info" | "warning" | "error";
}

// Definir variantes usando Panda CSS CVA (Class Variance Authority)
const alertVariants = cva({
  base: {
    padding: '4',
    marginBottom: '4',
    fontSize: 'sm',
    borderRadius: 'lg',
    border: '1px solid',
    background: 'red'
  },
  variants: {
    variant: {
      info: {
        backgroundColor: 'green500',
        color: 'info.800',
        borderColor: 'info.500'
      },
      warning: {
        backgroundColor: 'blue600',
        color: 'warning.800',
        borderColor: 'warning.500'
      },
      error: {
        backgroundColor: 'error.100',
        color: 'error.800',
        borderColor: 'error.500'
      }
    }
  },
  defaultVariants: {
    variant: 'info'
  }
});

export default function Info({ children, variant = "info", ...props }: InfoProps) {
  return (
    <div
      className={alertVariants({variant: variant})}
      role="alert"
      {...props}
    >
      {children}
    </div>
  );
}