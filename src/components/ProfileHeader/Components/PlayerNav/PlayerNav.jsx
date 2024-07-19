import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './PlayerNav-Styles';

import { theme } from '../../../../styles/theme';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';

export function PlayerNav() {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Styled.PlayerNav>
        <StyledLink
          active={activeLink === '/player-dashboard'}
          path=""
          text="Home"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/player-dashboard/profile'}
          path="profile"
          text="Perfil"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/player-dashboard/opportunities'}
          path="opportunities"
          text="Oportunidades"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/player-dashboard/scouts'}
          path="scouts"
          text="Scouts"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/player-dashboard/clubs'}
          path="clubs"
          text="Clubes"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/player-dashboard/favorites'}
          path="favorites"
          text="Favoritos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/player-dashboard/events'}
          path="events"
          text="Eventos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/player-dashboard/contacts'}
          path="contacts"
          text="Contatos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

      </Styled.PlayerNav>

      <Styled.PlayerNav>

        <StyledLink
          active={activeLink === '/player-dashboard/friends'}
          path="friends"
          text="Amigos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/player-dashboard/store'}
          path="store"
          text="Loja"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/player-dashboard/my-affiliates'}
          path="my-affiliates"
          text="Meus afiliados"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/player-dashboard/s2t+'}
          path="s2t+"
          text="S2T+"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

      </Styled.PlayerNav>
    </>
  );
}

PlayerNav.propTypes = {
};
