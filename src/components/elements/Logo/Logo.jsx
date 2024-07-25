import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Logo-Styles';

export function Logo({ logo, size, name }) {
  return (
    <Styled.LogoElement size={size}>
      <img src={logo} alt={name} />
    </Styled.LogoElement>
  );
}

Logo.propTypes = {
  size: Prop.string,
  name: Prop.string,
  logo: Prop.string.isRequired,
};
