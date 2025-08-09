import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox as CheckboxComponent, type CheckboxProps} from "./Checkbox"



const meta: Meta<typeof CheckboxComponent> = {
  title: "Form/Checkbox",
  component: CheckboxComponent,
  tags: ["autodocs"],
  args: {
    label: "É checkbox ?"
  }
}

type Story = StoryObj<CheckboxProps>;


export const Checkbox: Story = {
  args: {
    label: "Checkbox"
  }
}

export default meta;