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
    box-shadow: 0px 0px 5px 1px ${theme.colors.transparent};
    transition: all 300ms ease-in-out;
    
    &:hover {
      border: ${theme.borders.secondary};
    }

    &::-webkit-input-placeholder {
      color: ${theme.colors.white};
    }

    &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    filter: invert(0.8) brightness(100%) sepia(0%) saturate(10000%) hue-rotate(210deg); 
    display: flex;
    transition: all 500ms ease-in-out;

    &:hover {
      filter: invert(0.8) brightness(50%) sepia(100%) saturate(10000%) hue-rotate(195deg); 
    }
    }

    &:focus {
      border: ${theme.borders.secondary};
      box-shadow: 0px 0px 5px 1px ${theme.colors.secondary};
      outline: none;
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xsmall};
    }
  `}
`;
