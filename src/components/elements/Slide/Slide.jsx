import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import * as Styled from './Slide-Styles';
import { Title } from '../Title/Title';
import { ImageCard } from '../ImageCard/ImageCard';

export function Slide({
  items, title,
}) {
  // Organiza os itens para que os que estejam bloqueados venham após os que não estejam
  const orderedItems = [...items].sort((itemA, itemB) => {
    if (itemA.islocked && !itemB.islocked) {
      return 1; // itemA é bloqueado, itemB não é bloqueado
    } if (!itemA.islocked && itemB.islocked) {
      return -1; // itemA não é bloqueado, itemB é bloqueado
    }
    return 0; // Ambos são bloqueados ou ambos não são bloqueados
  });

  return (
    <Styled.SlideElement>
      <Title text={title} uppercase />
      <Swiper
        spaceBetween={15}
        navigation
        loop
        grabCursor
        breakpoints={{
          1601: {
            slidesPerView: 7,
          },

          1415: {
            slidesPerView: 6,
          },

          1100: {
            slidesPerView: 5,
          },

          680: {
            slidesPerView: 4,
          },

          0: {
            slidesPerView: 3,
          },
        }}
      >

        {orderedItems.length > 0 && orderedItems.map((item) => (
          <SwiperSlide key={item.id}>
            <ImageCard
              src={item.src}
              alt="Imagem do card"
              title={item.title}
              islocked={item.islocked}
              path={item.islocked ? '/plans' : item.path}
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </Styled.SlideElement>
  );
}

Slide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
