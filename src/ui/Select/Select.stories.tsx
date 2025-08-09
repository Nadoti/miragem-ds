import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select as SelectComponent } from "./Select";
import React from "react";
import type { SelectIOption, SelectIProps } from "../../interface/select.interface";

const sampleOptions: SelectIOption[] = [
  { value: "currency-exchange", label: "Câmbio de Moeda" },
  { value: "doc-ted", label: "DOC/TED" },
  { value: "loan-financing", label: "Empréstimo e Financiamento" },
  { value: "investments", label: "Investimentos" },
];

const meta: Meta<typeof SelectComponent> = {
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
}

type Story = StoryObj<SelectIProps>;

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


export default meta;