import styled, { css } from 'styled-components';
import { LogoElement } from '../Logo/Logo-Styles';

export const MiniSlideWrapper = styled.div`
  ${({ theme }) => css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  `}
`;

export const MiniSlideContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    ${LogoElement} {
      max-width: 130px;
      display: flex;
      align-items: center;
      justify-content: center;
    }


  
    .swiper-wrapper{
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      padding: ${theme.spacings.xsmall};
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
