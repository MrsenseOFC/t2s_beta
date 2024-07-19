import styled, { css } from 'styled-components';
import { TextElement } from '../../../../components/elements/Text/Text-Styles';
import { TitleElement } from '../../../../components/elements/Title/Title-Styles';
import { BannerSlideWrapper } from '../../../../components/elements/BannerSlide/BannerSlide-Styles';
import { LinkContainer } from '../../../../components/elements/StyledLink/StyledLink-Styles';
import { ListContainer, ListItem } from '../../../../components/elements/List/List-Styles';
import { slideIn, slideOut } from '../../../../styles/animations';

export const EventsContainer = styled.article`
  ${({ theme }) => css`
 
     text-align: center;

     display: flex;
     flex-direction: column;

     ${BannerSlideWrapper} {
      .swiper-slide {
       > ${LinkContainer} {
         gap: ${theme.spacings.small};
            > img {
              width: 100%;
              height: 100%;
              max-width: 600px;
              border-radius: 12px
           }
      }
      }
     }


     & ${ListContainer} {
      animation: ${slideIn} 500ms;

     }

     & ${ListItem} {
      background-image: linear-gradient(to right, ${theme.colors.lightprimary}, ${theme.colors.lightsecondary});
      padding: ${theme.spacings.xsmall};
      border-radius: 12px;
      border: ${theme.borders.white};
      
      @media ${theme.medias.mobile} {
        padding: ${theme.spacings.xxsmall};
      }
      
     }

     > ${TitleElement} {
        text-align: center;
        margin-bottom: 0;
        padding: ${theme.spacings.xsmall};
        animation: ${slideIn} 500ms;

     }

     > ${TextElement} {
      animation: ${slideIn} 500ms;
     }
 
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
  animation: ${slideOut} 500ms;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
    ),
    url('/assets/images/backgrounds/slider-bg-1.png');
   background-size: cover;
   padding: ${theme.spacings.medium};
  `}
`;
