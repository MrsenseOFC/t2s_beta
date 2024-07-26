import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './Events-Styles';
import { Row } from '../../../../components/RowContainer/Row';
import { Title } from '../../../../components/elements/Title/Title';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { VerticalSoloSlide } from '../../../../components/elements/VerticalSoloSlide/VerticalSoloSlide';
import { GridEvents } from '../../../../components/elements/EventsElements/GridEvents/GridEvents';

export function Events({ children }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.EventsContainer>
      <Title text="Eventos" uppercase />
      <GridEvents items={s2tState.events} />
    </Styled.EventsContainer>
  );
}
