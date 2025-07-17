import { styled } from "@stitches/react";
import React, { ComponentProps } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";


const Container = styled('div', {
  width: '100%',
  position: 'relative',
  border: '1px solid $green500',
  borderRadius: '$md',
})

const SelectTitleContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '$4',
  
  borderRadius: '$md',
  cursor: 'pointer',

  variants: {
    isOpen: {
      true: {
        borderBottom: '1px solid $green500',
      },
      false: {
        borderBottom: 'none',
      }
    }
  }
})

const Label = styled('label', {

  pointerEvents: 'none', 
})

const SelectContent = styled('div', {
  width: '100%',

  variants: {
    isOpen: {
      true: {
        display: 'block'
      },
      false: {
        display: 'none'
      }
    }
  }
})

const ListOptions = styled('ul', {
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  padding: '$4 0',
})

const Options = styled('li', {
  listStyle: 'none',
  padding: '$4 0',
  cursor: 'pointer',

  '&:hover': {
    color: '$gray800',
    background: '$green200',
    fontWeight: '$bold'
  },
})


export function Select() {
  const [openSelect, setOpenSelect] = React.useState(false)
  const listOptions = [
    'Câmbio de Moeda',
    'DOC/TED',
    'Empréstimo e Financiamento'
  ]

  function openCloseSelect() {

    setOpenSelect(!openSelect)
  }

  return (
    <Container>
      <SelectTitleContainer onClick={openCloseSelect} isOpen={openSelect}>
        <Label htmlFor="">Selecione o tipo de transação</Label>
        {openSelect ? 
          <span>
            <TiArrowSortedUp size={28} color="#47A138"/>
          </span>
          :
          <span>
            <TiArrowSortedDown size={28} color="#47A138"/>
          </span>
        }
      </SelectTitleContainer>

      <SelectContent isOpen={openSelect}>
        <ListOptions>
          {listOptions.map((options) => (
            <Options key={options}>
              {options}
            </Options>
          ))}
        </ListOptions>
      </SelectContent>
    </Container>
  )
}

export type SelectProps = ComponentProps<typeof Select>