import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  Button as ButtonComponent,
  type ButtonProps,
} from '@miragem/react';

export default {
  title: 'Form/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  args: {
    children: "Botão"
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Conteúdo interno do botão (texto, ícone, etc).',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', "icon"],
      description: 'Define a intenção de cor do botão.',
    },
    visual: {
      control: 'radio',
      options: ['solid', 'outline'],
      description: 'Define o estilo visual do botão.',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o botão para interação.',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Faz o botão ocupar 100% da largura do contêiner.',
    },
    onClick: { 
      action: 'clicou',
      description: 'Função chamada ao clicar no botão.',
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<ButtonProps>;


export const ButtonPrimary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: 'Primary',
  }
}

export const ButtonSecondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  }
}

export const ButtonDanger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
    children: 'Danger',
  }
}

export const ButtonSucess: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
    children: 'Sucess',
  }
}

export const ButtonIcon: StoryObj<ButtonProps> = {
  args: {
    variant: "icon",
  }
}
