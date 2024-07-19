import styled, { css } from 'styled-components';
import { fadeIn } from '../../../../styles/animations';

export const AuthFileContainer = styled.label`
  ${({ theme }) => css`
    animation: ${fadeIn} 500ms;
    color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
    font-size: ${theme.sizes.medium};

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
    }
  `}
`;

export const AuthFileInput = styled.input`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
  
    &::-webkit-file-upload-button { 
        font-family: ${theme.fonts.primary};
        background: ${theme.colors.transparent};
        border: ${theme.borders.xwhite};
        padding: ${theme.spacings.xsmall};
        border-radius: 10px;
        color: ${theme.colors.white};
        cursor: pointer;
        transition: all 500ms ease-in-out;
        font-size: ${theme.sizes.small};

        &:hover {
          border: ${theme.borders.xsecondary};
          color: ${theme.colors.secondary};
        }
      }
  `}
`;
