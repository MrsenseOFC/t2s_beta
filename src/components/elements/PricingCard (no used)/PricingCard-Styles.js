import styled, { css } from 'styled-components';

export const PricingCardElement = styled.div`
  ${({ theme }) => css`
   
     border: ${theme.borders.white};
     border-radius: 12px;
  `}
`;
