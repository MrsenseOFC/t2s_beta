import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthCheckbox-Styles';

export function AuthCheckbox({
  id, value, text = '', checked,
}) {
  return (
    <Styled.AuthCheckboxContainer htmlFor={id}>
      <Styled.AuthCheckboxInput type="checkbox" name={id} id={id} value={value} checked={checked} />
      {text}
    </Styled.AuthCheckboxContainer>
  );
}

AuthCheckbox.propTypes = {
  id: Prop.string.isRequired,
  value: Prop.string.isRequired,
  text: Prop.string,
  checked: Prop.bool,
};
