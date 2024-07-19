import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import * as Styled from './PublicNav-Styles';
import { StyledLink } from '../../../elements/StyledLink/StyledLink';
import { theme } from '../../../../styles/theme';

export function PublicNav({ username, type }) {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  const normalizedType = type.toLowerCase();

  useEffect(() => {
    const updateActiveLink = () => {
      setActiveLink(location.pathname);
    };

    // Chame updateActiveLink na renderização inicial e sempre que o username muda
    updateActiveLink();

    return () => updateActiveLink(); // Função de limpeza para evitar memory leaks
  }, [location.pathname, username]);

  return (
    <Styled.PublicNav>

      <StyledLink
        active={activeLink === `/user/${username}/profile`}
        path="profile"
        text="Perfil"
        color={theme.colors.white}
        hovercolor={theme.colors.black}
      />
      <StyledLink
        active={activeLink === `/user/${username}/squad`}
        path="squad"
        text="Plantel"
        color={theme.colors.white}
        hovercolor={theme.colors.black}
      />

      {type === 'club' && (
        <StyledLink
          active={activeLink === `/user/${username}/opportunities`}
          path="opportunities"
          text="Oportunidades"
          color={theme.colors.white}
          hovercolor={theme.colors.black}
        />
      )}

      <StyledLink
        active={activeLink === `/user/${username}/friends`}
        path="friends"
        text="Amigos"
        color={theme.colors.white}
        hovercolor={theme.colors.black}
      />
    </Styled.PublicNav>
  );
}

PublicNav.propTypes = {
  username: Prop.string,
  type: Prop.string.isRequired,
};
