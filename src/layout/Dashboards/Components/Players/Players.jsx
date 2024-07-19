import React, { useContext } from 'react';
import * as Styled from './Players-Styles';
import { GridPlayers } from '../../../../components/elements/GridPlayers/GridPlayers';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';

export function Players() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.PlayersContainer>
      <GridPlayers title="Jogadores" items={s2tState.users.players} publicview />
    </Styled.PlayersContainer>
  );
}
