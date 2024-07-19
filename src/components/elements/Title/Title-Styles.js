import styled, { css } from 'styled-components';

export const TitleElement = styled.h1`
  ${({
    theme, color, size, uppercase,
  }) => css`
     color: ${color};
     margin-bottom: ${theme.spacings.medium};
     font-size: ${size};
     font-family: ${theme.fonts.primary};
     font-weight: 600;
     text-transform: ${uppercase};


     @media ${theme.medias.smallpc} {
      font-size: ${theme.sizes.xxlarge};
     }

     @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.medium};
      margin-bottom: 15px;
     }

     @media ${theme.medias.smallmobile} {
      font-size: ${theme.sizes.small};
     }
  `}
`;
