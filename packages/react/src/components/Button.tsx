import { ComponentProps } from "react";
import { styled } from "../styles";
import type * as Stitches from '@stitches/react';


export const ButtonStyled = styled('button', {
  all: 'unset',
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  
  fontSize: '$md',
  fontWeight: '$semiBold',
  fontFamily: '$default',
  borderRadius: '$md',
  padding: '0 $4', 
  height: '44px',
  cursor: 'pointer',
  transition: 'background-color 0.2s, color 0.2s, border-color 0.2s',

  '&:focus-visible': {
    outline: '2px solid $blue500',
    outlineOffset: '2px',
  },

  variants: {

    variant: {
      primary: { 
        backgroundColor: '$blue600', 
        color: '$white' 
      },
      secondary: { 
        backgroundColor: '$black', 
        color: '$white' 
      },
      danger: { 
        backgroundColor: '$red500', 
        color: '$white' 
      },
      success: { 
        backgroundColor: '$green500', 
        color: '$white' 
      },
      icon: {
        borderRadius: "$full",
        backgroundColor: '$blue600', color: '$white'
      }
    },

    visual: {
      solid: {},
      outline: {
        background: 'transparent',
        border: '1px solid',
      },
    },

    fullWidth: {
      true: {
        width: '100%',
      },
    },

    disabled: {
      true: {
        backgroundColor: '$gray100',
        color: '$gray700',
        cursor: 'not-allowed',
        borderColor: '$gray100',
      }
    }
  },

  compoundVariants: [
    { visual: 'outline', variant: 'primary', css: { color: '$blue600', borderColor: '$blue600' } },
    { visual: 'outline', variant: 'secondary', css: { color: '$black', borderColor: '$black' } },
    { visual: 'outline', variant: 'danger', css: { color: '$red500', borderColor: '$red500' } },
    { visual: 'outline', variant: 'success', css: { color: '$green500', borderColor: '$green500' } },
  ],

  defaultVariants: {
    variant: 'primary',
    visual: 'solid',
  },
});

type ButtonVariants = Stitches.VariantProps<typeof ButtonStyled>;
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'icon';
type ButtonVisual = 'solid' | 'outline';
type NativeButtonProps = React.ComponentProps<'button'>;

export interface ButtonProps extends ButtonVariants, Omit<NativeButtonProps, 'disabled'> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  visual?: ButtonVisual;
  fullWidth?: boolean;
  disabled?: boolean; 
}

export function Button({ children, disabled, ...props }: ButtonProps) {

  return (
    <ButtonStyled disabled={disabled} {...props} >
      { children }
    </ButtonStyled>
  )
}