import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Button-Styles';
import { StyledLink } from '../StyledLink/StyledLink';
import { theme } from '../../../styles/theme';

export function Button({
  onclick, gradient, active, path, text, size = theme.sizes.small, textcolor = theme.colors.white, texthover = '', bgcolor = theme.colors.black, bghover = '', border = theme.colors.black, borderhover = '',
}) {
  const ButtonElement = (
    <Styled.ButtonElement
      textcolor={textcolor}
      texthover={texthover}
      bgcolor={bgcolor}
      bghover={bghover}
      border={border}
      size={size}
      borderhover={borderhover}
      onClick={onclick}
      active={active ? 'active' : undefined}
      gradient={gradient ? 'gradient' : undefined}
    >
      {text}
    </Styled.ButtonElement>
  );

  return path ? <StyledLink path={path}>{ButtonElement}</StyledLink> : ButtonElement;
}

Button.propTypes = {
  onclick: Prop.func,
  path: Prop.string,
  text: Prop.string,
  size: Prop.string,
  textcolor: Prop.string,
  texthover: Prop.string,
  bgcolor: Prop.string,
  bghover: Prop.string,
  border: Prop.string,
  borderhover: Prop.string,
  active: Prop.bool,
  gradient: Prop.bool,
};
