import Prop from 'prop-types';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import * as Styled from './ProductsSlide-Styles';
import { ProductCard } from '../ProductCard/ProductCard';
import { Subtitle } from '../Subtitle/Subtitle';

export function ProductSlide({ items, title }) {
  return (
    <Styled.ProductSlideElement>
      <Subtitle text={title} uppercase />
      <Swiper
        spaceBetween={15}
        navigation
        loop
        breakpoints={{
          1250: {
            slidesPerView: 4,
          },

          930: {
            slidesPerView: 3,
          },

          680: {
            slidesPerView: 2,
          },

          0: {
            slidesPerView: 1,
          },
        }}
      >

        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard
              name={item.name}
              imagesrc={item.imagesrc}
              price={item.price}
              path={item.path}
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </Styled.ProductSlideElement>
  );
}

ProductSlide.propTypes = {
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
  items: Prop.arrayOf(Prop.object).isRequired,
  title: Prop.string,
};
