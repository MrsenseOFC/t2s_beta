import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { shake, slideIn } from '../../../styles/animations';

export const LinkContainer = styled(Link)`
  ${({
    theme, color, active, hovercolor,
  }) => css`
    animation: ${active && shake} 250ms; 
    color: ${active ? theme.colors.black : color};
    background: ${active ? theme.colors.white : 'none'};
    box-shadow: ${active ? '0px 0px 10px 1px #CCCDD2' : 'none'};
    font-family: ${theme.fonts.primary};
    text-decoration: none;
    text-align: center;
    user-select: none;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 400ms ease-in-out;

    &:hover {
      color: ${hovercolor};
    }
  `}
`;
