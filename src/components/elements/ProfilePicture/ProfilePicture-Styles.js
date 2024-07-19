import styled, { css } from 'styled-components';
import { IconContainer } from '../IconDiv/IconDiv-Styles';
import { AuthIconFileContainer } from '../AuthElements/AuthIconFile/AuthIconFile-Styles';

export const ProfilePictureContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

export const ProfilePictureElement = styled.div`
  ${({ theme }) => css`
      width: 230px;
      height: 230px;
      padding: ${theme.spacings.small};
      position: relative;
      border-radius: 50%; 

      @media ${theme.medias.smallpc} {
        width: 200px;
        height: 200px;
      } 

      @media ${theme.medias.tablet} {
        width: 150px;
        height: 150px;
      } 

      @media ${theme.medias.mobile} {
        width: 130px;
        height: 130px;
      }

      @media ${theme.medias.smallmobile} {
        width: 100px;
        height: 100px;
      }
  `}
`;

export const Picture = styled.img`
  ${({ theme }) => css`
      border-radius: 50%;
      width: 100%;
      height: 100%;

      object-fit: cover;
  `}
`;

export const Badge = styled.div`
  ${({ theme }) => css`
      border-radius: 50%;    
      width: 40px;
      height: 40px;

      position: absolute;
      bottom: 20px;
      right: 30px;

      @media ${theme.medias.smallpc} {
        bottom: 13px;
      }

      @media ${theme.medias.tablet} {
        width: 35px;
        height: 35px;
        bottom: 10px;
        right: 20px;   
      }


      @media ${theme.medias.mobile} {
        width: 30px;
        height: 30px;
        bottom: 10px;
        right: 20px;   
      }

      @media ${theme.medias.smallmobile} {
        width: 25px;
        height: 25px;
        bottom: 7px;
        right: 15px;  
      }

      ${AuthIconFileContainer} {
        top: 0;
        border-radius: 50%; 



        & ${IconContainer} {
          padding: ${theme.spacings.xsmall};
          border-radius: 50%; 

          background: rgba(0,0,0,0.7);

          &:hover {
            background: rgba(0,0,0,1);
          }
        }
      }

    

      > img {
        height: 30px;
        width: 30px;
       

        @media ${theme.medias.smallpc} {
          height: 25px;
          width: 25px;

       }

        @media ${theme.medias.mobile} {
          height: 20px;
          width: 20px;
         
       }

        @media ${theme.medias.smallmobile} {
          height: 15px;
          width: 15px;
        }
      }
  `}
`;
