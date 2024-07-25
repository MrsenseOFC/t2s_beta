import styled, { css } from 'styled-components';
import { RowContainer } from '../../components/RowContainer/Row-Styles.js';
import { ButtonElement } from '../../components/elements/Button/Button-Styles.js';
import { fadeIn, slideInRight } from '../../styles/animations.js';
import { SocialLinkElement } from '../../components/elements/SocialLink/SocialLink-Styles.js';
import { TextElement } from '../../components/elements/Text/Text-Styles.js';
import { LinkContainer } from '../../components/elements/StyledLink/StyledLink-Styles.js';
import { NavContainer } from '../../components/Nav/Nav-Styles.js';
import { IconContainer } from '../../components/elements/IconDiv/IconDiv-Styles.js';
import { StandardHeaderContainer } from '../../components/Headers/StandardHeader/StandardHeader-Styles.js';
import { GridLayoutContainer } from '../../components/GridLayout/GridLayout-Styles.js';
import { AuthDropdownContainer, DropdownButton, DropdownItem } from '../../components/elements/AuthElements/AuthDropdown/AuthDropdown-Styles.js';
import { MobileNavContainer } from '../../components/MobileNav/MobileNav-Styles.js';
import { BannerContainer } from '../../components/elements/Banner/Banner-Styles.js';

export const HomePage = styled.main`
  ${({ theme }) => css`

  ${GridLayoutContainer} {
    animation: ${slideInRight} 500ms; 
    grid-gap: 5px;


    @media ${theme.medias.smallpc} {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media ${theme.medias.tablet} {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }

    @media ${theme.medias.mobile} {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }


    ${ButtonElement} {
    font-size: ${theme.sizes.medium};
    width: 100%;
    max-width: 700px;

    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xsmall};
    }

    @media ${theme.medias.smallmobile} {
      font-size: ${theme.sizes.xxsmall};
    }
    }
  }

  ${StandardHeaderContainer} {

    ${NavContainer} {
      @media ${theme.medias.smallpc} {
      display: none;
     }
    }
  }

  ${MobileNavContainer} {
    position: absolute;
    top: 80px;

    @media ${theme.medias.smallpc} {
      display: flex;
    }

    @media ${theme.medias.tablet} {
      top: 75px;
    }
  }

  ${IconContainer} {
    display: none;
    animation: none;

    @media ${theme.medias.smallpc} {
      display: flex;
    }
  }

  ${NavContainer} {
    @media ${theme.medias.mobile} {
      flex-direction: column;
      gap: ${theme.spacings.small};
    }
  }

  ${LinkContainer} {
    @media ${theme.medias.tablet} {
      font-size: ${theme.sizes.small};
    }

    @media ${theme.medias.mobile} {
      font-size: ${theme.sizes.xsmall};
    }


  }

  ${RowContainer} {
    animation: ${fadeIn} 2000ms;
    justify-content: center;
    align-items: center;
    margin-top: ${theme.spacings.medium};


    @media ${theme.medias.smallpc} {
      flex-direction: row;
    }

    @media ${theme.medias.mobile} {
      /* flex-direction: column; */
    }
  }

  ${AuthDropdownContainer} {
    min-width: 180px;
    padding: ${theme.spacings.xxsmall};
  }

  ${DropdownButton} {
    padding: ${theme.spacings.xsmall};
  }

  ${DropdownItem} {
    padding: ${theme.spacings.xsmall};
  }

  ${BannerContainer} {
    height: 270px;
    border: none;
  }
 
  `}
`;
