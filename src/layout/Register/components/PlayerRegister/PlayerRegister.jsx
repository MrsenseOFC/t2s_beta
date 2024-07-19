import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import * as Styled from './PlayerRegister-Styles';

import { Title } from '../../../../components/elements/Title/Title';

import { theme } from '../../../../styles/theme';
import { Button } from '../../../../components/elements/Button/Button';
import { Row } from '../../../../components/RowContainer/Row';

export function PlayerRegister() {
  const [profileType, setProfileType] = useState('');

  return (
    <Styled.PlayerRegisterContainer>

      <Title text="Você é um jogador" size={theme.sizes.xxlarge} uppercase />

      <Row>
        <Button
          text="Profissional"
          path="/register/player/professional"
          bgcolor={theme.colors.lightprimary}
          bghover={theme.colors.primary}
          textcolor={theme.colors.black}
          texthover={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          onclick={() => setProfileType('proPlayer')}
          active
        />

        <Button
          text="Semi-profissional"
          path="/register/player/semi-professional"
          bgcolor={theme.colors.lightprimary}
          bghover={theme.colors.primary}
          textcolor={theme.colors.black}
          texthover={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          onclick={() => setProfileType('semiProPlayer')}
        />

        <Button
          text="Amador"
          path="/register/player/amateur"
          bgcolor={theme.colors.lightprimary}
          bghover={theme.colors.primary}
          textcolor={theme.colors.black}
          texthover={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
          onclick={() => setProfileType('amateur')}
        />

      </Row>

      <Outlet />

    </Styled.PlayerRegisterContainer>

  );
}
