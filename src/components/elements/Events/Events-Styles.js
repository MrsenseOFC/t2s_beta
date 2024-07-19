import styled, { css } from 'styled-components';
import { SubtitleElement } from '../Subtitle/Subtitle-Styles';
import { TextElement } from '../Text/Text-Styles';

export const EventsWrapper = styled.div`
  ${({ theme }) => css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
  `}
`;

export const EventsContainer = styled.div`
  ${({ theme }) => css`
    .swiper-wrapper{
      width: 400px;
      height: 300px;
    }
  `}
`;
