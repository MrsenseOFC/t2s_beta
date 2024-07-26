import styled, { css } from 'styled-components';
import { fadeIn, slideIn } from '../../../../styles/animations';
import { GridTwoColumnContainer } from '../../../GridTwoColumn/GridTwoColumn-Styles';
import { SubtitleElement } from '../../Subtitle/Subtitle-Styles';
import { ButtonElement } from '../../Button/Button-Styles';
import { RowContainer } from '../../../RowContainer/Row-Styles.js';
import { AuthCheckboxContainer } from '../../AuthElements/AuthCheckbox/AuthCheckbox-Styles.js';
import { LinkContainer } from '../../StyledLink/StyledLink-Styles.js';
import { TextElement } from '../../Text/Text-Styles.js';

export const EventModalContainer = styled.div`
  ${({ theme }) => css`
   animation: ${fadeIn} 500ms;

   border-radius: 15px;
   overflow-y: auto;
   border: ${theme.borders.xwhite};
   background: rgba(0, 0, 0, 0.8);

   display: flex;
   flex-direction: column;
   gap: ${theme.spacings.xlarge};
   
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 5000; 
   text-align: start;

   max-width: 650px;
   max-height: 70%;
   padding: ${theme.spacings.xxlarge};


   transition: all 700ms ease-in-out;     

    @media ${theme.medias.smallpc} {
     max-width: none;
     width: 80%;
     padding: ${theme.spacings.medium};
    }


    @media ${theme.medias.mobile} {
     max-height: 60%;
     width: 90%;
    }   


    &:hover {
      background: rgba(0, 0, 0, 0.9);
      box-shadow: 0px 0px 10px 2px white;
    }


    ${GridTwoColumnContainer} {
      width: 100%;
      height: auto;
      justify-content: space-between;
      grid-gap: ${theme.spacings.xsmall};
    }

    ${SubtitleElement} {
      margin-bottom: 0px;
    }

    ${ButtonElement} {
      padding: ${theme.spacings.medium};
    }

    ${RowContainer} {
      justify-content: space-between;
    
      @media ${theme.medias.smallpc} {
       flex-direction: row;
      }
    }

    ${AuthCheckboxContainer} {
      gap: ${theme.spacings.small};
    }


    ${LinkContainer} {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      gap: ${theme.spacings.small};

      ${TextElement}, svg {
        color: ${theme.colors.lightprimary};
        transition: all 500ms ease-in-out;
      }

      &:hover {
        & svg, ${TextElement} {
          color: ${theme.colors.primary};
        }
      }
     }
  `}
`;
