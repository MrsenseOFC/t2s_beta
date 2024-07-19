import styled, { css } from 'styled-components';
import { slideOut } from '../../../styles/animations';

export const FloatingHeaderContainer = styled.header`
  ${({ theme }) => css`
    animation: ${slideOut} 500ms ease-out;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0)
      );  
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacings.large};
    min-height: 80px;
    width: 100%;
    display: flex;
    position: absolute;
    z-index: 10000;
    
  `}
`;
