import styled, { css } from 'styled-components';

export const AuthCheckboxContainer = styled.label`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xsmall};
    color: ${theme.colors.white};

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.small};
    }
  `}
`;

export const AuthCheckboxInput = styled.input`
  ${({ theme }) => css`
   position: relative;
   width: 16px;
   height: 16px;
   appearance: none;
   border: ${theme.borders.xwhite};
   border-radius: 50%;
   outline: none;
   cursor: pointer;

   

   &:checked::before {
     opacity: 1;
   }
   
   &::before {
   content: '';
   position: absolute;
   top: 50%;
   left: 50%;
   border-radius: 50%;
   transform: translate(-50%, -50%);
   width: 8px;
   height: 8px;
   background-color: ${theme.colors.secondary}; 
   opacity: 0;
   transition: opacity 300ms ease-in-out;
   }    
 `}
`;
