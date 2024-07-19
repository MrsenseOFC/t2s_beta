import styled, { css } from 'styled-components';

export const AuthInfoContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    color: ${theme.colors.white};

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
    }

    & svg {
     width: 25px;
     position: absolute;
     right: 5px;
     top: 8px;
     transition: all 500ms ease-in-out;

     &:hover {
      color: ${theme.colors.lightred};
      transform: scale(1.1);
     }
    }
  `}
`;

export const AuthInfoText = styled.p`
  ${({ theme }) => css`
     border: ${theme.borders.white};
     padding: ${theme.spacings.small};
     border-radius: 10px;
     background: ${theme.colors.mediumblack};
     width: 100%;
  `}
`;
