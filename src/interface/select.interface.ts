export interface SelectIOption {
  label: string;
  value: string;
}

export interface SelectIProps {
  label: string;
  options: SelectIOption[];
  value?: string | null;
  onChange: (value: string) => void;
  placeholder: string;
  fullWidth: boolean;
}