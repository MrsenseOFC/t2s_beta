import styled, { css } from 'styled-components';
import { slideIn } from '../../../../../styles/animations';

export const PublicProfileContainer = styled.article`
  ${({ theme }) => css`
    animation: ${slideIn} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.large};
  `}
`;
