import styled, { css } from 'styled-components';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';

export const VerticalSoloSlideContainer = styled.div`
  ${({ theme }) => css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  `}
`;

export const VerticalSoloSlideElement = styled.div`
  ${({ theme, size }) => css`
    width: 100%;
    height: 100%;
    

   ${LinkContainer} {
    height: 100%;
    width: 100%;
    border-radius: 12px;
    max-width: 800px;

   }

    & img{
      object-fit: fill;
      width: 100%;
      height: 100%;
      
      border-radius: 15px;
      box-sizing: border-box;
    }

    .swiper-wrapper {
      height: ${size};
      width: 100%;

        @media ${theme.medias.smallpc} {
          height: 400px;
        }

        @media ${theme.medias.tablet} {
          max-height: 350px;
        }

        @media ${theme.medias.mobile} {
          max-height: 230px;
        }

        @media ${theme.medias.smallmobile} {
          max-height: 220px;
        }
     }

    .swiper-slide {
      width: 100%;
      height: 100%;
    }
  `}
`;
