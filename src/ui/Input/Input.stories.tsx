import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input as InputComponent} from "./Input";
import type { InputProps } from "../../interface/input.interface";

const meta: Meta<typeof InputComponent> = {
  title: "Form/Input",
  component: InputComponent,
  tags: ["autodocs"],
  args: {
    label: "E-mail"
  }
};

type Story = StoryObj<InputProps>;

export const Default: Story = {
  args: {
    variant: "default"
  }
};

export const Line: Story = {
  args: {
    variant: "line"
  }
};

export const DefaultDisabled: Story = {
  args: {
    variant: "default",
    disabled: true
  }
};

export const LineDisabled: Story = {
  args: {
    variant: "line",
    disabled: true
  }
};

export default meta;