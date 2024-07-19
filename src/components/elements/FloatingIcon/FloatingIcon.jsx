import Prop from 'prop-types';
import React from 'react';
import * as Styled from './FloatingIcon-Styles';

export function FloatingIcon({ children, onclick, name = 'Ícone' }) {
  return (
    <Styled.FloatingIconElement onClick={onclick} aria-label={name} title={name}>
      {children}
    </Styled.FloatingIconElement>
  );
}

FloatingIcon.propTypes = {
  children: Prop.node.isRequired,
  name: Prop.string,
  onclick: Prop.func,
};
