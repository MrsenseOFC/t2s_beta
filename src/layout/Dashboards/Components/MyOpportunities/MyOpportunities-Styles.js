import styled, { css } from 'styled-components';

export const MyOpportunitiesContainer = styled.article`
  ${({ theme }) => css`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: ${theme.spacings.medium};

   width: 100%;
   height: 100%;
   min-height: 400px;
  `}
`;
