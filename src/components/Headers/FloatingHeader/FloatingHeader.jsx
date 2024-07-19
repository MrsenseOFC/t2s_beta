import Prop from 'prop-types';
import React from 'react';
import * as Styled from './FloatingHeader-Styles';

export function FloatingHeader({ children }) {
  return (
    <Styled.FloatingHeaderContainer>
      {children}
    </Styled.FloatingHeaderContainer>
  );
}

FloatingHeader.propTypes = {
  children: Prop.node.isRequired,
};
