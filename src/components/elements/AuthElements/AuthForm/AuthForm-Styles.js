import styled, { css } from 'styled-components';

export const AuthFormContainer = styled.form`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};

    display: flex;
    flex-direction: column;
    gap: 15px;

    margin: 0 auto;
    width: 100%;
    
  `}
`;
