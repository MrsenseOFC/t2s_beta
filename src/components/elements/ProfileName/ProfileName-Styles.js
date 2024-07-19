import styled, { css } from 'styled-components';

export const ProfileNameElement = styled.div`
  ${({ theme }) => css`
  background-image: linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.primary});
  border-radius: 10px;

  padding: ${theme.spacings.small};

   @media ${theme.medias.tablet} {
    padding: ${theme.spacings.xsmall};
   }
  `}
`;

export const Name = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.primary};
    font-size: ${theme.sizes.xlarge};
    font-weight: 800;
    text-transform: uppercase;

    @media ${theme.medias.smallpc} {
      font-size: ${theme.sizes.large};
    }

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.medium};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.smallmobile} {
      font-size: ${theme.sizes.xsmall};
    }
  `}
`;
