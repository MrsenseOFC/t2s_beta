import styled, { css } from 'styled-components';
import { TextElement } from '../../../../components/elements/Text/Text-Styles';
import { slideIn } from '../../../../styles/animations';
import { TitleElement } from '../../../../components/elements/Title/Title-Styles';

export const StoreContainer = styled.article`
  ${({ theme }) => css`
    animation: ${slideIn} 500ms;
    width: 100%;
    height: 100%;
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
    ),
    url('/assets/images/backgrounds/slider-bg-1.png');
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > ${TextElement} {
      margin: ${theme.spacings.medium};
      animation: ${slideIn} 1000ms;
    }

    > ${TitleElement} {
      animation: ${slideIn} 1000ms;
    }
  `}
`;
