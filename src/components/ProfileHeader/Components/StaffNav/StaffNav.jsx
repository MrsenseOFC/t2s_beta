import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './StaffNav-Styles';

import { theme } from '../../../../styles/theme';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';

export function StaffNav() {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Styled.StaffNav>
        <StyledLink
          active={activeLink === '/staff-dashboard'}
          path=""
          text="Home"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/profile'}
          path="profile"
          text="Perfil"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/opportunities'}
          path="opportunities"
          text="Oportunidades"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/scouts'}
          path="scouts"
          text="Scouts"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/clubs'}
          path="clubs"
          text="Clubes"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/favorites'}
          path="favorites"
          text="Favoritos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

        <StyledLink
          active={activeLink === '/staff-dashboard/events'}
          path="events"
          text="Eventos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/contacts'}
          path="contacts"
          text="Contatos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />

      </Styled.StaffNav>

      <Styled.StaffNav>

        <StyledLink
          active={activeLink === '/staff-dashboard/friends'}
          path="friends"
          text="Amigos"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/store'}
          path="store"
          text="Loja"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/my-affiliates'}
          path="my-affiliates"
          text="Meus afiliados"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
        <StyledLink
          active={activeLink === '/staff-dashboard/s2t+'}
          path="s2t+"
          text="S2T+"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
      </Styled.StaffNav>
    </>
  );
}

StaffNav.propTypes = {
};
