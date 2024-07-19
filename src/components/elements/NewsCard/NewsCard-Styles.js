import styled, { css } from 'styled-components';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { TextElement } from '../Text/Text-Styles';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';

export const NewsCardContainer = styled.div`
  ${({ theme }) => css`

    height: 100%;
    width: 100%;


    &:hover {

      ${NewsInfo} {
        background: rgba(0,0,0,0.8);
        box-shadow: 0px 0px 5px 1px white;
      }

      ${NewsThumbnail} {
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
     }


    }
  `}
`;

export const NewsInfo = styled.div`
  ${({ theme }) => css`
    background: rgba(0,0,0,0.5);
    width: auto;
    max-width: 300px;
    min-width: 300px;
    height: 100%;
    border-radius: 12px;
    padding: ${theme.spacings.small};
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    @media ${theme.medias.mobile} {
      height: 40%;
    }

    @media ${theme.medias.smallmobile} {
      min-width: 200px;
    }

    > ${SubtitleElement} {
      font-size:${theme.sizes.medium};

      @media ${theme.medias.mobile} {
        font-size:${theme.sizes.small};
      }
    }
  `}
`;

export const NewsThumbnail = styled.img`
  ${({ theme }) => css`
    height: 100%;
    width: 125px;
    border-radius: 12px;
    transition: all 700ms ease-in-out;
    box-shadow: 0px 0px 5px 1px transparent;

    @media ${theme.medias.tablet} {
      height: 100%;
      width: 125px
    }

    @media ${theme.medias.mobile} {
      height: 50%;
      width: 110px
    }
  `}
`;
