import styled, { css } from 'styled-components';
import { slideIn } from '../../../../../styles/animations';

export const ClubProfileContainer = styled.article`
  ${({ theme }) => css`
    animation: ${slideIn} 500ms ease-out;
    animation-fill-mode: forwards; /* Manter o estado final após a animação */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: ${theme.spacings.large};
  `}
`;
