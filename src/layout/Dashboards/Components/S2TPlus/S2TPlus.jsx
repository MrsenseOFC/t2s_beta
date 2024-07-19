import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './S2TPlus-Styles';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';
import { VerticalSoloSlide } from '../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';

export function S2TPlus() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.S2TPlusContainer>
      <GridCards title="Preparadores físicos" items={s2tState.users.scouts} />
      <GridCards title="Preparadores táticos" items={s2tState.users.scouts} />
      <GridCards title="Psícológos" items={s2tState.users.scouts} />
      <GridCards title="Médicos" items={s2tState.users.scouts} />
    </Styled.S2TPlusContainer>
  );
}

S2TPlus.propTypes = {
};
