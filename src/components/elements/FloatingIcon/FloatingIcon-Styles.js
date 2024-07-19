import styled, { css } from 'styled-components';
import { slideIn } from '../../../styles/animations';

export const FloatingIconElement = styled.div`
  ${({ theme }) => css`
    animation: ${slideIn} 300ms;
    background: ${theme.colors.black};
    border: ${theme.borders.white};
    box-shadow: 0px 0px 10px 2px ${theme.colors.white};
    border-radius: 50%;

    display: none;

    position: fixed;
    bottom: 20px;
    right: 20px;

    padding: ${theme.spacings.xsmall};
   
    z-index: 101;
    transition: all 500ms ease-in-out;
    width: 50px;

    @media ${theme.medias.tablet} {
      display: block;
    }

    &:hover {
     color: ${theme.colors.primary};
     border: ${theme.borders.primary};
     box-shadow: 0px 0px 10px 2px ${theme.colors.primary};
     > svg {
      color: ${theme.colors.primary};
     }
    }

    > svg {
      width: 100%;
      color: ${theme.colors.white};
      transition: all 500ms ease-in-out;
    }
  `}
`;
