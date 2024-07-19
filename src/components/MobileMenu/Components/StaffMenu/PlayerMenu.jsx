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
  Close as CloseIcon,
} from '@styled-icons/material-outlined';

import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { theme } from '../../../../styles/theme';

export function StaffMenu() {
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
        path="opportunities"
        color={theme.colors.white}
        hovercolor={theme.colors.primary}
      >
        <ViewCarouselIcon />
        Oportunidades

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

StaffMenu.propTypes = {

};
