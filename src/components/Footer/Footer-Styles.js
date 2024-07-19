import styled, { css } from 'styled-components';
import { fadeIn, slideOut } from '../../styles/animations';
import { RowContainer } from '../RowContainer/Row-Styles.js';
import { NavContainer } from '../Nav/Nav-Styles.js';
import { LinkContainer } from '../elements/StyledLink/StyledLink-Styles.js';

export const FooterContainer = styled.footer`
  ${({ theme }) => css`
    background: linear-gradient(to bottom, ${theme.colors.black}, ${theme.colors.darkgray});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${theme.spacings.small};
    animation: ${slideOut} 300ms ease-out;

    ${RowContainer} {
    animation: ${fadeIn} 2000ms;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacings.medium};

    @media ${theme.medias.smallpc} {
      flex-direction: row;
    }

    
    }
    ${NavContainer} {
       @media ${theme.medias.mobile} {
        flex-direction: column;
        gap: ${theme.spacings.small};
       }

       ${LinkContainer} {
        @media ${theme.medias.tablet} {
          font-size: ${theme.sizes.small};
        }
       }
    }
  `}
`;
