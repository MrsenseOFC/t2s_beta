import styled, { css } from 'styled-components';
import { fadeIn, slideOut } from '../../styles/animations';

export const MobileNavContainer = styled.nav`
  ${({ theme }) => css`
     animation: ${fadeIn} 500ms;
     background: rgba(0,0,0,0.8);

     width: 100%;
     z-index: 10;
     padding: ${theme.spacings.large};

     display: none;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: ${theme.spacings.small};

     @media ${theme.medias.tablet} {
       display: flex;
     }
  `}
`;
