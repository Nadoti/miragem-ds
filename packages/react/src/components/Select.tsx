import { styled } from "@stitches/react";
import React, { ComponentProps } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const Container = styled("div", {
  width: "max-content",
  position: "relative",
  border: "1px solid $green500",
  borderRadius: "$md",

  variants: {
    fullWidth: {
      true: {
        width: "100%"
      }
    }
  }
})

const SelectTitleContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$4",
  borderRadius: "$md",
  cursor: "pointer",

  variants: {
    isOpen: {
      true: {
        borderBottom: "1px solid $green500",
      },
      false: {
        borderBottom: "none",
      }
    },

    
  }
})

const Label = styled("label", {
  pointerEvents: "none", 
})

const SelectContent = styled("div", {

  variants: {
    isOpen: {
      true: {
        display: "block"
      },
      false: {
        display: "none"
      }
    }
  }
})

const ListOptions = styled("ul", {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  padding: "$4 0",
})

const Options = styled("li", {
  listStyle: "none",
  padding: "$4 $2",
  cursor: "pointer",

  "&:hover": {
    color: "$gray800",
    background: "$green200",
    fontWeight: "$bold"
  },
})

export interface SelectIOption {
  label: string;
  value: string;
};

export interface SelectIProps {
  label: string;
  options: SelectIOption[];
  value?: string| null
  onChange: (value: string) => void;
  placeholder: string;
  fullWidth: boolean;
}

export function Select({ 
  label,
  options, 
  value, 
  onChange, 
  placeholder = "Selecione...", 
  fullWidth 
}: SelectIProps) {
  const [openSelect, setOpenSelect] = React.useState(false)
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null)
  const triggerRef = React.useRef<HTMLDivElement>(null)
  const labelId = React.useId();
  const listboxId = React.useId();

  React.useEffect(() => {
    function handler(event: MouseEvent) {
      if(containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    }
    window.addEventListener("mousedown", handler)

    return () => window.removeEventListener("mousedown", handler)
  }, [])

  function selectOptions(option: SelectIOption) {
    if(option.value !== value) {
      onChange(option.value)
    }
    setOpenSelect(false)
    triggerRef.current?.focus()
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    switch(event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        if(openSelect) {
          selectOptions(options[highlightedIndex]);
        } else {
          setOpenSelect(true)
        }
        break;
      case "ArrowUp":
      case "ArrowDown": {
        event.preventDefault();
        if(!openSelect) {
          setOpenSelect(true);
          return;
        }
        const index = highlightedIndex + (event.key === "ArrowDown" ? 1 : -1);
        if(index >= 0 && index < options.length) {
          setHighlightedIndex(index);
        }
        break;
      }

      case "Escape":
        event.preventDefault();
        setOpenSelect(false);
        triggerRef.current?.focus();
        break;
      
      case "Tab":
        setOpenSelect(false);
        break;
    }
  }

  const selectedOption = options.find((o) => o.value === value);

  return (
    <Container
      ref={containerRef}
      onKeyDown={handleKeyDown}
      fullWidth={fullWidth}
    >
      <SelectTitleContainer 
        onClick={() => setOpenSelect(!openSelect)} 
        isOpen={openSelect} 
        ref={triggerRef}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={openSelect}
        aria-controls={listboxId}
        aria-labelledby={labelId}
      >
        <Label id={labelId}>{selectedOption ? selectedOption.label : placeholder}</Label>
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

      <SelectContent isOpen={openSelect}
        id={listboxId}
        role="listbox"
        aria-labelledby={labelId}
        aria-activedescendant={`option-${value}-${highlightedIndex}`}
      >
        <ListOptions>
          {options.map((option, index) => (
            <Options 
              key={option.value}
              id={`option-${value}-${index}`}
              role="option"
              aria-selected={value === option.value}
              data-highlihted={highlightedIndex === index}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => selectOptions(option)}
            >
              {option.label}
            </Options>
          ))}
        </ListOptions>
      </SelectContent>
    </Container>
  )
}

export type SelectProps = ComponentProps<typeof Select>