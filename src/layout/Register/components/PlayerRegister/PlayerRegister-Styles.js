import styled, { css } from 'styled-components';
import { RowContainer } from '../../../../components/RowContainer/Row-Styles.js';
import { ButtonElement } from '../../../../components/elements/Button/Button-Styles.js';

export const PlayerRegisterContainer = styled.section`
  ${({ theme }) => css`
      background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.8)
      ),
      url('/assets/images/background.png');

     background-position: center;
     background-size: cover;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center; 
     gap: ${theme.spacings.medium};

     > ${RowContainer} {
      justify-content: center;
      
      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
     }
    }
  `}
`;
