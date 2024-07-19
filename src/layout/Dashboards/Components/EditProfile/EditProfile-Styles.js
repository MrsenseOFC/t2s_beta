import styled, { css } from 'styled-components';
import { AuthContainer } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { RowContainer } from '../../../../components/RowContainer/Row-Styles.js';
import { AuthHistoricContainer } from '../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric-Styles.js';

export const EditProfileContainer = styled.article`
  ${({ theme }) => css`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
      ),
      url('/assets/images/background.png');
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     ${AuthContainer} {
      width: 100%;
     }

     & ${RowContainer} {
      > ${AuthHistoricContainer} {
      width: 50%;

      @media ${theme.medias.smallpc} {
        width: 100%;
      }
     } 
     }
  `}
`;
