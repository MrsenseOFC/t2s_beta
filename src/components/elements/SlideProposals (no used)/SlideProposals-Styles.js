import styled, { css } from 'styled-components';
import ReactPaginate from 'react-paginate';
import { ButtonElement } from '../Button/Button-Styles.js';
import { Title } from '../ImageCard/ImageCard-Styles.js';
import { fadeIn, slideIn } from '../../../styles/animations.js';
import { GridLayoutContainer } from '../../GridLayout/GridLayout-Styles.js';
import { RowContainer } from '../../RowContainer/Row-Styles.js.js';
import { ProposalCardElement } from '../ProposalCard/ProposalCard-Styles.js';

export const SlideProposalsContainer = styled.div`
  ${({ theme }) => css`
   width: 100%;
   height: 100%;
   animation: ${slideIn} 500ms ease-out;

   & .swiper-wrapper {
      height: 100%;
      width: 100%;
      border-radius: 15px;
    }

    & .swiper-slide {
      height: 100%;
      width: 200px;
      border-radius: 15px;
    }

    .swiper-container {
     width: 100%;
    }

   ${Title} {

    font-size: ${theme.sizes.small};

    @media ${theme.medias.smallpc} {
      font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.xsmall};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xxsmall};
    }
   }

   ${ProposalCardElement} {
    width: 300px;
   }
  `}
`;

export const ModalContainer = styled.div`
  ${({ theme }) => css`
   width: 100%;
   height: 100%;
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
  `}
`;
