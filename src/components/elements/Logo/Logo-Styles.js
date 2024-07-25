import styled, { css } from 'styled-components';

export const LogoElement = styled.div`
  ${({ theme, size }) => css`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: ${size};

    @media ${theme.medias.tablet} {
        width: 150px;
      }

      @media ${theme.medias.mobile} {
        width: 110px;
      }
    
    > img {
      width: 100%;
      height: 100%;
    }
  `}
`;
