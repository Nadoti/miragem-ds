import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button as ButtonComponent,
  type ButtonProps,
} from '@miragem/react';

export default {
  title: 'Form',
  component: ButtonComponent,
  args: {
    children: "Botão"
  }
} as Meta<ButtonProps>;

export const ButtonPrimary: StoryObj<ButtonProps> = {
  args: {
    test: 'primary',
    children: 'Btn primario',
  }
}

export const ButtonSecondary: StoryObj<ButtonProps> = {
  args: {
    test: 'secondary',
    children: 'Btn secundário',
  }
}
