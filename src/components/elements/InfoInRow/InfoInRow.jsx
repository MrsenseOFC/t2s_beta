import Prop from 'prop-types';
import React from 'react';
import * as Styled from './InfoInRow-Styles';

export function InfoInRow({ infotitle, info, uppercase = false }) {
  return (
    <Styled.InfoInRowElement uppercase={uppercase ? 'uppercase' : 'none'}>
      <Styled.InfoTitle>{infotitle}</Styled.InfoTitle>
      <Styled.Info>{info}</Styled.Info>
    </Styled.InfoInRowElement>
  );
}

InfoInRow.propTypes = {
  infotitle: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]).isRequired,

  info: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]).isRequired,

  uppercase: Prop.bool,

};
