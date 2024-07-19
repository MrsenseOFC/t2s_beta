import styled, { css } from 'styled-components';
import { fadeIn } from '../../../../styles/animations';
import { IconContainer } from '../../IconDiv/IconDiv-Styles';

export const AuthIconFileContainer = styled.label`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: absolute; 
    
    ${IconContainer} {
      animation: none;
      position: absolute;  
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `}
`;

export const AuthIconFileInput = styled.input`
  ${({ theme }) => css`
    display: none;
  `}
`;
