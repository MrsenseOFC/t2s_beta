import styled, { css } from 'styled-components';

export const TextElement = styled.p`
  ${({
    theme, uppercase, color, size,
  }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${size};
    color: ${color};
    text-transform: ${uppercase};

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xsmall};
    }
  `}
`;
