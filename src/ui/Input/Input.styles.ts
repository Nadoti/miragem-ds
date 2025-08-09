import { css, cva } from "../../../styled-system/css";


export const containerStyles = css({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  boxSizing: "border-box"
})

export const labelStyles = css({
 
})

export const inputStyles = cva({
  base: {
    boxSizing: "border-box",
    all: "unset",
    width: '100%',
    fontSize: 'md',
    fontFamily: 'default',
    paddingX: '4',
    color: 'gray800',
    backgroundColor: 'transparent',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    
    '&:focus': {
      borderColor: 'blue500',
      boxShadow: '0 0 0 2px token(colors.blue300)',
    },
    
    '&::placeholder': {
      color: 'gray100',
    },
  },
  
  variants: {
    variant: {
      default: {
        border: '1px solid token(colors.blue600)',
        color: 'gray800',
        borderRadius: 'md',
        paddingY: "4"
      },
      line: {
        border: 'none',
        borderBottom: '1px solid token(colors.green500)',
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'left',
        borderRadius: '0',
        paddingY: '0',
        paddingX: '4',
        paddingBottom: '2'
      },
    },
    
    disabled: {
      true: {
        backgroundColor: 'gray100',
        color: 'gray600',
        borderColor: 'gray200',
        cursor: 'not-allowed',
        
        '&::placeholder': {
          color: 'gray400',
        }
      },
    }
  },
  
  defaultVariants: {
    variant: 'default',
  }
});