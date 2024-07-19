import Prop from 'prop-types';
import React from 'react';
import * as Styled from './TextArea-Styles';

export function TextArea({
  placeholder = '', name = 'text-area', onchange, value,
}) {
  return (
    <Styled.TextAreaElement
      id={name}
      name={name}
      data-name={name}
      placeholder={placeholder}
      onChange={onchange}
      value={value}
      maxLength="5000"
    />
  );
}

TextArea.propTypes = {
  placeholder: Prop.string,
  name: Prop.string,
  value: Prop.string,
  onchange: Prop.func,
};
