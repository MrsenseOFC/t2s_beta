import Prop from 'prop-types';
import React from 'react';
import * as Styled from './MobileNav-Styles';

export function MobileNav({ children }) {
  return (
    <Styled.MobileNavContainer>
      {children}
    </Styled.MobileNavContainer>
  );
}

MobileNav.propTypes = {
  children: Prop.node.isRequired,
};
