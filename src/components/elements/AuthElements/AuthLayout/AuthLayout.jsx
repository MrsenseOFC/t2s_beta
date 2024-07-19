import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthLayout-Styles';

export function AuthLayout({ children, isopen }) {
  return (
    <Styled.AuthLayoutContainer isopen={isopen ? 'grid' : 'none'}>
      {children}
    </Styled.AuthLayoutContainer>
  );
}

AuthLayout.propTypes = {
  children: Prop.node.isRequired,
  isopen: Prop.bool.isRequired,
};
