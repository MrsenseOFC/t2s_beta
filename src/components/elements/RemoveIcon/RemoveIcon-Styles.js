import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles.js';
import {
  slideIn,
} from '../../../styles/animations.js';

export const MessageContainer = styled.div`
  ${({ theme }) => css`
    animation: ${slideIn} 500ms;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: ${theme.spacings.small};
  `}
`;

export const OptionsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};
  `}
`;

export const RemoveIconElement = styled.div`
  ${({ theme, isremoving }) => css`

  ${IconContainer} {
    width: 30px;
    animation: ${slideIn} 500ms;
    padding: 2px;
    background: blue

    @media ${theme.medias.mobile} {
      width: 25px;
    }
  }
  `}
`;
