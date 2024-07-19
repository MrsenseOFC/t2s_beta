import styled, { css } from 'styled-components';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';

export const VerticalVideoSlideElement = styled.div`
  ${({ theme, size }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${SubtitleElement} {

      @media ${theme.medias.tablet} {
        font-size: ${theme.sizes.medium};
      }


      @media ${theme.medias.mobile} {
        font-size: ${theme.sizes.small};
      }

      @media ${theme.medias.smallmobile} {
        font-size: ${theme.sizes.xsmall};
      }
    }

    .swiper-slide {
      aspect-ratio: 16 / 9; // always use 16/9 video
      container-type: size;
      max-width: 450px;
      background: rgba(0,0,0,0.5);

    @media ${theme.medias.smallpc} {
      max-width: 700px;
    }
    
    @media ${theme.medias.tablet} {
      max-width: 400px;
    }


    @media ${theme.medias.mobile} {
      max-width: 320px;
    }

    @media ${theme.medias.smallmobile} {
      max-width: 240px;
    }
    
    

      &:after {
        content: "";
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: calc(100% - 14cqh); // show controls
        clip-path: polygon(0% 0%, 0% 100%, 44% 100%, 44% 49%, 56% 49%, 56% 67%, 0% 67%, 0% 100%, 100% 100%, 100% 0%); // show play button
      }
    }
  

    ${LinkContainer} {
      width: 100%;
      height: 100%;
      border-radius: 12px;
    }

    & video {
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
          height: 320px;
        }

        @media ${theme.medias.tablet} {
          max-height: 280px;
        }

        @media ${theme.medias.mobile} {
          max-height: 220px;
        }

        @media ${theme.medias.smallmobile} {
          max-height: 180px;
        }
    }

    & .swiper-slide {
    }
  `}
`;
