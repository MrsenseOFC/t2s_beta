import styled, { css } from 'styled-components';

export const ListWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `}
`;

export const ListContainer = styled.ul`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary};
    padding: ${theme.spacings.small};
    gap: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
  `}
`;

export const ListItem = styled.li`
  ${({ theme }) => css`
   width: 100%;
   text-align: start;
   font-size: ${theme.sizes.medium};

   @media ${theme.medias.mobile} {
    font-size: ${theme.sizes.small};
   }
  `}
`;
