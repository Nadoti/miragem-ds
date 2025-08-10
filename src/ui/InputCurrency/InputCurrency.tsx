import React, { useState, useEffect } from 'react';
import { containerStyles, currencySymbolStyles, inputStyles, inputWrapperStyles, labelStyles } from './Input.styles';
import type { CurrencyInputProps } from '../../interface/input-currency.interface';



export function CurrencyInput({ 
  label, 
  value, 
  onChange, 
  placeholder = "0,00",
  disabled = false,
  id,
  ...props 
}: CurrencyInputProps) {
  const [displayValue, setDisplayValue] = useState<string>('');

  const formatCurrency = (value: string | number): string => {
    if (!value || value === '') return '';
    const numbers = value.toString().replace(/\D/g, '');
    
    if (numbers === '') return '';
    const amount = parseFloat(numbers) / 100;
    
    return amount.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const parseValue = (formattedValue: string): number => {
    if (!formattedValue) return 0;
    
    const cleanValue = formattedValue
      .replace(/\./g, '')
      .replace(',', '.');
    
    return parseFloat(cleanValue) || 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const numbersOnly = inputValue.replace(/\D/g, '');
    
    if (numbersOnly === '') {
      setDisplayValue('');
      if (onChange) {
        onChange('');
      }
      return;
    }
    
    const formatted = formatCurrency(numbersOnly);
    setDisplayValue(formatted);
    
    const numericValue = parseValue(formatted);
    if (onChange) {
      onChange(numericValue);
    }
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      e.target.setSelectionRange(e.target.value.length, e.target.value.length);
    }, 0);
    
    if(props.onFocus){
      props.onFocus(e);
    }
  };

  useEffect(() => {
    if (value !== undefined && value !== parseValue(displayValue)) {
      setDisplayValue(formatCurrency(value * 100)); 
    }
  }, [value, displayValue]);

  return (
    <div className={containerStyles()}>
      {label && (
        <label 
          htmlFor={id}
          className={labelStyles({ disabled })}
        >
          {label}
        </label>
      )}
      
      <div className={inputWrapperStyles}>
        <span className={currencySymbolStyles({ disabled })}>
          R$
        </span>
        
        <input
          type="text"
          value={displayValue}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder={placeholder}
          disabled={disabled}
          inputMode="numeric"
          pattern="[0-9]*"
          autoComplete="off"
          spellCheck="false"
          aria-label={label ? `${label} em reais` : 'Valor em reais'}
          aria-describedby={id ? `${id}-help` : undefined}
          id={id}
          className={inputStyles({ disabled })}
          {...props}
        />
      </div>
      
      {/* Texto de ajuda para acessibilidade - descomentado se necessário */}
      {/* {id && (
        <div id={`${id}-help`} className={helpTextStyles}>
          Digite apenas números. Exemplo: 10000 será formatado como 10.000,00
        </div>
      )} */}
    </div>
  );
}