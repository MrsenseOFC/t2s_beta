import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './UniversityNav-Styles';

import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';
import { Nav } from '../../../Nav/Nav';

export function UniversityNav() {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Styled.UniversityNav>
        <StyledLink
          active={activeLink === '/university-dashboard'}
          path=""
          text="Home"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/university-dashboard/profile'}
          path="profile"
          text="Perfil"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/my-squad'}
          path="my-squad"
          text="Meu plantel"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/opportunities'}
          path="opportunities"
          text="Oportunidades"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/my-opportunities'}
          path="my-opportunities"
          text="Minhas oportunidades"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/scouts'}
          path="scouts"
          text="Scouts"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/clubs'}
          path="clubs"
          text="Clubes"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
      </Styled.UniversityNav>

      <Styled.UniversityNav>
        <StyledLink
          active={activeLink === '/university-dashboard/players'}
          path="players"
          text="Jogadores"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/events'}
          path="events"
          text="Eventos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/favorites'}
          path="favorites"
          text="Favoritos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/contacts'}
          path="contacts"
          text="Contatos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/friends'}
          path="friends"
          text="Amigos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/store'}
          path="store"
          text="Loja"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/my-affiliates'}
          path="my-affiliates"
          text="Meus afiliados"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/university-dashboard/s2t+'}
          path="s2t+"
          text="S2T+"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

      </Styled.UniversityNav>
    </>
  );
}

UniversityNav.propTypes = {
};
