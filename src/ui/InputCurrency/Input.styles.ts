import { css, cva } from "../../../styled-system/css";

export const containerStyles = cva({
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4'
  }
});

export const labelStyles = cva({
  base: {
    fontSize: 'md',
    fontWeight: 'medium',
    color: 'gray100',
  },
  variants: {
    disabled: {
      true: {
        cursor: 'not-allowed'
      }
    }
  }
});

export const inputWrapperStyles = css({
  position: 'relative',
  display: 'inline-block',
});

export const currencySymbolStyles = cva({
  base: {
    position: 'absolute',
    left: '3%',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: 'md',
    pointerEvents: 'none',
    zIndex: '1',
    color: 'gray500',
  },
  variants: {
    disabled: {
      true: {
        color: 'gray400'
      }
    }
  }
});

export const inputStyles = cva({
  base: {
    width: 'full',
    paddingTop: '4',
    paddingRight: '2',
    paddingBottom: '4',
    paddingLeft: '12',
    fontSize: 'md',
    border: '2px solid',
    borderColor: 'blue600',
    borderRadius: 'md',
    outline: 'none',
    transition: 'all 0.2s',
    backgroundColor: 'white',
    color: 'gray900',
    textAlign: "center",
    cursor: 'text',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    
    _focus: {
      borderColor: 'blue500',
      boxShadow: '0 0 0 3px token(colors.blue.500/10)'
    },
    
    _placeholder: {
      color: 'gray400'
    }
  },
  variants: {
    disabled: {
      true: {
        backgroundColor: 'gray.50',
        color: 'gray400',
        cursor: 'not-allowed',
        
        _focus: {
          borderColor: 'gray300',
          boxShadow: 'none'
        }
      }
    }
  }
});

// export const helpTextStyles = css({
//   fontSize: 'xs',
//   color: 'gray.500',
//   mt: '1'
// });