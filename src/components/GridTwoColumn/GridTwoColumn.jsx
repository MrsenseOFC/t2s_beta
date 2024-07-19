import Prop from 'prop-types';
import React from 'react';
import * as Styled from './GridTwoColumn-Styles';

export function GridTwoColumn({ children }) {
  return (
    <Styled.GridTwoColumnContainer>
      {children}
    </Styled.GridTwoColumnContainer>
  );
}

GridTwoColumn.propTypes = {
  children: Prop.node.isRequired,
};
