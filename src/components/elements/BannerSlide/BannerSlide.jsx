import Prop from 'prop-types';
import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/autoplay';
import * as Styled from './BannerSlide-Styles';
import { Subtitle } from '../Subtitle/Subtitle';

export function BannerSlide({
  children, lazy, title = '', slidesperview, backgroundimagesrc, gradientdirection, backgroundfixed, autoplay,
}) {
  return (
    <Styled.BannerSlideWrapper
      backgroundimagesrc={backgroundimagesrc}
      gradientdirection={gradientdirection}
      backgroundfixed={backgroundfixed ? 'backgroundfixed' : undefined}
    >
      {title && <Subtitle text="Vídeos em alta" uppercase size="25px" />}

      <Styled.BannerSlideContainer>
        <Swiper
          spaceBetween={10}
          grabCursor
          navigation
          loop
          autoplay={autoplay ? { delay: 2000, disableOnInteraction: true } : false}
          lazy={lazy ? 'true' : undefined}
          breakpoints={{

            1425: {
              slidesPerView: slidesperview || 3,
            },

            1050: {
              slidesPerView: slidesperview || 2,
            },

            0: {
              slidesPerView: 1,
            },

          }}
        >
          <>
            {children.map((child, index) => (
              <SwiperSlide key={index} lazy={lazy}>
                {child}
              </SwiperSlide>
            ))}
          </>

        </Swiper>
      </Styled.BannerSlideContainer>

    </Styled.BannerSlideWrapper>
  );
}
