import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;

     &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.lightgray}; 
      border-radius: 0px 15px 15px 0px; 

    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.transparent}
      border-radius: 0px 15px 15px 0px; 
    }
    }
    

    body, html {
      background: ${({ theme }) => theme.colors.black};
      box-sizing: border-box;
    }

    [data-rmiz-modal-overlay='hidden'] {
     background-color: rgba(255, 255, 255, 0);
     
    }

    [data-rmiz-modal-overlay='visible'] {
      background-color: ${({ theme }) => theme.colors.black};

      /* @media ${({ theme }) => theme.medias.tablet} {
       display: none;
      } */
    }

//CSS Global para os Slides usados via Swiper

.swiper-container {
}

.swiper-button-next, 
.swiper-button-prev {
  color: ${({ theme }) => theme.colors.white};
}

.swiper-button-next:after, 
.swiper-button-prev:after {
  font-size: ${({ theme }) => theme.sizes.xxlarge};

  @media ${({ theme }) => theme.medias.mobile} {
    font-size: ${({ theme }) => theme.sizes.medium};
  };

  @media ${({ theme }) => theme.medias.smallmobile} {
    font-size: ${({ theme }) => theme.sizes.small};
  };
}

.swiper-button-next.swiper-button-disabled, 
.swiper-button-prev.swiper-button-disabled {
    opacity: 0;
}

.swiper-pagination-bullet-active {
  background-color: ${({ theme }) => theme.colors.white} !important;
}

.swiper-wrapper{
    /* padding-bottom: 30px;
    padding-top: 30px; */
}

.swiper-pagination-bullet{
  background-color: ${({ theme }) => theme.colors.white};
  width: 8px;
  height: 8px;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 5px;
    height: 5px;
  };
}

.swiper-scrollbar {
  background: ${({ theme }) => theme.colors.white};
}

.swiper-lazy-preloader {
}



`;

export default GlobalStyles;
