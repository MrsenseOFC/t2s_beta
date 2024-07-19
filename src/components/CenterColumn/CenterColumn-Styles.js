import styled, { css } from 'styled-components';

export const CenterColumnContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacings.xxsmall};
    align-items: center;
  `}
`;
