import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './MiniSlide-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { EventCard } from '../EventCard/EventCard';
import { NewsCard } from '../NewsCard/NewsCard';
import { RankCard } from '../RankCard/RankCard';
import { ContactCard } from '../ContactCard/ContactCard';
import { Logo } from '../Logo/Logo';

export function MiniSlide({
  items, title, type, autoplay,
}) {
  const normalizedType = type.toLowerCase();
  return (
    <Styled.MiniSlideWrapper>
      <Subtitle text={title} uppercase as="h3" />

      <Styled.MiniSlideContainer>

        <Swiper
          spaceBetween={30}
          slidesPerView={8}
          autoplay={autoplay ? { delay: 2000, disableOnInteraction: true } : false}
          loop
          navigation
          paginatio={{ clickable: true }}
          breakpoints={{

            1300: {
              slidesPerView: 8,
            },

            769: {
              slidesPerView: 5,
            },

            380: {
              slidesPerView: 3,
            },

            0: {
              slidesPerView: 2,
            },
          }}
        >

          {normalizedType === 'partners' && (
          <>
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <Logo logo={item.imagesrc} name={item.name} />
              </SwiperSlide>
            ))}
          </>
          )}

        </Swiper>

      </Styled.MiniSlideContainer>
    </Styled.MiniSlideWrapper>

  );
}

MiniSlide.propTypes = {
  title: Prop.string,
  type: Prop.string.isRequired,
  autoplay: Prop.bool,
  items: Prop.arrayOf(Prop.object).isRequired,
};
