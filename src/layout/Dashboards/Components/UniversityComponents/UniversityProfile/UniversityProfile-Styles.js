import styled, { css } from 'styled-components';
import { slideIn } from '../../../../../styles/animations';

export const UniversityProfileContainer = styled.article`
  ${({ theme }) => css`
    animation: ${slideIn} 500ms ease-out;
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: ${theme.spacings.large};
  `}
`;
