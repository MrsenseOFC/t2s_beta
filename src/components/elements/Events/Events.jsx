import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './Events-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { EventCard } from '../EventCard/EventCard';

export function Events({ children }) {
  return (
    <Styled.EventsWrapper>
      <Subtitle text="Eventos" uppercase as="h3" />

      <Styled.EventsContainer>

        <Swiper
          spaceBetween={1}
          direction="vertical"
          grabCursor
          slidesPerView={3}
          mousewheel
          pagination
        />

      </Styled.EventsContainer>
    </Styled.EventsWrapper>

  );
}

Events.propTypes = {
  children: Prop.node.isRequired,

};
