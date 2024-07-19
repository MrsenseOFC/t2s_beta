import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Text-Styles';
import { theme } from '../../../styles/theme';

export function Text({
  text, uppercase, color = theme.colors.white, size = theme.sizes.medium,
}) {
  return (
    <Styled.TextElement uppercase={uppercase ? 'uppercase' : 'none'} color={color} size={size}>
      {text}
    </Styled.TextElement>
  );
}

Text.propTypes = {
  text: Prop.string.isRequired,
  color: Prop.string,
  uppercase: Prop.bool,
  size: Prop.string,
};
