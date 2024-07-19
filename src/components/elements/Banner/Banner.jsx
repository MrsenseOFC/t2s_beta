import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './Banner-Styles';
import { VerticalMiniSlide } from '../VerticalMiniSlide/VerticalMiniSlide';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';

export function Banner({
  children, backgroundimagesrc, gradientdirection, backgroundfixed, autoplay,
}) {
  return (
    <Styled.BannerContainer
      backgroundimagesrc={backgroundimagesrc}
      gradientdirection={gradientdirection}
      backgroundfixed={backgroundfixed ? 'backgroundfixed' : undefined}
    >
      {children}
    </Styled.BannerContainer>
  );
}

Banner.propTypes = {
  children: Prop.node.isRequired,
};
