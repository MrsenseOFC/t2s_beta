import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './Store-Styles';
import { ProductCard } from '../../../../components/elements/ProductCard/ProductCard';
import { ProductSlide } from '../../../../components/elements/ProductsSlide/ProductsSlide';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { Text } from '../../../../components/elements/Text/Text';
import { Title } from '../../../../components/elements/Title/Title';

export function Store() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  return (
    <Styled.StoreContainer>
      <Title text="Loja" uppercase />
      <Text text='Ainda não vendemos esses produtos diretamente na S2T, mas não se preocupe, a gente tem uma loja completa com tudo que você precisa, e o melhor: é tudo do mesmo grupo!
       Então, se você clicar no botão "Comprar", a gente vai te direcionar para o nosso site de compras, onde você pode finalizar a sua compra com toda segurança e tranquilidade.
      '
      />
      <ProductSlide title="Camisas" items={s2tState.products.shirts} />
      <ProductSlide title="Chuteiras" items={s2tState.products.footballBoots} />
    </Styled.StoreContainer>
  );
}

Store.propTypes = {
};
