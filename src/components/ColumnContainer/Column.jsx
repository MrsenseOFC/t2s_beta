import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Column-Styles';

export function Column({ children, color }) {
  return (
    <Styled.ColumnContainer color={color}>
      {children}
    </Styled.ColumnContainer>
  );
}

Column.propTypes = {
  children: Prop.node.isRequired,
};
