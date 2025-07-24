import { ComponentProps } from "react";
import { styled } from "../styles";

// Defina os tipos explicitamente para cada componente estilizado
type CheckboxContentStyledComponent = ReturnType<typeof styled>;
type CheckboxStyleStyledComponent = ReturnType<typeof styled>;
type LabelStyledComponent = ReturnType<typeof styled>;

const CheckboxContent: CheckboxContentStyledComponent = styled('span', {
  display: 'inline-block',
  width: '25px',
  height: '25px',
  backgroundColor: '$loContrast',
  borderRadius: '$sm',
  position: 'relative',
  transition: 'all 0.2s',
  marginRight: "$2",
  border: '2px solid $green500',
  '&::after': {
    content: '',
    position: 'absolute',
    display: 'none',
    left: '8px',
    top: '4px',
    width: '5px',
    height: '10px',
    border: 'solid $white',
    borderWidth: '0 3px 3px 0',
    transform: 'rotate(45deg)',
  },
});

const CheckboxStyle: CheckboxStyleStyledComponent = styled('input', {
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
});

const Label: LabelStyledComponent = styled('label', {
  width: "max-content",
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  cursor: 'pointer',
  userSelect: 'none',
  fontSize: '$md',
  color: '$hiContrast',
  [`& ${CheckboxStyle}:checked + ${CheckboxContent}`]: {
    backgroundColor: '$green500',
    borderColor: '$green500',
  },
  [`& ${CheckboxStyle}:checked + ${CheckboxContent}::after`]: {
    display: 'block',
  },
  [`& ${CheckboxStyle}:focus-visible + ${CheckboxContent}`]: {
    outline: '2px solid $blue500',
    outlineOffset: '2px',
  },
  [`& ${CheckboxStyle}:disabled + ${CheckboxContent}`]: {
    borderColor: '$gray300',
    backgroundColor: '$gray100',
  },
  [`& ${CheckboxStyle}:disabled ~ span`]: {
    color: '$gray500',
    cursor: 'not-allowed',
  },
});

type ICheckboxProps = ComponentProps<'input'> & {
  label: string;
};

export function Checkbox({ label, ...props }: ICheckboxProps) {
  return (
    <Label>
      <CheckboxStyle type="checkbox" {...props} />
      <CheckboxContent />
      {label}
    </Label>
  );
}

export type CheckboxProps = ComponentProps<typeof Checkbox>;