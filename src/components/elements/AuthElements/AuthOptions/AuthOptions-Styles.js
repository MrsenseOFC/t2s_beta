import styled, { css } from 'styled-components';

export const AuthOptionsContainer = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    font-size: ${theme.sizes.small};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: space-between;

    width: 100%;
    
    & p {
      color: ${theme.colors.white};
    }

    > label {
     display: flex;
     flex-direction: row;
     gap: 5px;
    }
  `}
`;
