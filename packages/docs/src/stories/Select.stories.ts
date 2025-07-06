import type { Meta, StoryObj } from "@storybook/react-vite";
import {Select1, type SelectProps} from "@miragem/react"



export default {
  title: "Form",
  component: Select1,
  args: {
    children: "OLAOLA"
  }
} as Meta<SelectProps>


export const Select: StoryObj<SelectProps> = {}