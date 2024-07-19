import styled, { css } from 'styled-components';
import { fadeIn } from '../../../../styles/animations';

export const AuthDropdownContainer = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: inline-block;
    font-family: ${theme.fonts.primary};
  `}
`;

export const DropdownContent = styled.div`
  ${({ theme }) => css`  
    animation: ${fadeIn} 300ms;
    position: absolute;
    margin-top: ${theme.spacings.small};
    background-color: ${theme.colors.black};
    border: ${theme.borders.white};
    border-radius: 10px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 1);
    z-index: 2000;
    width: 100%;
    font-family: ${theme.fonts.primary};

    transition: all 500ms ease-in-out;

    &:hover {
      border: ${theme.borders.primary};
    }
  `}
`;

export const DropdownItem = styled.p`
  ${({ theme }) => css`
  color: ${theme.colors.white};
  border-radius: 8px;
  padding: ${theme.spacings.small};
  font-size: ${theme.sizes.medium};
  text-decoration: none;
  text-align: left;
  user-select: none;
  transition: all 400ms ease-in-out;
  

  &:hover {
    color: ${theme.colors.black};
    background-color: ${theme.colors.primary};
  }

  @media ${theme.medias.mobile} {
    font-size: ${theme.sizes.small};
  }

  @media ${theme.medias.smallmobile} {
    font-size: ${theme.sizes.xsmall};
  }
  `}
`;

export const DropdownTitle = styled.p`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    color: ${theme.colors.lightgray};
    font-size: ${theme.sizes.medium};
    user-select: none;
    
    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
    }
  `}
`;

export const DropdownButton = styled.button`
  ${({ theme, active }) => css`
  background-color: ${theme.colors.transparent};
  color: ${active ? theme.colors.primary : theme.colors.white};
  border: ${active ? theme.borders.primary : theme.borders.white};
  border-radius: 10px;
  user-select: none;
  width: 100%;
  padding: ${theme.spacings.small};
  cursor: pointer;
  font-family: ${theme.fonts.primary};
  

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: all 500ms ease-in-out;
  box-shadow: ${active ? `0px 0px 5px 1px ${theme.colors.primary}` : `0px 0px 5px 1px ${theme.colors.transparent}`};


  &:hover {
    color: ${theme.colors.primary};
    border: ${theme.borders.primary};

    & svg {
      color: ${theme.colors.primary};
    }
  }

  & svg {
    width: 20px;
  }

  `}
`;
