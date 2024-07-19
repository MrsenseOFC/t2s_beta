import styled, { css } from 'styled-components';

export const GridTwoColumnContainer = styled.div`
  ${({ theme }) => css`
  width: 100%;
  height: 100%;
  display: grid;
  grid-gap: 5px 30px;
  justify-content: start;
  grid-template-areas:
    "element element"
    "element element"
    "element element";


  @media ${theme.medias.smallpc} {
    grid-template-areas:
    "element"
    "element"
    "element";
  }
  `}
`;
