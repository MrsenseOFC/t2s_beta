import styled, { css } from 'styled-components';
import { GridLayoutContainer } from '../../../../../../components/GridLayout/GridLayout-Styles';

export const GridEventsContainer = styled.div`
  ${({ theme }) => css`
  ${GridLayoutContainer} {
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));

      @media ${theme.medias.smallpc} {
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      }

      @media ${theme.medias.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
      }

      @media ${theme.medias.mobile} {
        grid-template-columns: repeat(auto-fit, minmax(90%, 1fr));
      }
     }
 
  `}
`;
