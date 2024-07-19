import Prop from 'prop-types';
import React from 'react';
import * as Styled from './GridLayout-Styles';

export function GridLayout({ children }) {
  return (
    <Styled.GridLayoutContainer>
      {children}
    </Styled.GridLayoutContainer>
  );
}

GridLayout.propTypes = {
  children: Prop.node.isRequired,
};
