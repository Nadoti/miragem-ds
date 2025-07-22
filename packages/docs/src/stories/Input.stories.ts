
import type { Meta, StoryObj } from "@storybook/react-vite";
import {Input as InputComponent, type InputProps} from "@miragem/react";


export default {
  title: 'Form/Input',
  component: InputComponent,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'line'],
      description: 'Define o estilo visual do input'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input para interação.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Faz o input ocupar 100% da largura do contêiner.',
    },
  }
} as Meta<InputProps>



export const InputDefault: StoryObj<InputProps> = {
  args: {
    variant: 'default',
  }
}

export const InputLine: StoryObj<InputProps> = {
  args: {
    variant: 'line',
  }
}