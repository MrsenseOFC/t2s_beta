import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Footer-Styles';

export function Footer({ children }) {
  return (
    <Styled.FooterContainer>
      {children}
    </Styled.FooterContainer>
  );
}

Footer.propTypes = {
  children: Prop.node.isRequired,
};
