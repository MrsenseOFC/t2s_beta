import Prop from 'prop-types';
import React from 'react';
import * as Styled from './StyledLink-Styles';

export function StyledLink({
  newtab = false, color = 'white', hovercolor = 'lightgray', text = '', path, children = '', active, onclick,
}) {
  return (
    <Styled.LinkContainer onClick={onclick} to={path} color={color} hovercolor={hovercolor} active={active ? 'active' : undefined} target={newtab ? '_blank' : '_self'}>
      {text}
      {children}
    </Styled.LinkContainer>
  );
}

StyledLink.propTypes = {
  text: Prop.string,
  newtab: Prop.bool,
  path: Prop.string,
  color: Prop.string,
  hovercolor: Prop.string,
  children: Prop.node,
  active: Prop.bool,
  onclick: Prop.func,
};
