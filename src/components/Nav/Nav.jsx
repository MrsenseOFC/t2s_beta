import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Nav-Styles';

export function Nav({ children }) {
  return (
    <Styled.NavContainer>
      {children}
    </Styled.NavContainer>
  );
}

Nav.propTypes = {
  children: Prop.node.isRequired,
};
