import styled, { css } from 'styled-components';
import { RowContainer } from '../../RowContainer/Row-Styles.js';
import { fadeIn, slideIn } from '../../../styles/animations.js';
import { ButtonElement } from '../Button/Button-Styles.js';
import { TextElement } from '../Text/Text-Styles.js';

export const PopupOverlay = styled.div`
  ${({ theme }) => css`
  animation: ${fadeIn} 300ms ease-out;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.8);
  z-index: 999; 
  `}
`;

export const PopupElement = styled.dialog`
  ${({ theme }) => css`
     animation: ${slideIn} 500ms ease-out;
     background: rgba(0,0,0,0.9);
     backdrop-filter: blur(10px);
     padding: ${theme.spacings.medium};
     border-radius: 15px;
     border: ${theme.borders.white};
     margin: 0 auto;
     z-index: 1000; 
     


     display: flex;
     flex-direction: column;
     gap: ${theme.spacings.medium};

     @media ${theme.medias.mobile} {
      width: 95%;
     }

     ${RowContainer} {
      justify-content: center;
      
      @media ${theme.medias.smallpc} {
        flex-direction: row;
      }
     }

     ${ButtonElement} {
      min-width: 180px;

      @media ${theme.medias.mobile} {
        min-width: 70px;
      }
     }

     ${TextElement} {
      text-align: center;

      @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.medium};
     }

      @media ${theme.medias.mobile} {
        font-size: ${theme.sizes.xsmall};
      }
     }
  `}
`;
