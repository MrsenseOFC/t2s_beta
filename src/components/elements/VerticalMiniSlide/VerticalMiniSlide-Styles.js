import styled, { css } from 'styled-components';

export const VerticalMiniSlideWrapper = styled.div`
  ${({ theme }) => css`
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

  `}
`;

export const VerticalMiniSlideContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 500px;

    @media ${theme.medias.tablet} {
      max-width: 480px;
    }
  
    @media ${theme.medias.mobile} {
      max-width: 350px;
    }
  
    .swiper-wrapper{
      height: 300px;

      @media ${theme.medias.tablet} {
        height: 230px;
      }

      @media ${theme.medias.mobile} {
        height: 230px;
      }
    }

    .swiper-slide {
      padding: ${theme.spacings.xsmall};
    }
  `}
`;
