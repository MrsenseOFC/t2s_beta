import Prop from 'prop-types';
import React from 'react';
import * as Styled from './RankCard-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { Text } from '../Text/Text';
import { StyledLink } from '../StyledLink/StyledLink';

export function RankCard({
  name, position, imagesrc, path,
}) {
  const normalizedPosition = position.toString();

  return (
    <Styled.RankCardContainer>

      <StyledLink path={path}>

        <Styled.RankPosition>
          <Text text={normalizedPosition} uppercase />
        </Styled.RankPosition>

        <Styled.RankImage src={imagesrc} alt="Foto de perfil" />

        <Styled.RankName>
          <Text text={name} uppercase />
        </Styled.RankName>

      </StyledLink>

    </Styled.RankCardContainer>
  );
}

RankCard.propTypes = {
  name: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]),
  position: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]),
  path: Prop.string,
  imagesrc: Prop.string,
};
