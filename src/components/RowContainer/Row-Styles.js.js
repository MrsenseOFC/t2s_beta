import styled, { css } from 'styled-components';
import { TitleElement } from '../elements/Title/Title-Styles';

export const RowContainer = styled.div`
  ${({ theme, color }) => css`
      width: 100%;
      display: flex;
      color: ${theme.colors.white};
      gap: ${theme.spacings.small};

      @media ${theme.medias.smallpc} {
        flex-direction: column;
        gap: ${theme.spacings.small};
      }

      > ${TitleElement} {
        margin-bottom: 0px;
      }
  `}
`;
