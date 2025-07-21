import type { Meta, StoryObj } from "@storybook/react-vite";
import {Select as SelectComponent, type SelectProps, type SelectIOption} from "@miragem/react"
import React from "react";

const sampleOptions: SelectIOption[] = [
  { value: "currency-exchange", label: "Câmbio de Moeda" },
  { value: "doc-ted", label: "DOC/TED" },
  { value: "loan-financing", label: "Empréstimo e Financiamento" },
  { value: "investments", label: "Investimentos" },
];

export default {
  title: "Form/Select",
  component: SelectComponent,
  tags: ["autodocs"],
  args: {
    label: "Tipo de transação",
    options: sampleOptions,
    placeholder: "Selecione uma opção...",
    fullWidth: false,
  },
  
  argTypes: {
    onChange: { 
      action: "Option selecionado",
      description: "Função que seleciona as opções",
      table: {
        disable: true,
      },
    },
    fullWidth: {
      control: "boolean",
      description: "Faz o select ocupar 100% da largura do contêiner."
    }
  },
} as Meta<SelectProps>

type Story = StoryObj<SelectProps>;

export const Select: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = React.useState<string | null>(null);

    const handleOnChange = (value: string) => {
      setSelectedValue(value);
      if (args.onChange) {
        args.onChange(value);
      }
    };
  
    return (
      <SelectComponent
        {...args}
        value={selectedValue}
        onChange={handleOnChange}
      />
    );

  },
};