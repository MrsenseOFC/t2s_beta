import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Logo-Styles';

export function Logo({ logo, size }) {
  return (
    <Styled.LogoElement size={size}>
      <img src={logo} alt="S2T Logo" />
    </Styled.LogoElement>
  );
}

Logo.propTypes = {
  size: Prop.string,
  logo: Prop.string.isRequired,
};
