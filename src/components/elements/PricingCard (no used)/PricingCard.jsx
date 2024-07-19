import Prop from 'prop-types';
import React from 'react';
import * as Styled from './PricingCard-Styles';
import { Subtitle } from '../Subtitle/Subtitle';

export function PricingCard({ children }) {
  return (
    <Styled.PricingCardElement>
      <Subtitle text="Básico" as="h3" />
    </Styled.PricingCardElement>
  );
}

PricingCard.propTypes = {
  children: Prop.node.isRequired,
};
