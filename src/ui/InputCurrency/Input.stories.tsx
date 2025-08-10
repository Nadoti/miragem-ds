import type { Meta, StoryObj } from "@storybook/react-vite";
import { CurrencyInput as CurrencyInputComponent } from "./InputCurrency"
import type { CurrencyInputProps } from "../../interface/input-currency.interface";


const meta: Meta<typeof CurrencyInputComponent> = {
  title: "Form/InputCurrency",
  component: CurrencyInputComponent,
  tags: ["autodocs"],
  args: {
    label: "Valor"
  }
}

type Story = StoryObj<CurrencyInputProps>;

export const Default: Story = {
  
};

export default meta