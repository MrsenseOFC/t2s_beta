import Prop from 'prop-types';
import React from 'react';
import * as Styled from './StandardHeader-Styles';

export function StandardHeader({ children }) {
  return (
    <Styled.StandardHeaderContainer>
      {children}
    </Styled.StandardHeaderContainer>
  );
}

StandardHeader.propTypes = {
  children: Prop.node.isRequired,
};
