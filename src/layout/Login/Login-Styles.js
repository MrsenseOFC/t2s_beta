import styled, { css } from 'styled-components';
import { slideIn } from '../../styles/animations';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

export const LoginPage = styled.section`
  ${({ theme }) => css`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 1)
      ),
      url('/assets/images/backgrounds/login_register.png');

     background-position: right;
     background-size: cover;
    
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     

     height: 100vh;

     ${AuthContainer} {
      max-width: 350px;
      height: auto;

      @media ${theme.medias.tablet} {
       width: 90%;
      }
     }
  `}
`;
