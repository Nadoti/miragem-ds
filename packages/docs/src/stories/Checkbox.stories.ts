import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox as CheckboxComponent, type CheckboxProps} from "@miragem/react";



export default {
  title: "Form/Checkbox",
  component: CheckboxComponent,
  tags: ["autodocs"],
  args: {
    label: 'Li e concordo'
  },

  argTypes: {
    label: {
      control: "text",
      description: "Nome do texto que vai ser usado no checkbox"
    }
  }

} as Meta<CheckboxProps>


export const Checkbox: StoryObj<CheckboxProps> = {
  args: {
    label: "Li e estou ciente quanto às condições de tratamento dos meus dados conforme descrito na Política de Privacidade do banco."
  }
}