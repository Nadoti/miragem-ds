import { ComponentProps } from "react";
import { styled } from "../styles";

export const Button = styled('button', {
  all: 'unset',
  fontSize: '$md',
  fontWeight: '$semiBold',
  color: '$white',
  borderRadius: '$md',
  fontFamily: '$default',
  backgroundColor: '$blue600',
  textAlign: 'center',


  variants: {
    test: {
      primary: {
        background: '$blue600',
      },
      secondary: {
        background: '$black',
      },
      danger: {
        background: '$red500',
      },
      success: {
        background: '$green500',
      },
      outlineSuccess: {
        border: '$green500',
        background: 'transparent',
      },
    }
  },
})

export type ButtonProps = ComponentProps<typeof Button>