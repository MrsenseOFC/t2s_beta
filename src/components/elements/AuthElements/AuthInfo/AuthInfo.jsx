import Prop from 'prop-types';
import React from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './AuthInfo-Styles';

export function AuthInfo({ text }) {
  return (
    <Styled.AuthInfoContainer>
      <Styled.AuthInfoText>{text}</Styled.AuthInfoText>
      <CloseIcon />
    </Styled.AuthInfoContainer>
  );
}

AuthInfo.propTypes = {
  text: Prop.string.isRequired,
};
