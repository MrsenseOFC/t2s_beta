import Prop from 'prop-types';
import React from 'react';
import * as Styled from './MobileMenu-Styles';

export function MobileMenu({ onclick, children }) {
  return (
    <Styled.MobileMenuElement onClick={onclick}>
      {children}
    </Styled.MobileMenuElement>
  );
}
MobileMenu.propTypes = {
  children: Prop.node.isRequired,
  onclick: Prop.func,
};
