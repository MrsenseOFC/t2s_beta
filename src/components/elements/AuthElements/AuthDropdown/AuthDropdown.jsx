import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { KeyboardArrowDown as ArrowDownIcon, KeyboardArrowUp as ArrowUpIcon } from '@styled-icons/material-outlined';
import * as Styled from './AuthDropdown-Styles';

export function AuthDropdown({
  options,
  placeholder,
  title,
  id,
  required = false,
  onDropdownChange,
  selectedvalue = '',
  otheroption = false,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownText, setDropdownText] = useState(
    options.find((option) => option.value === selectedvalue)?.text || '',
  );

  const other = { value: 'other', text: 'Outro' };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option) => {
    onDropdownChange(option.value);
    setDropdownText(option.text);
    setIsOpen(false); // Close dropdown after selection
  };

  const resetItem = () => {
    onDropdownChange('');
    setDropdownText('');
  };

  return (
    <Styled.AuthDropdownContainer id={id}>
      {title && (
        <Styled.DropdownTitle>
          {title}
          {' '}
          {required && '(Obrigatório)'}
        </Styled.DropdownTitle>
      )}

      <Styled.DropdownButton onClick={toggleDropdown} active={isOpen ? 'Active' : undefined}>
        {dropdownText || placeholder || 'Selecione'}
        {isOpen ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </Styled.DropdownButton>

      {isOpen && (
        <Styled.DropdownContent>
          {placeholder && (
            <Styled.DropdownItem onClick={resetItem}>
              {placeholder}
            </Styled.DropdownItem>
          )}

          {options.map((option) => (
            <Styled.DropdownItem
              onClick={() => handleItemClick(option)}
              key={option.value}
            >
              {option.text}
            </Styled.DropdownItem>
          ))}

          {otheroption && (
            <Styled.DropdownItem onClick={() => handleItemClick(other)}>
              {other.text}
            </Styled.DropdownItem>
          )}
        </Styled.DropdownContent>
      )}
    </Styled.AuthDropdownContainer>
  );
}

AuthDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  id: PropTypes.string.isRequired,
  selectedvalue: PropTypes.string,
  otheroption: PropTypes.bool,
  onDropdownChange: PropTypes.func.isRequired,
};

AuthDropdown.defaultProps = {
  placeholder: '',
  title: '',
  required: false,
  selectedvalue: '',
  otheroption: false,
};
