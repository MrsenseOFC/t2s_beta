import styled, { css } from 'styled-components';
import { slideInRight } from '../../styles/animations';
import { LinkContainer } from '../elements/StyledLink/StyledLink-Styles';
import { NavContainer } from '../Nav/Nav-Styles';

export const ProfileHeaderContainer = styled.header`
  ${({ theme, type }) => css`
     animation: ${slideInRight} 500ms ease-out;
     animation-fill-mode: forwards; /* Manter o estado final após a animação */
     background-image: linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.primary});

     width: 100%;
     margin: 0 auto;

     display: flex;
     align-items: center;
     justify-content: center;
     align-content: center;
     flex-direction: column;
     max-width: 1230px;
     border-radius: 12px;
  
  
     border: ${theme.borders.white};
     box-shadow: 0px 0px 5px 1px ${theme.colors.white};
  

     @media ${theme.medias.tablet} {
      display: none;
     }

     ${LinkContainer} {
      position: relative;
      transition: all 800ms ease-in-out;
      border-radius: 12px;
      padding: 1px ${theme.spacings.xsmall};
      
      @media ${theme.medias.smallpc} {
        font-size: ${theme.sizes.small};
      }
     }
  `}
`;
