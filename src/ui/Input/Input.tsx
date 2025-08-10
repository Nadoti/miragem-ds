import { containerStyles, inputStyles, labelStyles } from "./Input.styles"
import { cx } from "../../../styled-system/css";
import type { InputProps } from "../../interface/input.interface";



export function Input({ label, variant = "default", disabled = false, type = "text", ...props}: InputProps) {
  return (
    <span className={cx(containerStyles)}>
      <label className={cx(labelStyles)}> {label} </label>
      <input className={inputStyles({ variant, disabled, type })} {...props} />
    </span>
  );
}