import type { ComponentProps } from "react";

export type ICheckboxProps = ComponentProps<'input'> & {
  label: string;
};