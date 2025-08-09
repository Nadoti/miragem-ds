import { css } from "../../../styled-system/css";

export const checkboxContentStyles = css({
  display: 'inline-block',
  width: '25px',
  height: '25px',
  backgroundColor: 'loContrast',
  borderRadius: 'sm',
  position: 'relative',
  transition: 'all 0.2s',
  marginRight: '2',
  border: '2px solid token(colors.green500)',
  
  '&::after': {
    content: '""',
    position: 'absolute',
    display: 'none',
    left: '8px',
    top: '4px',
    width: '5px',
    height: '10px',
    border: 'solid token(colors.white)',
    borderWidth: '0 3px 3px 0',
    transform: 'rotate(45deg)',
  },
});

export const checkboxInputStyles = css({
  position: 'absolute',
  opacity: 0,
  width: 0,
  height: 0,
});

export const labelStyles = css({
  width: "max-content",
  display: 'flex',
  alignItems: 'center',
  gap: '3',
  cursor: 'pointer',
  userSelect: 'none',
  fontSize: 'md',
  color: 'hiContrast',
  
  '& input:checked + span': {
    backgroundColor: 'green500',
    borderColor: 'green500',
  },
  
  '& input:checked + span::after': {
    display: 'block',
  },
  
  '& input:focus-visible + span': {
    outline: '2px solid token(colors.blue500)',
    outlineOffset: '2px',
  },
  
  '& input:disabled + span': {
    borderColor: 'gray300',
    backgroundColor: 'gray100',
  },
  
  '& input:disabled ~ span': {
    color: 'gray500',
    cursor: 'not-allowed',
  },
  
  '& input:disabled': {
    '& ~ *': {
      cursor: 'not-allowed',
    }
  }
});