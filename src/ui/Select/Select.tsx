import React, { type ComponentProps } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { cx } from "../../../styled-system/css";
import {
  containerStyles,
  labelStyles,
  listOptionsStyles,
  optionsStyles,
  selectContentClosedStyles,
  selectContentOpenStyles,
  selectContentStyles,
  selectTitleClosedStyles,
  selectTitleContainerStyles,
  selectTitleOpenStyles
} from "./Select.styles"
import type { SelectIOption, SelectIProps } from "../../interface/select.interface";




export function Select({ 
  options, 
  value, 
  onChange, 
  placeholder = "Selecione...",
}: SelectIProps) {
  const [openSelect, setOpenSelect] = React.useState(false);
  const [highlightedIndex, setHighlightedIndex] = React.useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const labelId = React.useId();
  const listboxId = React.useId();

  React.useEffect(() => {
    function handler(event: MouseEvent) {
      if(containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    }
    window.addEventListener("mousedown", handler);

    return () => window.removeEventListener("mousedown", handler);
  }, []);

  function selectOptions(option: SelectIOption) {
    if(option.value !== value) {
      onChange(option.value);
    }
    setOpenSelect(false);
    triggerRef.current?.focus();
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    switch(event.key) {
      case "Enter":
      case " ":
        event.preventDefault();
        if(openSelect) {
          selectOptions(options[highlightedIndex]);
        } else {
          setOpenSelect(true);
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
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      className={cx(containerStyles)}
    >
      <div 
        onClick={() => setOpenSelect(!openSelect)} 
        ref={triggerRef}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={openSelect}
        aria-controls={listboxId}
        aria-labelledby={labelId}
        className={cx(
          selectTitleContainerStyles,
          openSelect ? selectTitleOpenStyles : selectTitleClosedStyles
        )}
      >
        <label id={labelId} className={labelStyles}>
          {selectedOption ? selectedOption.label : placeholder}
        </label>
        {openSelect ? 
          <span>
            <TiArrowSortedUp size={28} color="#47A138"/>
          </span>
          :
          <span>
            <TiArrowSortedDown size={28} color="#47A138"/>
          </span>
        }
      </div>

      <div 
        id={listboxId}
        role="listbox"
        aria-labelledby={labelId}
        aria-activedescendant={`option-${value}-${highlightedIndex}`}
        className={cx(
          selectContentStyles,
          openSelect ? selectContentOpenStyles : selectContentClosedStyles
        )}
      >
        <ul className={listOptionsStyles}>
          {options.map((option, index) => (
            <li 
              key={option.value}
              id={`option-${value}-${index}`}
              role="option"
              aria-selected={value === option.value}
              data-highlighted={highlightedIndex === index}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => selectOptions(option)}
              className={optionsStyles}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export type SelectProps = ComponentProps<typeof Select>;