import styled, { css } from 'styled-components';

export const ImageTextElement = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xsmall};
    align-items: center;
    user-select: none;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    /* border-radius: 50%; */
    width: 40px;

    @media${theme.medias.mobile} {
      width: 25px;
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: ${theme.sizes.medium};
    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    text-transform: uppercase;

    @media ${theme.medias.tablet} {
     font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.smallmobile} {
     font-size: ${theme.sizes.xxsmall};
    }

  `}
`;
