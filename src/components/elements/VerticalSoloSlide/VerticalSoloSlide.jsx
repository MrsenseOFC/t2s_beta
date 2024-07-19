import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './VerticalSoloSlide-Styles';
import 'swiper/css/bundle';
import { StyledLink } from '../StyledLink/StyledLink';
import { Subtitle } from '../Subtitle/Subtitle';

export function VerticalSoloSlide({
  items, size = '500px', title, type = 'image', lazy,
}) {
  return (
    <Styled.VerticalSoloSlideContainer>
      {title && <Subtitle text={title} uppercase as="h4" />}

      <Styled.VerticalSoloSlideElement size={size}>

        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          direction="vertical"
          mousewheel
          loop
          lazy={lazy ? 'true' : undefined}
          pagination
        >
          {type === 'image' && (
          <>
            {items.map((item) => (
              <SwiperSlide key={item.id}>
                <StyledLink path={item.path}>
                  <img src={item.src} alt={item.title} />
                </StyledLink>
              </SwiperSlide>
            ))}
          </>
          )}

          {type === 'video' && (
          <>
            {items.map((item) => (
              <SwiperSlide key={item.id} lazy={lazy}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/5-sXTlF6Sd4?si=-FVFNX-zSAhGhulp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen />
              </SwiperSlide>
            ))}
          </>
          )}

        </Swiper>
      </Styled.VerticalSoloSlideElement>
    </Styled.VerticalSoloSlideContainer>

  );
}

VerticalSoloSlide.propTypes = {
  size: Prop.string,
  title: Prop.string,
  type: Prop.string,
  lazy: Prop.bool,
  items: Prop.arrayOf(Prop.object).isRequired,
};
