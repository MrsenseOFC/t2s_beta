import React from 'react';
import Prop from 'prop-types';
import * as Styled from './AuthOptions-Styles';
import { theme } from '../../../../styles/theme';
import { StyledLink } from '../../StyledLink/StyledLink';
import { AuthCheckbox } from '../AuthCheckbox/AuthCheckbox';

export function AuthOptions({
  checkboxtext, path, pathtext, checkboxid,
}) {
  return (
    <Styled.AuthOptionsContainer>

      <AuthCheckbox id={checkboxid} value={checkboxid} text={checkboxtext} />

      <StyledLink
        path={path}
        text={pathtext}
        color={theme.colors.secondary}
        hovercolor={theme.colors.tertiary}
      />
    </Styled.AuthOptionsContainer>
  );
}

AuthOptions.propTypes = {
  checkboxtext: Prop.string.isRequired,
  checkboxid: Prop.string.isRequired,
  path: Prop.string.isRequired,
  pathtext: Prop.string.isRequired,
};
