import Prop from 'prop-types';
import React from 'react';
import * as Styled from './GridOneColumn-Styles';

export function GridOneColumn({ children }) {
  return (
    <Styled.GridOneColumnContainer>
      {children}
    </Styled.GridOneColumnContainer>
  );
}

GridOneColumn.propTypes = {
  children: Prop.node.isRequired,
};
