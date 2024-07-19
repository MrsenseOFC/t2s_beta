import styled, { css } from 'styled-components';

export const GridLayoutContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: grid;
    padding: ${theme.spacings.xxsmall};
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(195px, 1fr));
    grid-gap: ${theme.spacings.xxsmall};

    @media ${theme.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    }

    @media ${theme.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    }

    @media ${theme.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    }
  `}
`;

export const ItemContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    
    
  `}
`;
