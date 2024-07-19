import styled, { css } from 'styled-components';
import { AuthHistoricContainer } from '../../../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric-Styles';
import { RowContainer } from '../../../../../../components/RowContainer/Row-Styles.js';
import { AuthAchievementContainer } from '../../../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement-Styles';

export const UniversityContainer = styled.section`
  ${({ theme }) => css`
  
  display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     width: 100%;
     height: 100%;

     ${AuthAchievementContainer} {
      width: 100%;
     }

     & ${RowContainer} {
      > ${AuthHistoricContainer} {
      width: 100%;

      @media ${theme.medias.smallpc} {
        width: 100%;
      }
     } 
     }
    }
  `}
`;
