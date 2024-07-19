import styled, { css } from 'styled-components';
import { spin360Left, spin360Right, zoomIn } from '../../../styles/animations';

export const IconCardContainer = styled.div`
  ${({
    theme, hovercolor, active, activecolor, color, bgcolor, bghover,
  }) => css`
    background: ${bgcolor};
    animation: ${active ? spin360Right : spin360Left} 1000ms;

    width: 100%;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.small};
    justify-content: center;

    padding: ${theme.spacings.small};
    border: ${active ? `1px solid ${activecolor}` : theme.borders.white};
    box-shadow: ${active ? `0px 0px 10px 4px ${activecolor}` : 'none'};

    transition: all 500ms ease-in-out ;

     &:hover {
      box-shadow: ${active ? `0px 0px 10px 4px ${activecolor}` : `0px 0px 10px 4px ${theme.colors.gray}`};

       /* transform: scale(1.05); */
       background: ${bghover};

        > svg {
          transform: scale(1.05);
          color: ${hovercolor};
        }
      }

      > svg {
        width: 50%;
        height: 50%;
        transition: all 500ms ease-in-out ;
        color: ${active ? activecolor : color};
      }
  `}
`;
