import styled, { css } from 'styled-components';
import { PopupElement } from '../../../elements/Popup/Popup-Styles';

export const SettingsMenuContainer = styled.div`
  ${({ theme }) => css`

      ${PopupElement} {
        margin-top: 20px;
      }
  `}
`;
