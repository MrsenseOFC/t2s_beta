import Prop from 'prop-types';
import React from 'react';
import * as Styled from './EventCard-Styles';
import { CenterColumn } from '../../../CenterColumn/CenterColumn';
import { InfoInRow } from '../../InfoInRow/InfoInRow';
import { Subtitle } from '../../Subtitle/Subtitle';
import { Text } from '../../Text/Text';

export function EventCard({
  imagesrc, title, subtitle, organizer, startDate, startHour, country, state, platform, onClick,
}) {
  return (
    <Styled.EventCardElement backgroundimage={imagesrc} onClick={onClick}>

      <Styled.EventInfo>
        <CenterColumn>
          {title && <Subtitle text={title} uppercase />}
          {subtitle && <Text text={subtitle} />}
        </CenterColumn>

        <CenterColumn>
          {organizer && <InfoInRow infotitle="Organizador(a)" info={organizer} uppercase />}
          {startDate && <InfoInRow infotitle="Data de início" info={startDate} uppercase />}
          {startHour && <InfoInRow infotitle="Horário" info={`${startHour}h`} uppercase />}
          {country && <InfoInRow infotitle="País" info={country} uppercase />}
          {state && <InfoInRow infotitle="Estado" info={state} uppercase />}
          {platform && <InfoInRow infotitle="Plataforma" info={platform} uppercase />}
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
  country: Prop.string,
  state: Prop.string,
  onClick: Prop.bool,
};
