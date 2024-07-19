import Prop from 'prop-types';
import React, { useState } from 'react';
import { Favorite } from '@styled-icons/material-outlined/Favorite';

import * as Styled from './FavoriteIcon-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';

export function FavoriteIcon({ isfavorite, id }) {
  const [favorite, setFavorite] = useState(isfavorite);

  const handleFavoriteClick = (event) => {
    event.stopPropagation();

    setFavorite(!favorite);
    // console.log(`A foto com o ID ${id} é favorita? ${favorite}`);

    // Necessário lógica para adicionar ou remover a foto clicada a lista de favoritos do backend
  };

  return (
    <Styled.FavoriteIconElement isfavorite={favorite ? 'favorite' : undefined}>
      <IconDiv
        name={favorite ? 'Desfavoritar' : 'Favoritar'}
        hovercolor={favorite ? theme.colors.red : theme.colors.white}
        onclick={handleFavoriteClick}
      >
        <Favorite />
      </IconDiv>
    </Styled.FavoriteIconElement>
  );
}

FavoriteIcon.propTypes = {
  id: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]),
  isfavorite: Prop.bool,
};
