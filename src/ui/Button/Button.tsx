import { type ComponentProps, forwardRef } from "react";
import { buttonStyles } from "./Button.styles"
import type { ButtonVariant, ButtonVisual, IButtonProps } from "../../interface/button.interface";



export interface ButtonProps extends Omit<ComponentProps<'button'>, 'disabled'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  visual?: ButtonVisual;
  fullWidth?: boolean;
  disabled?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, disabled, variant = 'primary', visual = 'solid', fullWidth, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={buttonStyles({
          variant,
          visual,
          fullWidth,
          disabled
        })}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

// Export adicional das variantes para uso externo se necessário
export type { IButtonProps };