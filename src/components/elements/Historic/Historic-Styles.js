import styled, { css } from 'styled-components';

export const HistoricContainer = styled.section`
  ${({ theme }) => css`
    width: 40%;
    margin-bottom: ${theme.spacings.small};

    @media ${theme.medias.smallpc} {
      width: 100%;
    }
  `}
`;

export const HistoricElement = styled.div`
  ${({ theme }) => css`

    color: ${theme.colors.white};
    font-family: ${theme.fonts.primary};
    text-transform: uppercase;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    width: 100%;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    border-radius: 50%;
    width: 40px;

    @media${theme.medias.mobile} {
      width: 25px;
    }
  `}
`;

export const Item = styled.h1`
  ${({ theme }) => css`
    font-weight: 800;
    font-size: ${theme.sizes.large};
    
    width: 45%;
    min-width: 95px;
    margin-right: 20px;

    @media ${theme.medias.smallpc} {
      width: 30%;
    }

    @media ${theme.medias.tablet} {
     font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.mobile} {
     font-size: ${theme.sizes.xsmall};
    }
    
  `}
`;

export const Years = styled.time`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: ${theme.sizes.large};

    @media ${theme.medias.tablet} {
     font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.mobile} {
     font-size: ${theme.sizes.xsmall};
    }
  `}
`;
