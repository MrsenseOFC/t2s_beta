import styled, { css } from 'styled-components';

export const LogoutPage = styled.section`
  ${({ theme }) => css`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
      ),
      url('/assets/images/background.png');

     background-position: center;
     background-size: cover;

     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
     gap: ${theme.spacings.medium};
     padding: ${theme.spacings.large};

     width: 100vw;
     height: 100vh;
  `}
`;
