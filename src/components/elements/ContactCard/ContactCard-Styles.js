import styled, { css } from 'styled-components';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { TextElement } from '../Text/Text-Styles';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import {
  fadeIn,
} from '../../../styles/animations';

export const ContactCardContainer = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    text-align: start;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};
    height: 100%;
    width: 100%;
    transition: all 700ms ease-in-out;


      & ${TextElement} {
      font-size: ${theme.sizes.small};
      font-weight: 600;

      @media ${theme.medias.mobile} {
        font-size: ${theme.sizes.xsmall};
      }

      @media ${theme.medias.smallmobile} {
        font-size: ${theme.sizes.xxsmall};
      }
      }

      > ${SubtitleElement} {
      color: ${theme.colors.white};
      margin-bottom: 0px;
      user-select: none;
      cursor: pointer;
     }

     & ${IconContainer} {
      animation: ${fadeIn} 500ms;

     }


    &:hover {

      ${ContactText} {
        background: rgba(0,0,0,0.8);
        box-shadow: 0px 0px 5px 1px white;
      }

      ${ContactImage} {
        box-shadow: 0px 0px 5px 1px white;
      }

      ${IconContainer} {
        /* > svg {
          color: ${theme.colors.primary};
          transform: none;
        } */
      }
  
    }

    

  

  `}
`;

export const ContactText = styled.div`
  ${({ theme }) => css`
    background: rgba(0,0,0,0.5);
    width: 270px;
    border-radius: 12px;
    padding: ${theme.spacings.xsmall};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: ${theme.spacings.small};

    @media ${theme.medias.mobile} {
      width: 150px;
    }

    @media ${theme.medias.smallmobile} {
      width: 100px;
    }
  `}
`;

export const ContactImage = styled.img`
  ${({ theme }) => css`
    background-image: linear-gradient(to bottom, ${theme.colors.lightsecondary}, ${theme.colors.lightprimary});
    width: 90px;
    padding: ${theme.spacings.small};

    border-radius: 12px;
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;
    
    @media ${theme.medias.tablet} {
      width: 80px;
    }

    @media ${theme.medias.mobile} {
      width: 60px;
    }
  `}
`;
