import styled, { css } from 'styled-components';
import { StandardHeaderContainer } from '../../components/Headers/StandardHeader/StandardHeader-Styles';
import { NavContainer } from '../../components/Nav/Nav-Styles';
import { IconContainer } from '../../components/elements/IconDiv/IconDiv-Styles';
import { MobileNavContainer } from '../../components/MobileNav/MobileNav-Styles';
import { FloatingHeaderContainer } from '../../components/Headers/FloatingHeader/FloatingHeader-Styles';
import { FloatingMenuContainer } from '../../components/FloatingMenu/FloatingMenu-Styles';
import { IconCardContainer } from '../../components/elements/IconCard/IconCard-Styles';
import { SubtitleElement } from '../../components/elements/Subtitle/Subtitle-Styles';
import { GridLayoutContainer } from '../../components/GridLayout/GridLayout-Styles';
import { BannerSlideWrapper } from '../../components/elements/BannerSlide/BannerSlide-Styles';
import { BannerContainer } from '../../components/elements/Banner/Banner-Styles';
import { TextElement } from '../../components/elements/Text/Text-Styles';
import { RowContainer } from '../../components/RowContainer/Row-Styles.js';
import { ButtonElement } from '../../components/elements/Button/Button-Styles';

export const UsersPage = styled.section`
  ${({ theme }) => css`
  

  ${FloatingHeaderContainer} {
    background-image: linear-gradient( ${theme.colors.black}, ${theme.colors.transparent});

    ${NavContainer} {
       @media ${theme.medias.tablet} {
         display: none;
       }
    }

    ${IconContainer} {
      display: none;
      animation: none;
        @media ${theme.medias.tablet} {
          display: flex;
        }
    }
  }


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

    ${IconCardContainer} {
      transition: all 200ms ease-in-out ;
      position: relative;
      animation: none;

        & svg {
          transition: all 200ms ease-in-out ;

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

  > ${FloatingMenuContainer} {
      display: none;
      flex-direction: column;
      gap: ${theme.spacings.small};
      padding: ${theme.spacings.medium};

      @media ${theme.medias.tablet} {
        display: flex;
      }
    }

  ${MobileNavContainer} {
    position: absolute;
    top: 80px;
  }

  `}
`;
