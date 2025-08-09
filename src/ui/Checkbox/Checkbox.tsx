import type { ComponentProps } from "react";
import {
  checkboxContentStyles,
  checkboxInputStyles,
  labelStyles
} from "./Checkbox.styles"
import type { ICheckboxProps } from "../../interface/checkbox.interface";



export function Checkbox({ label, ...props }: ICheckboxProps) {
  return (
    <label className={labelStyles}>
      <input 
        type="checkbox" 
        className={checkboxInputStyles}
        {...props}
      />
      <span className={checkboxContentStyles} />
      <span>{label}</span>
    </label>
  );
}

export type CheckboxProps = ComponentProps<typeof Checkbox>;