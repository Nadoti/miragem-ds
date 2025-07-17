import type { Meta, StoryObj } from "@storybook/react-vite";
import {Select as SelectComponent, type SelectProps} from "@miragem/react"



export default {
  title: "Form",
  component: SelectComponent,
  args: {
    children: "OLAOLA"
  }
} as Meta<SelectProps>


export const Select: StoryObj<SelectProps> = {}