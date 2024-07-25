import styled, { css } from 'styled-components';
import { fadeIn, slideIn } from '../../../../../../styles/animations';
import { InfoTitle } from '../../../../../../components/elements/InfoInRow/InfoInRow-Styles';
import { SubtitleElement } from '../../../../../../components/elements/Subtitle/Subtitle-Styles';
import { TextElement } from '../../../../../../components/elements/Text/Text-Styles';
import { CenterColumn } from '../../../../../../components/CenterColumn/CenterColumn';
import { CenterColumnContainer } from '../../../../../../components/CenterColumn/CenterColumn-Styles';

export const EventCardElement = styled.div`
  ${({ theme, backgroundimage }) => css`
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${backgroundimage});
    background-position: center;
    background-size: cover;
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    border-radius: 15px;
    animation: ${fadeIn} 1000ms;
    width: 100%;
    height: 100%;
    min-height: 400px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 500ms ease-in-out;

    @media ${theme.medias.mobile} {
      min-height: 300px;
    }


    &:hover {
      box-shadow: 0px 0px 10px 1px ${theme.colors.white} inset;
    }

    ${SubtitleElement} {
      font-size: ${theme.sizes.xlarge};

      @media ${theme.medias.tablet} {
       font-size: ${theme.sizes.large};
      }

      @media ${theme.medias.mobile} {
       font-size: ${theme.sizes.small};
     }
    }

    ${TextElement} {
      user-select: none;
    }
  `}
`;

export const EventInfo = styled.div`
  ${({ theme, islocked }) => css`
    border-radius: 15px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.large};
    transition: all 500ms ease-in-out;

    ${CenterColumnContainer} {
      width: 100%;
    }
  `}
`;
