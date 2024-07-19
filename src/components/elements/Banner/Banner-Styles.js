import styled, { css } from 'styled-components';
import { fadeIn } from '../../../styles/animations';

export const BannerContainer = styled.div`
  ${({
    theme, backgroundimagesrc, gradientdirection, backgroundfixed,
  }) => css`
    animation: ${fadeIn} 500ms;
    height: 500px;
    width: 100%;
    background: linear-gradient(
    ${gradientdirection || 'to bottom'},
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1)
    ),
    url(${backgroundimagesrc});
    background-size: cover;
    background-position: center;
    background-attachment: ${backgroundfixed ? 'fixed' : 'scroll'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.small};
    padding: ${theme.spacings.small};


    @media ${theme.medias.smallpc} {
      max-height: 500px;
    }

    @media ${theme.medias.tablet} {
      max-height: 400px;
    }

    @media ${theme.medias.mobile} {
      max-height: 300px;
    }
  `}
`;
