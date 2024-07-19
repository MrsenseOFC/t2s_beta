import styled, { css } from 'styled-components';
import { fadeIn } from '../../../../styles/animations';

export const AuthInputContainer = styled.label`
  ${({ theme }) => css`
    animation: ${fadeIn} 500ms;
    display: flex;
    flex-direction: column;
    color: ${theme.colors.lightgray};
    font-size: ${theme.sizes.medium};

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
    }
  `}
`;

export const AuthInputElement = styled.input`
  ${({ theme }) => css`
    background: ${theme.colors.transparent};
    border: ${theme.borders.white};
    border-radius: 7px;
    color: ${theme.colors.white};

    font-size: ${theme.sizes.small};
    font-family: ${theme.fonts.primary};
  

    padding: ${theme.spacings.small};
    transition: all 300ms ease-in-out;
    
    &:hover {
      border: ${theme.borders.tertiary};
    }

    &::-webkit-input-placeholder {
      color: ${theme.colors.white};
    }

    &:focus {
      border: ${theme.borders.secondary};
      outline: none;
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xsmall};
    }
  `}
`;
