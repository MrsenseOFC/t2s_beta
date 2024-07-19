import styled, { css } from 'styled-components';

export const InfoInRowElement = styled.div`
  ${({ theme, uppercase }) => css`
    color: ${theme.colors.white};
    text-transform: ${uppercase};
    font-family: ${theme.fonts.primary};
    
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacings.xsmall};
  `}
`;

export const InfoTitle = styled.h3`
  ${({ theme }) => css`
    font-weight: 800;
    font-size: ${theme.sizes.medium};

    &::after {
       content: ':'
    }

    @media ${theme.medias.tablet} {
     font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.mobile} {
     font-size: ${theme.sizes.xsmall};
    }

  `}
`;

export const Info = styled.p`
  ${({ theme }) => css`
  font-size: ${theme.sizes.medium};

  @media ${theme.medias.tablet} {
     font-size: ${theme.sizes.small};
  }
  
  @media ${theme.medias.mobile} {
     font-size: ${theme.sizes.xsmall};
  }
  
  `}
`;
