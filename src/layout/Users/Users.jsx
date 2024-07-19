import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Outlet } from 'react-router-dom';
import * as Styled from './Users-Styles';
import { S2tProvider } from '../../contexts/s2tContext/S2tProvider';
import { StandardHeader } from '../../components/Headers/StandardHeader/StandardHeader';
import { FloatingHeader } from '../../components/Headers/FloatingHeader/FloatingHeader';
import { Nav } from '../../components/Nav/Nav';
import { Button } from '../../components/elements/Button/Button';
import { theme } from '../../styles/theme';
import { Logo } from '../../components/elements/Logo/Logo';
import { s2tData } from '../../contexts/s2tContext/s2tData';
import { MobileNav } from '../../components/MobileNav/MobileNav';
import { IconDiv } from '../../components/elements/IconDiv/IconDiv';
import { FloatingMenu } from '../../components/FloatingMenu/FloatingMenu';

export function Users({ children }) {
  const [mobileHeader, setMobileHeader] = useState(false);

  return (
    <Styled.UsersPage>
      <FloatingHeader>

        <Logo size="250px" logo="/assets/images/pngs/logo.png" />

        <Nav>

          <Button
            path="/"
            text="Página principal"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/player-dashboard"
            text="Minha área"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/users"
            text="Tipo de usuários"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />
        </Nav>

        {mobileHeader ? (
          <IconDiv name="Menu" onclick={() => setMobileHeader(!mobileHeader)}>
            <CloseIcon />
          </IconDiv>
        ) : (
          <IconDiv name="Fechar menu" onclick={() => setMobileHeader(!mobileHeader)}>
            <MenuIcon />
          </IconDiv>
        ) }
      </FloatingHeader>

      {mobileHeader && (
      <FloatingMenu>
        <Button
          path="/"
          text="Página principal"
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />

        <Button
          path="/player-dashboard"
          text="Minha área"
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.mediumblack}
          textcolor={theme.colors.white}
          texthover={theme.colors.primary}
          border={theme.colors.white}
          borderhover={theme.colors.primary}
        />

        <Button
          path="/player-dashboard"
          text="Benefícios"
          bgcolor={theme.colors.mediumblack}
          bghover={theme.colors.black}
          textcolor={theme.colors.primary}
          texthover={theme.colors.primary}
          border={theme.colors.primary}
          borderhover={theme.colors.primary}
          active
        />
      </FloatingMenu>
      )}

      <S2tProvider>
        <Outlet />
      </S2tProvider>

    </Styled.UsersPage>
  );
}

Users.propTypes = {
};
