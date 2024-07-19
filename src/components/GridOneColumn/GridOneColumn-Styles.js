import styled, { css } from 'styled-components';

export const GridOneColumnContainer = styled.div`
  ${({ theme }) => css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: ${theme.spacings.xsmall};
  gap: ${theme.spacings.xsmall};
  `}
`;
