import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import { fadeIn, slideIn } from '../../../styles/animations';

export const ModalWrapper = styled.div`
  ${({ theme }) => css`
   background: rgba(0,0,0,0.7);
   animation: ${fadeIn} 700ms;

   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   z-index: 1000;

   display: flex;
   align-items: center;
   justify-content: center;

   width: 100%;
   height: 100%;
  `}
`;

export const ImageModalContainer = styled.div`
  ${({ theme }) => css`
    border-radius: 15px;
    position: relative;
    transition: all 500ms ease-in-out; 

    ${IconContainer} {
      z-index: 10;
      position: absolute;
      top: 5px;
      right: 10px;
      animation: none;
    }
  `}
`;

export const ImageContainer = styled.div`
  ${({ theme }) => css`
    & img {
      max-width: 100%;
      max-height: 700px;
      user-select: none;
      border-radius: 12px;
    }
  `}
`;
