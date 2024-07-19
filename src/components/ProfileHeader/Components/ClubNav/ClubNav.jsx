import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './ClubNav-Styles';

import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';
import { Nav } from '../../../Nav/Nav';

export function ClubNav() {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Styled.ClubNav>
        <StyledLink
          active={activeLink === '/club-dashboard'}
          path=""
          text="Home"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/club-dashboard/profile'}
          path="profile"
          text="Perfil"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/my-squad'}
          path="my-squad"
          text="Meu plantel"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/opportunities'}
          path="opportunities"
          text="Oportunidades"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/my-opportunities'}
          path="my-opportunities"
          text="Minhas oportunidades"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/scouts'}
          path="scouts"
          text="Scouts"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/clubs'}
          path="clubs"
          text="Clubes"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
      </Styled.ClubNav>

      <Styled.ClubNav>
        <StyledLink
          active={activeLink === '/club-dashboard/players'}
          path="players"
          text="Jogadores"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/events'}
          path="events"
          text="Eventos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/favorites'}
          path="favorites"
          text="Favoritos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/contacts'}
          path="contacts"
          text="Contatos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/friends'}
          path="friends"
          text="Amigos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/store'}
          path="store"
          text="Loja"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/my-affiliates'}
          path="my-affiliates"
          text="Meus afiliados"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/club-dashboard/s2t+'}
          path="s2t+"
          text="S2T+"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

      </Styled.ClubNav>
    </>
  );
}

ClubNav.propTypes = {
};
