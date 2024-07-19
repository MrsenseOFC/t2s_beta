import styled, { css } from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import { slideIn, slideInLeft } from '../../../styles/animations';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';

export const ProductSlideElement = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacings.large};
    padding: ${theme.spacings.small};
    animation: ${slideIn} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */

    .swiper-slide {
      padding: ${theme.spacings.small};
    }

    ${SubtitleElement} {
      margin-bottom: 0px;
    }
  `}
`;
