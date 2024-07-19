import styled, { css } from 'styled-components';
import { slideIn } from '../../../styles/animations';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { RowContainer } from '../../RowContainer/Row-Styles.js';
import { TextElement } from '../Text/Text-Styles.js';
import { ButtonElement } from '../Button/Button-Styles.js';
import { IconContainer } from '../IconDiv/IconDiv-Styles.js';

export const ReportModalElement = styled.div`
  ${({ theme }) => css`
     display: flex;
     flex-direction: column;
     gap: ${theme.spacings.xlarge};

     padding: ${theme.spacings.large};


     @media ${theme.medias.smallpc} {
      padding: ${theme.spacings.medium};
     }

     ${ButtonElement} {
      animation: ${slideIn} 1000ms;
      padding: ${theme.spacings.medium};
     }

     & ${IconContainer} {
      animation: none;
     }


     ${TextElement}{
      animation: ${slideIn} 1000ms;
     }

     > ${RowContainer} {
      justify-content: space-between;
      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }

      > ${SubtitleElement} {
        margin: auto 0;
      }
     }
     
  `}
`;

export const ReportedMessageWrapper = styled.div`
  ${({ theme }) => css`
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  z-index: 999; 

  display: flex;
  align-items: center;
  justify-content: center;
  `}
`;
