import styled, { css } from 'styled-components';
import { slideIn } from '../../../../styles/animations';

export const AuthLayoutContainer = styled.div`
  ${({ theme, isopen }) => css`
    animation: ${slideIn} 500ms;
    width: 100%;
    height: 100%;
    display: ${isopen};
    grid-gap: ${theme.spacings.small};
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: ${theme.spacings.xxsmall};


    @media ${theme.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }

    @media ${theme.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
    }

    @media ${theme.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    }
  `}
`;
