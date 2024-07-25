import Prop from 'prop-types';
import React from 'react';
import * as Styled from './EventCard-Styles';
import { CenterColumn } from '../../../../../../components/CenterColumn/CenterColumn';
import { InfoInRow } from '../../../../../../components/elements/InfoInRow/InfoInRow';
import { Subtitle } from '../../../../../../components/elements/Subtitle/Subtitle';
import { Text } from '../../../../../../components/elements/Text/Text';

export function EventCard({
  imagesrc, title, subtitle, organizer, startDate, startHour, location, onClick,
}) {
  return (
    <Styled.EventCardElement backgroundimage={imagesrc} onClick={onClick}>

      <Styled.EventInfo>
        <CenterColumn>
          <Subtitle text={title} uppercase />
          <Text text={subtitle} />
        </CenterColumn>

        <CenterColumn>
          <InfoInRow infotitle="Organizador(a)" info={organizer} uppercase />
          <InfoInRow infotitle="Data de início" info={startDate} uppercase />
          <InfoInRow infotitle="Horário" info={`${startHour}h`} uppercase />
          <InfoInRow infotitle="Local" info={location} uppercase />
        </CenterColumn>

      </Styled.EventInfo>

    </Styled.EventCardElement>
  );
}

EventCard.propTypes = {
  imagesrc: Prop.string,
  title: Prop.string,
  subtitle: Prop.string,
  organizer: Prop.string,
  startDate: Prop.string,
  startHour: Prop.string,
  location: Prop.string,
  onClick: Prop.bool,
};
