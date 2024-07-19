import styled, { css } from 'styled-components';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { TextElement } from '../Text/Text-Styles';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';

export const EventCardContainer = styled.div`
  ${({ theme }) => css`

    height: 100%;
    width: 100%;

    &:hover {
      ${Line} {
        box-shadow: 0px 0px 5px 1px white;
      }

      ${EventInfo} {
        background: rgba(0,0,0,0.8);
        box-shadow: 0px 0px 5px 1px white;
      }
      
    }

  
    & ${LinkContainer} {
      text-align: start;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: ${theme.spacings.small};
      height: 100%;
      transition: all 500ms ease-in-out;

      @media ${theme.medias.mobile} {
        flex-direction: column;
        gap: ${theme.spacings.xsmall};
      }


      & ${TextElement} {
      color: ${theme.colors.white};
      font-size: ${theme.sizes.small};

      @media ${theme.medias.smallmobile} {
        font-size: ${theme.sizes.xsmall};
      }
      }

      > ${SubtitleElement} {
      color: ${theme.colors.white};
      margin-bottom: 0px;
      user-select: none;
      cursor: pointer;

      @media ${theme.medias.tablet} {
        font-size: ${theme.sizes.small};
      }
     }
    }
  `}
`;

export const EventInfo = styled.div`
  ${({ theme }) => css`
    background: rgba(0,0,0,0.5);
    width: auto;
    max-width: 300px;
    height: 100%;
    border-radius: 12px;
    padding: ${theme.spacings.small};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;
    


    &:hover {
     
    }

    > ${SubtitleElement} {
      font-size:${theme.sizes.medium};

      @media ${theme.medias.mobile} {
        font-size:${theme.sizes.small};
      }
    }
  `}
`;

export const Line = styled.div`
  ${({ theme }) => css`
    height: 100%;
    width:2px;
    background: ${theme.colors.white};
    margin-left:5.3px;
    transition: all 800ms ease-in-out;

    @media ${theme.medias.mobile} { {
      display: none;
    }


  `}
`;
