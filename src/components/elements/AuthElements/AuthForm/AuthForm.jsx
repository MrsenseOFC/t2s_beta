import PropTypes from 'prop-types';
import React from 'react';
import * as Styled from './AuthForm-Styles';

export function AuthForm({ children, onSubmit }) {
  return (
    <Styled.AuthFormContainer onSubmit={onSubmit}>
      {children}
    </Styled.AuthFormContainer>
  );
}

AuthForm.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
