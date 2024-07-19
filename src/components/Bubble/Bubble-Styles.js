import styled, { css } from 'styled-components';
import { slideIn } from '../../styles/animations';

export const BubbleContainer = styled.div`
  ${({ theme }) => css`
  animation: ${slideIn} 500ms ease-out;
  
  background-color: ${theme.colors.transparent};
  backdrop-filter: blur(10px);
  border: ${theme.borders.xwhite};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacings.large};

  transition: all 500ms ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  `}
`;
