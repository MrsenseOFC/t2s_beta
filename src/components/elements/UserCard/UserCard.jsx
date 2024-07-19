import Prop from 'prop-types';
import React from 'react';
import * as Styled from './UserCard-Styles';
import { CenterColumn } from '../../CenterColumn/CenterColumn';
import { InfoInRow } from '../InfoInRow/InfoInRow';
import { Subtitle } from '../Subtitle/Subtitle';
import { StyledLink } from '../StyledLink/StyledLink';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

export function UserCard({
  path, profileimage, position, age, bestleg, name, weight, height, category, favorite,
}) {
  return (
    <Styled.UserCardElement>

      {favorite && <FavoriteIcon />}

      <StyledLink path={path}>

        <Styled.ProfileImage src={profileimage} alt="Imagem de perfil do usuário" />

        <Styled.ProfileInfo>
          <CenterColumn>
            <InfoInRow infotitle="Posição" info={position} />
            <InfoInRow infotitle="Idade" info={`${age} Anos`} />
            <InfoInRow infotitle="Melhor perna" info={bestleg} />
          </CenterColumn>

          <Subtitle text={name} uppercase />

          <CenterColumn>

            <InfoInRow
              infotitle="Peso"
              info={`${weight} KG`}
            />
            <InfoInRow infotitle="Altura" info={`${height} M`} />
            <InfoInRow infotitle="Categoria" info={category} />

          </CenterColumn>

        </Styled.ProfileInfo>

      </StyledLink>

    </Styled.UserCardElement>
  );
}

UserCard.propTypes = {
  path: Prop.string,
  profileimage: Prop.string,
  position: Prop.string,
  age: Prop.number,
  bestleg: Prop.string,
  name: Prop.string,
  weight: Prop.number,
  height: Prop.number,
  category: Prop.string,
  favorite: Prop.bool,
};
