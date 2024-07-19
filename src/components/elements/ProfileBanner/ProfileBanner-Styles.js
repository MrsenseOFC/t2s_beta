import styled, { css } from 'styled-components';
import { slideOut, spin360Left, spin360Right } from '../../../styles/animations';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { RowContainer } from '../../RowContainer/Row-Styles.js';
import { IconContainer } from '../IconDiv/IconDiv-Styles.js';
import { AuthIconFileContainer } from '../AuthElements/AuthIconFile/AuthIconFile-Styles.js';
import { AuthFormContainer } from '../AuthElements/AuthForm/AuthForm-Styles.js';
import { NavContainer } from '../../Nav/Nav-Styles.js';

export const ProfileBannerWrapper = styled.div`
  ${({ theme, backgroundimagesrc }) => css`
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 1)
    ),
    url(${backgroundimagesrc || '/assets/images/backgrounds/slider-bg-1.png'});
    background-position: center;
    background-size: cover;
    backdrop-filter: blur(10px);
    width: 100%;
    height: 400px;
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};
    
    > ${NavContainer} {
      height: auto;
      position: absolute;
      top: 0px;
    }

    & > ${AuthFormContainer} {
      width: 40px;
      height: 40px;
      position: absolute;
      bottom: 20px;
      right: 20px;

      ${AuthIconFileContainer} {
        width: 40px;
        height: 40px;

        @media ${theme.medias.mobile} {
          width: 25px;
         height: 25px;
        }
      }
    }

  `}
`;

export const ProfileBannerContainer = styled.div`
  ${({ theme }) => css`
    
    color: ${theme.colors.white};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: ${theme.spacings.small};

    width: 100%;
    height: 100%;


    animation: ${slideOut} 300ms ease-out;

    @media ${theme.medias.tablet} {
      flex-direction: column;
      justify-content: center;
      gap: ${theme.spacings.xsmall};
    }

    @media ${theme.medias.mobile} {
      height: 300px;
    }
    

    & ${ColumnContainer} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacings.medium};
    }

   
     > ${RowContainer} {

        align-items: center;
        width: auto;
        gap: ${theme.spacings.xsmall};

        @media ${theme.medias.smallpc} {
          flex-direction: row;
        }

        @media ${theme.medias.tablet} {
          justify-content: center;
        }

        > ${IconContainer} {
          width: 35px;

          @media ${theme.medias.tablet} {
            width: 30px;
          }

          @media ${theme.medias.smallmobile} {
            width: 23px;
          }
         }      
     }
 `}
`;
