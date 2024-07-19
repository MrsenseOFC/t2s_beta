import Prop from 'prop-types';
import React from 'react';
import * as Styled from './IconDiv-Styles';
import { theme } from '../../../styles/theme';

export function IconDiv({
  children, active, activecolor = theme.colors.primary, onclick, name = 'Ícone', hovercolor = '', color = theme.colors.white,
}) {
  return (
    <Styled.IconContainer
      onClick={onclick}
      title={name}
      aria-label={name}
      hovercolor={hovercolor}
      active={active ? 'active' : undefined}
      activecolor={activecolor}
      color={color}
    >
      {children}
    </Styled.IconContainer>
  );
}

IconDiv.propTypes = {
  children: Prop.node.isRequired,
  onclick: Prop.func,
  active: Prop.bool,
  name: Prop.string,
  hovercolor: Prop.string,
  activecolor: Prop.string,
  color: Prop.string,
};
