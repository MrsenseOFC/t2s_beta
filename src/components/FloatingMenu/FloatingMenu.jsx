import Prop from 'prop-types';
import React from 'react';
import * as Styled from './FloatingMenu-Styles';
import { Button } from '../elements/Button/Button';
import { theme } from '../../styles/theme';

export function FloatingMenu({ children, onclick }) {
  return (
    <Styled.FloatingMenuContainer onClick={onclick}>
      {children}
    </Styled.FloatingMenuContainer>
  );
}

FloatingMenu.propTypes = {
  children: Prop.node.isRequired,
  onclick: Prop.func,
};
