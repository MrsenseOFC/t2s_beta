import styled, { css } from 'styled-components';
import { RowContainer } from '../../../../components/RowContainer/Row-Styles.js';
import { slideIn } from '../../../../styles/animations.js';
import { LinkContainer } from '../../../../components/elements/StyledLink/StyledLink-Styles.js';

export const EventsContainer = styled.article`
  ${({ theme }) => css`
    animation: ${slideIn} 500ms;
    display: flex;
    flex-direction: column;
    width: 100%;


    ${RowContainer} {
      width: 100%;
      justify-content: space-between;
    }
    
    ${LinkContainer} {
      max-width: none;
    }
    
  `}
`;
