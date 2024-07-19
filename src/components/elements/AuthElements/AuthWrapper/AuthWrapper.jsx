import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthWrapper-Styles';

export function AuthWrapper({ children }) {
  return (
    <Styled.AuthWrapper>
      {children}
    </Styled.AuthWrapper>
  );
}

AuthWrapper.propTypes = {
  children: Prop.node.isRequired,
};
