import PropTypes from 'prop-types';
import React from 'react';
import * as Styled from './AuthInput-Styles';

export function AuthInput({
  type,
  name,
  id,
  onChange,
  value,
  placeholder = '',
  title = '',
  autoComplete = '',
  required = false,
}) {
  return (
    <Styled.AuthInputContainer>
      {title}
      {' '}
      {required && '(Obrigatório)'}
      <Styled.AuthInputElement
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
        required={required}
      />
    </Styled.AuthInputContainer>
  );
}

AuthInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
