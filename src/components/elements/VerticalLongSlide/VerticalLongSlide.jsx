import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as Styled from './VerticalLongSlide-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { ContactCard } from '../ContactCard/ContactCard';

export function VerticalLongSlide({ items, title, type }) {
  const normalizedType = type.toLowerCase();
  return (
    <Styled.VerticalLongSlideWrapper>
      <Subtitle text={title} uppercase as="h3" />

      <Styled.VerticalLongSlideContainer>

        <Swiper
          spaceBetween={0}
          direction="vertical"
          slidesPerView={15}
          mousewheel
          pagination={{ clickable: true }}
          breakpoints={{

            769: {
              slidesPerView: 10,
            },

            0: {
              slidesPerView: 7,
            },
          }}
        >

          {/* Necessário mudanças. Está assim apenas para renderizar algo visual */}
          {normalizedType === 'contact' && (
          <>
            <SwiperSlide>
              <ContactCard title="Agente" subtitle="Centroavante" imagesrc="/assets/images/pngs/brasileirao.png" newmessage />
            </SwiperSlide>

            <SwiperSlide>
              <ContactCard title="Scout" subtitle="Centroavante" imagesrc="/assets/images/pngs/brasileirao.png" newmessage />
            </SwiperSlide>

            <SwiperSlide>
              <ContactCard title="Clube" subtitle="Centroavante" imagesrc="/assets/images/pngs/brasileirao.png" newmessage />
            </SwiperSlide>

            <SwiperSlide>
              <ContactCard title="Agência de intercâmbio" subtitle="Centroavante" imagesrc="/assets/images/pngs/brasileirao.png" />
            </SwiperSlide>

            <SwiperSlide>
              <ContactCard title="Agência de intercâmbio" subtitle="Centroavante" imagesrc="/assets/images/pngs/brasileirao.png" />
            </SwiperSlide>

            <SwiperSlide>
              <ContactCard title="Agência de intercâmbio" subtitle="Centroavante" imagesrc="/assets/images/pngs/brasileirao.png" />
            </SwiperSlide>

          </>
          )}

        </Swiper>

      </Styled.VerticalLongSlideContainer>
    </Styled.VerticalLongSlideWrapper>

  );
}

VerticalLongSlide.propTypes = {
  title: Prop.string,
  type: Prop.string.isRequired,
  items: Prop.arrayOf(Prop.object).isRequired,
};
