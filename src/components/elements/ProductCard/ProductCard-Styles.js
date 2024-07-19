import styled, { css } from 'styled-components';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { ButtonElement } from '../Button/Button-Styles';
import { LinkContainer } from '../StyledLink/StyledLink-Styles';

export const ProductCardElement = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    font-family: ${theme.fonts.primary};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: ${theme.borders.xlightprimary};
    transition: all 500ms ease-in-out;

    ${LinkContainer} {
      width: 100%;
      height: 100%;
    }


    ${SubtitleElement} {
      width: 100%;
      text-align: center;
      border-radius: 8px 8px 0px 0px;
      color: ${theme.colors.black};
      background: ${theme.colors.lightprimary};
      transition: all 500ms ease-in-out;
      margin-bottom: 0px;

      @media ${theme.medias.tablet} {
       font-size: ${theme.sizes.small};
      }

      @media ${theme.medias.mobile} {
       font-size: ${theme.sizes.small};
      }

      @media ${theme.medias.smallmobile} {
       font-size: ${theme.sizes.xsmall};
      }
    }

    ${ButtonElement} {
      margin-bottom: ${theme.spacings.medium};
      margin-top: ${theme.spacings.medium};
    }

    &:hover {
      border: ${theme.borders.xprimary};
      box-shadow: 0px 0px 10px 1px ${theme.colors.primary};

      ${SubtitleElement} {
       background: ${theme.colors.primary}
    }
    }
  `}
`;

export const ProductImage = styled.img`
  ${({ theme }) => css`
    max-width: 200px;
    max-height: 200px;
  `}
`;
