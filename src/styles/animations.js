import { keyframes } from 'styled-components';

export const zoomIn = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0.5;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateY(30% );
    opacity: 0.5;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const slideInRight = keyframes`
  from {
    transform: translateX(-100%); 
    opacity: 0; 
  }

  to {
    transform: translateX(0); 
    opacity: 1; 
  }
`;

export const slideInLeft = keyframes`
  from {
    transform: translateX(100%); 
    opacity: 0; 
  }

  to {
    transform: translateX(0); 
    opacity: 1; 
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0.5;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;

  }
  to {
    opacity: 1;
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;

  }
  to {
    opacity: 0;
  }
`;

export const spin360Right = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const spin360Left = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

export const shake = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-3px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(3px, 0, 0);
  }
`;
