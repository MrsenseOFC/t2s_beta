import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './UniversityFavorites-Style';
import { S2tContext } from '../../../../../contexts/s2tContext/S2tContext';
import { ProfileSlide } from '../../../../../components/elements/ProfileSlide/ProfileSlide';
import { GridPlayers } from '../../../../../components/elements/GridPlayers/GridPlayers';

export function ClubFavorites() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.UniversityFavoritesContainer>

      <GridPlayers title="Jogadores favoritos" items={s2tState.users.players} publicview />

      <ProfileSlide items={s2tState.videos.trending} title="Vídeos em alta" publicview />

      <ProfileSlide items={s2tState.videos.trending} title="Meus vídeos favoritos" publicview />

    </Styled.UniversityFavoritesContainer>
  );
}
