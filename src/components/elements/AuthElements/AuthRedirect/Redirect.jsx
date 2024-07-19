import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Redirect-Styles';
import { theme } from '../../../../styles/theme';
import { StyledLink } from '../../StyledLink/StyledLink';

export function AuthRedirect({ text, path, pathtext }) {
  return (
    <Styled.AuthRedirectElement>
      <p>{text}</p>
      <StyledLink
        path={path}
        text={pathtext}
        color={theme.colors.secondary}
        hovercolor={theme.colors.tertiary}
      />
    </Styled.AuthRedirectElement>
  );
}

AuthRedirect.propTypes = {
  text: Prop.string.isRequired,
  path: Prop.string.isRequired,
  pathtext: Prop.string.isRequired,
};
