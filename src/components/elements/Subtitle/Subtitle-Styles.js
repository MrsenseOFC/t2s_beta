import styled, { css } from 'styled-components';

export const SubtitleElement = styled.h2`
  ${({
    theme, color, size, uppercase,
  }) => css`
     color: ${color};
     margin-bottom: ${theme.spacings.small};
     font-size: ${size};
     font-family: ${theme.fonts.primary};
     font-weight: 600;
     text-transform: ${uppercase};

     @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.large};
     }

     @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.medium};
      margin-bottom: ${theme.spacings.xsmall};
    }

     @media ${theme.medias.smallmobile} {
      font-size: ${theme.sizes.small};
     }
  `}
`;
