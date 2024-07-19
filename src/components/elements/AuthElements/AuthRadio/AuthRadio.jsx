import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthRadio-Styles';

export function AuthRadio({
  title, options, groupname, required,
}) {
  return (
    <Styled.AuthRadioContainer>
      <Styled.AuthRadioTitle>
        {title}
        {' '}
        (Obrigatório)
      </Styled.AuthRadioTitle>
      {options.map((option) => (
        <Styled.AuthRadioElement key={option.value}>
          <Styled.AuthRadioInput type="radio" name={groupname} id={option.value} value={option.value} required={required} />
          <Styled.AuthRadioLabel htmlFor={option.value}>{option.label}</Styled.AuthRadioLabel>
        </Styled.AuthRadioElement>
      ))}

    </Styled.AuthRadioContainer>
  );
}

AuthRadio.propTypes = {
  options: Prop.arrayOf(
    Prop.shape({
      value: Prop.string.isRequired,
      label: Prop.string.isRequired,
    }),
  ).isRequired,
  title: Prop.string.isRequired,
  groupname: Prop.string.isRequired,
  required: Prop.bool,
};
