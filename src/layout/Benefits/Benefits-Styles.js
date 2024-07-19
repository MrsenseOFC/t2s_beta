import styled, { css } from 'styled-components';
import { StandardHeaderContainer } from '../../components/Headers/StandardHeader/StandardHeader-Styles';
import { NavContainer } from '../../components/Nav/Nav-Styles';
import { IconContainer } from '../../components/elements/IconDiv/IconDiv-Styles';
import { MobileNavContainer } from '../../components/MobileNav/MobileNav-Styles';

export const BenefitsPage = styled.section`
  ${({ theme }) => css`


  ${StandardHeaderContainer} {

    ${NavContainer} {
      @media ${theme.medias.tablet} {
      display: none;
    }
    }

    ${IconContainer} {
      display: none;
      animation: none;
        @media ${theme.medias.tablet} {
          display: flex;
        }
    }
  }

  ${MobileNavContainer} {
  position: absolute;
  top: 80px;
  }

  `}
`;
