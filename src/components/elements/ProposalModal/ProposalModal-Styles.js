import styled, { css } from 'styled-components';
import { GridTwoColumnContainer } from '../../GridTwoColumn/GridTwoColumn-Styles';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { slideIn } from '../../../styles/animations';
import { RowContainer } from '../../RowContainer/Row-Styles.js';
import { ButtonElement } from '../Button/Button-Styles.js';

export const ProposalModalElement = styled.div`
  ${({ theme }) => css`
     animation: ${slideIn} 500ms;

     border-radius: 15px;
     overflow-y: auto;
     border: ${theme.borders.xwhite};
     background: rgba(0, 0, 0, 0.8);

     display: flex;
     flex-direction: column;
     gap: ${theme.spacings.xlarge};

     position: absolute;
     z-index: 5000; 

     width: 70%;
     padding: ${theme.spacings.xxlarge};


     transition: all 700ms ease-in-out;     

     @media ${theme.medias.smallpc} {
      width: 100%;
      max-height: 700px;
      padding: ${theme.spacings.medium};
     }

     @media ${theme.medias.tablet} {
      max-height: 85%;
     }

     @media ${theme.medias.smallmobile} {
      max-height: 60%;
     }

     &:hover {
      background: rgba(0, 0, 0, 0.9);
      box-shadow: 0px 0px 10px 2px white;
      backdrop-filter: blur(2px);
     }


     ${GridTwoColumnContainer} {
      width: 100%;
      height: auto;
      justify-content: space-between;
      grid-gap: 5px 100px;
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

      > h1 {
        margin: auto 0;
      }
     }
  `}
`;
