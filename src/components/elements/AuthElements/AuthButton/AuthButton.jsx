import PropTypes from 'prop-types';
import React from 'react';
import * as Styled from './AuthButton-Styles';

export function AuthButton({
  name, id, value,
}) {
  return (
    <Styled.AuthButtonElement
      type="submit"
      data-wait="Please wait..."
      name={name}
      id={id}
      value={value}
    />
  );
}

AuthButton.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
