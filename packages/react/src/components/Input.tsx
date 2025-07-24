import React from "react";
import { styled } from "../styles";
import type { VariantProps } from '@stitches/react';

// Defina o tipo explicitamente antes de usar
type InputStyledComponent = ReturnType<typeof styled>;

export const InputStyled: InputStyledComponent = styled('input', {
  all: 'unset',
  boxSizing: 'border-box',
  width: '100%',
  fontSize: '$md',
  fontFamily: '$default',
  padding: '$4',
  color: '$gray800',
  backgroundColor: '$white',
  textAlign: 'center',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  '&:focus': {
    borderColor: '$blue500',
    boxShadow: '0 0 0 2px $colors$blue300',
  },
  '&::placeholder': {
    color: '$gray100',
  },
  variants: {
    variant: {
      default: {
        border: '1px solid $blue600',
        color: '$gray900',
        borderRadius: '$md',
      },
      line: {
        border: 'none',
        borderBottom: '1px solid $green500',
        backgroundColor: '$white',
        color: '$black',
        textAlign: 'left',
        borderRadius: '0',
        padding: '0 0 $2 0'
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
        color: '$gray600',
        borderColor: '$gray200',
        cursor: 'not-allowed',
        '&::placeholder': {
          color: '$gray400',
        }
      },
    }
  },
  defaultVariants: {
    variant: 'default',
  }
});

// Tipos do componente
type InputVariants = VariantProps<typeof InputStyled>;
type InputVariant = 'default' | 'line';
type NativeInputProps = React.ComponentProps<'input'>;

export interface InputProps extends InputVariants, Omit<NativeInputProps, 'disabled'> {
  variant?: InputVariant;
  disabled?: boolean;
}

export function Input({ disabled, ...props }: InputProps) {
  return (
    <InputStyled disabled={disabled} {...props} />
  )
}