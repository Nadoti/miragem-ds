import { styled } from "@stitches/react";
import { ComponentProps } from "react";



const Select = styled('select', {
  appearance: 'none',
  
  
})


export function Select1() {
  return (
    <Select>
      <option value="">Teste090000</option>
    </Select>
  )
}

export type SelectProps = ComponentProps<typeof Select>