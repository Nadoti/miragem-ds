import type { InputHTMLAttributes } from "react";

export interface CurrencyInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  label?: string;
  value?: number;
  onChange?: (value: number | '') => void;
  placeholder?: string;
  disabled?: boolean;
  id?: string;
}