import React, { useContext } from 'react';
import * as Styled from './Clubs-Styles';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';
import { Text } from '../../../../components/elements/Text/Text';

export function Clubs() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.ClubsContainer>
      {s2tState.users.clubs ? (
        <GridCards title="Clubes" items={s2tState.users.clubs} />
      ) : <Text text="Carregando..." />}
    </Styled.ClubsContainer>
  );
}
