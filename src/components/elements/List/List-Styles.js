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
    gap: ${theme.spacings.small};
    color: ${theme.colors.white};
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    list-style: none; /* Remove default disc markers */

  `}
`;

export const ListItem = styled.li`
  ${({ theme, color }) => css`
   width: 100%;
   text-align: start;
   font-size: ${theme.sizes.medium};

   &::before {
      content: ''; 
      display: inline-block;
      width: 7px; 
      height: 7px; 
      box-shadow: 0px 0px 10px 1px ${color || theme.colors.white};
      background-color: ${color || theme.colors.white};
      border-radius: 50%; 
      margin-right: ${theme.spacings.small}; 
    }

   @media ${theme.medias.mobile} {
    font-size: ${theme.sizes.small};
   }
  `}
`;
