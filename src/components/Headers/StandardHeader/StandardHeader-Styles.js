import styled, { css } from 'styled-components';
import { slideOut } from '../../../styles/animations';

export const StandardHeaderContainer = styled.header`
  ${({ theme }) => css`
    animation: ${slideOut} 500ms ease-out;
    background: ${theme.colors.black};
    display: flex;
    justify-content: space-between;
    padding: ${theme.spacings.large};
    min-height: 80px;
    width: 100%;
    display: flex;
  `}
`;
