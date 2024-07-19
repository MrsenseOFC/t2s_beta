import styled, { css } from 'styled-components';
import { IconContainer } from '../../../../components/elements/IconDiv/IconDiv-Styles';
import { TextElement } from '../../../../components/elements/Text/Text-Styles';
import { GridLayoutContainer } from '../../../../components/GridLayout/GridLayout-Styles';
import { SubtitleElement } from '../../../../components/elements/Subtitle/Subtitle-Styles';
import { BannerSlideWrapper } from '../../../../components/elements/BannerSlide/BannerSlide-Styles';
import { LinkContainer } from '../../../../components/elements/StyledLink/StyledLink-Styles';
import { ButtonElement } from '../../../../components/elements/Button/Button-Styles';
import { BannerContainer } from '../../../../components/elements/Banner/Banner-Styles';
import { RowContainer } from '../../../../components/RowContainer/Row-Styles.js';
import { IconCardContainer } from '../../../../components/elements/IconCard/IconCard-Styles.js';
import {
  fadeIn, slideIn, slideInRight, slideOut,
} from '../../../../styles/animations.js';

export const PlayerPageContainer = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};

    width: 100%;
    height: 100%;


     ${GridLayoutContainer} {
        width: 85%;
        padding: ${theme.spacings.small};
        grid-gap: ${theme.spacings.large};

        grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));

        @media (max-width: 1080px) {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        @media ${theme.medias.tablet} {
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          width: 100%;
        }
        
        @media (max-width: 530px) {
          grid-template-columns: repeat(auto-fit, minmax(181px, 1fr));
        }

        @media ${theme.medias.mobile} {
          grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
        }
      }

    
      ${IconCardContainer} {
        position: relative;
        animation: ${slideInRight} 500ms;

        & svg {
          @media (max-width: 1080px) {
            width: 30%;          
          }

          @media ${theme.medias.mobile} {
            width: 15%;
          }
        }

        ${SubtitleElement} {

          @media ${theme.medias.smallpc} {
            font-size: ${theme.sizes.xsmall};
          }

          @media ${theme.medias.tablet} {
            font-size: ${theme.sizes.xsmall};
          }

          @media ${theme.medias.smallmobile} {
            font-size: ${theme.sizes.xxsmall};
          }
        }
      }


      ${BannerSlideWrapper} {
        width: 100%;
        height: auto;

        & img {
          width: 85%;
          border-radius: 12px;

          @media ${theme.medias.tablet} {
            width: 100%;
          }
        } 
      }

      ${BannerContainer} {

        ${SubtitleElement} {
          font-weight: 900;
          margin-bottom: 0px;
          text-align: center;
          text-shadow: 3px 3px 1px ${theme.colors.lightblack};

          @media (max-width: 1150px) {
            font-size: ${theme.sizes.xxlarge};
          }

          @media ${theme.medias.tablet} {
            font-size: ${theme.sizes.large};
          }

          @media ${theme.medias.mobile} {
            font-size: ${theme.sizes.medium};
          }

          @media ${theme.medias.smallmobile} {
            font-size: ${theme.sizes.small};
          }
        }

        ${TextElement} {
          text-shadow: 3px 3px 1px ${theme.colors.lightblack};
          text-align: center;
        }

        ${RowContainer} {
          justify-content: center;
          flex-direction: row;

          @media ${theme.medias.smallpc} {
            flex-direction: row;
          }

          @media ${theme.medias.mobile} {
            flex-direction: column;
          }
        }

        ${ButtonElement} {
          box-shadow: 2px 5px 3px 1px ${theme.colors.lightblack};

          @media${theme.medias.tablet} {
           font-size: ${theme.sizes.small};
          }

           @media${theme.medias.smallmobile} {
            font-size: ${theme.sizes.xsmall};
          }
        }
      }
  `}
`;

export const Benefits = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%
  `}
`;

export const Explanation = styled.div`
  ${({ theme }) => css`
    animation: ${fadeIn} 500ms;
    background:  rgba(0,0,0,0.7);
    border-radius: 12px;
    border: ${theme.borders.primary};
    box-shadow: 0px 0px 5px 1px ${theme.colors.primary};
    width: 100%;
    padding: ${theme.spacings.small};
    position: absolute;
    top: 105%;
    z-index: 1000;
  `}
`;
