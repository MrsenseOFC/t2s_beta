import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import {
  fadeOut, shake, slideIn, slideOut,
  spin360Left,
  spin360Right,
} from '../../../styles/animations';

export const ReportIconElement = styled.div`
  ${({ theme, isreporting }) => css`
  ${IconContainer} {
    width: 30px;
    animation: ${isreporting ? spin360Right : spin360Left} 300ms;

    @media ${theme.medias.mobile} {
      width: 25px;
    }

    > svg {
     color: ${isreporting ? theme.colors.red : ''};
     padding: 2px;
     background: ${isreporting && 'black'};
    }
  }
  `}
`;
