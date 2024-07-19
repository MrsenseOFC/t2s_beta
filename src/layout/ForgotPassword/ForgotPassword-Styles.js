import styled, { css } from 'styled-components';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { PopupElement } from '../../components/elements/Popup/Popup-Styles';

export const ForgotPasswordPage = styled.section`
  ${({ theme }) => css`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 1)
      ),
      url('/assets/images/background.png');

     background-position: center;
     background-size: cover;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     height: 100vh;

     ${AuthContainer} {
      max-width: 500px;
      height: auto;

      @media ${theme.medias.tablet} {
       width: 90%;
      }
     }

     ${PopupElement} {
       gap: ${theme.spacings.small};
     }
  `}
`;
