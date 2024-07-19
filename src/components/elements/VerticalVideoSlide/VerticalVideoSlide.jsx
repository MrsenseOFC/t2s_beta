import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './VerticalVideoSlide-Styles';
import 'swiper/css/bundle';
import { StyledLink } from '../StyledLink/StyledLink';
import { Subtitle } from '../Subtitle/Subtitle';

export function VerticalVideoSlide({
  items, size = '500px', title, lazy,
}) {
  return (
    <Styled.VerticalVideoSlideElement size={size}>

      {title && <Subtitle text={title} uppercase as="h4" />}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        direction="vertical"
        mousewheel
        loop
        lazy={lazy ? 'true' : undefined}
        pagination
      >

        <SwiperSlide>
          {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5-sXTlF6Sd4?si=7sH0mQqMCE8yd17v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> */}
        </SwiperSlide>

        <SwiperSlide>
          {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5-sXTlF6Sd4?si=7sH0mQqMCE8yd17v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> */}
        </SwiperSlide>

        <SwiperSlide>
          {/* <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5-sXTlF6Sd4?si=7sH0mQqMCE8yd17v" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /> */}
        </SwiperSlide>

      </Swiper>

    </Styled.VerticalVideoSlideElement>
  );
}

VerticalVideoSlide.propTypes = {
  size: Prop.string,
  title: Prop.string,
  type: Prop.string,
  items: Prop.arrayOf(Prop.object).isRequired,
};
