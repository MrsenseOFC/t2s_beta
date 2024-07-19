import styled, { css } from 'styled-components';

export const MyAffiliatesContainer = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`;
