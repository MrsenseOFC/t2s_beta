import Prop from 'prop-types';
import React from 'react';
import * as Styled from './CenterColumn-Styles';

export function CenterColumn({ children }) {
  return (
    <Styled.CenterColumnContainer>
      {children}
    </Styled.CenterColumnContainer>
  );
}

CenterColumn.propTypes = {
  children: Prop.node.isRequired,
};
