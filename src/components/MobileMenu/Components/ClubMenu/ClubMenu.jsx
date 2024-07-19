import Prop from 'prop-types';
import React from 'react';

import {
  Home as HomeIcon,
  Group as GroupIcon,
  Person as PersonIcon,
  ViewCarousel as ViewCarouselIcon,
  Send as SendIcon,
  WorkOutline as WorkIcon,
  SportsSoccer as SportsSoccerIcon,
  FavoriteBorder as FavoriteIcon,
  Hail as EventsIcon,
  PlusOne as PlusIcon,
  Handshake as HandshakeIcon,
  LocalGroceryStore as StoreIcon,
  SafetyDivider as SquadIcon,
  Close as CloseIcon,
  PersonSearch as PersonSearchIcon,
} from '@styled-icons/material-outlined';

import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { theme } from '../../../../styles/theme';

export function ClubMenu() {
  return (
    <GridLayout>
      <StyledLink
        path=""
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <HomeIcon />
        Home
      </StyledLink>

      <StyledLink
        path="profile"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <PersonIcon />
        Perfil

      </StyledLink>

      <StyledLink
        path="my-squad"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <SquadIcon />
        Meu Plantel

      </StyledLink>

      <StyledLink
        path="opportunities"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <ViewCarouselIcon />
        Oportunidades

      </StyledLink>

      <StyledLink
        path="my-opportunities"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <HandshakeIcon />
        Minhas oportunidades

      </StyledLink>

      <StyledLink
        path="scouts"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <WorkIcon />
        Scouts

      </StyledLink>

      <StyledLink
        path="clubs"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <SportsSoccerIcon />
        Clubes

      </StyledLink>

      <StyledLink
        path="players"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <PersonSearchIcon />
        Jogadores

      </StyledLink>

      <StyledLink
        path="favorites"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <FavoriteIcon />
        Favoritos

      </StyledLink>

      <StyledLink
        path="events"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <EventsIcon />
        Eventos

      </StyledLink>

      <StyledLink
        path="contacts"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <SendIcon />
        Contatos

      </StyledLink>

      <StyledLink
        path="friends"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <GroupIcon />
        Amigos

      </StyledLink>

      <StyledLink
        path="store"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <StoreIcon />
        Loja

      </StyledLink>

      <StyledLink
        path="s2t+"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <PlusIcon />
        S2T+

      </StyledLink>

      <StyledLink
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <CloseIcon />

        Fechar

      </StyledLink>

    </GridLayout>
  );
}

ClubMenu.propTypes = {

};
