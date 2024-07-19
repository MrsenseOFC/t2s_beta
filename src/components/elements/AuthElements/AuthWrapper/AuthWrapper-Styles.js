import styled, { css } from 'styled-components';
import { slideIn } from '../../../../styles/animations';

export const AuthWrapper = styled.div`
  ${({ theme }) => css`
  /* background: linear-gradient(
   to bottom,
   rgba(0, 0, 0, 0.8),
   rgba(0, 0, 0, 0.8)
  ),
  url('/assets/images/background.png');

  background-position: center;
  background-size: cover; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;

  width: 100%;
  height: 100%;


  transition: all 500ms ease-in-out;

  @media ${theme.medias.tablet} {
    background-size: contain;
    background-repeat: repeat-y:;
  }
  `}
`;

export const AuthContainer = styled.div`
  ${({ theme }) => css`
  animation: ${slideIn} 300ms ease-out;
  
  background-color: ${theme.colors.transparent};
  backdrop-filter: blur(10px);
  border: ${theme.borders.xwhite};
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 700px;
  height: 100%;
  padding: ${theme.spacings.large};

  transition: all 500ms ease-in-out;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }

  @media ${theme.medias.tablet} {
    width: 90%;
  }

 
  `}
`;
