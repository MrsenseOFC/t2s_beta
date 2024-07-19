import styled, { css } from 'styled-components';
import { ColumnContainer } from '../../../components/ColumnContainer/Column-Styles.js';
import { FloatingHeaderContainer } from '../../../components/Headers/FloatingHeader/FloatingHeader-Styles.js';
import { IconContainer } from '../../../components/elements/IconDiv/IconDiv-Styles.js';
import { NavContainer } from '../../../components/Nav/Nav-Styles.js';
import { FloatingMenuContainer } from '../../../components/FloatingMenu/FloatingMenu-Styles.js';

export const StaffDashboardContainer = styled.section`
  ${({ theme }) => css`


  ${FloatingHeaderContainer} {
      justify-content: flex-end;

      @media ${theme.medias.tablet} {
        justify-content: center;
      }

      @media ${theme.medias.mobile} {
        justify-content: flex-end;
      }

      ${NavContainer} {
        @media ${theme.medias.mobile} {
         display: none;
        }
      }

      ${IconContainer} {
        display: none;
        animation: none;

        @media ${theme.medias.mobile} {
          display: flex;
        }
      }
    }

    > ${FloatingMenuContainer} {
      display: none;
      flex-direction: column;
      gap: ${theme.spacings.small};
      padding: ${theme.spacings.medium};

      @media ${theme.medias.mobile} {
        display: flex;
      }
    }
      
    >${ColumnContainer} {
      width: 100%;
      max-width: 1250px;
      margin: 0 auto;
      gap: ${theme.spacings.xlarge};
      padding: ${theme.spacings.medium};


      @media ${theme.medias.tablet} {
        width: 100%;
      }
    }

    
  `}
`;
