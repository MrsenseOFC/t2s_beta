import React, { useContext } from 'react';
import * as Styled from './Scouts-Styles';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';

export function Scouts() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.ScoutsContainer>
      <GridCards title="Scouts" items={s2tState.users.scouts} />
    </Styled.ScoutsContainer>
  );
}
