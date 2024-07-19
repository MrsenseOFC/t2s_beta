import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Row-Styles.js';

export function Row({ children }) {
  return (
    <Styled.RowContainer>
      {children}
    </Styled.RowContainer>
  );
}

Row.propTypes = {
  children: Prop.node.isRequired,
};
