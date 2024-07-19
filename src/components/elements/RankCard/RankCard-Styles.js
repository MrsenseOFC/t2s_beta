import styled, { css } from 'styled-components';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { TextElement } from '../Text/Text-Styles';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';

export const RankCardContainer = styled.div`
  ${({ theme }) => css`

    height: 100%;
    width: 100%;



    &:hover {

      ${RankName} {
        background: rgba(0,0,0,0.8);
        box-shadow: 0px 0px 5px 1px white;
      }

      ${RankImage} {
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
      width: 100%;
      transition: all 700ms ease-in-out;

      @media ${theme.medias.mobile} {
        flex-direction: column;
      
      }


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


    }
  `}
`;

export const RankPosition = styled.div`
  ${({ theme }) => css`
    background: rgba(0,0,0,0.5);
    border-radius: 7px;
    min-width: 30px;
    padding: ${theme.spacings.small};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const RankName = styled.div`
  ${({ theme }) => css`
    background: rgba(0,0,0,0.5);
    max-width: 280px;
    min-width: 280px;
    border-radius: 12px;
    padding: ${theme.spacings.small};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    display: flex;
    justify-content: center;
    align-items: center;

    @media ${theme.medias.smallmobile} {
      min-width: 100%;
    }
  `}
`;

export const RankImage = styled.img`
  ${({ theme }) => css`
    height: 100%;
    max-width: 125px;
    border-radius: 12px;
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    @media ${theme.medias.tablet} {
      height: 100%;
      width: 110px
    }

    @media ${theme.medias.mobile} {
      width: 130px

    }
  `}
`;
