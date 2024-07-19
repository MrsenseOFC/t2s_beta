import styled, { css } from 'styled-components';
import { StandardHeaderContainer } from '../../components/Headers/StandardHeader/StandardHeader-Styles';
import { NavContainer } from '../../components/Nav/Nav-Styles';
import { IconContainer } from '../../components/elements/IconDiv/IconDiv-Styles';
import { MobileNavContainer } from '../../components/MobileNav/MobileNav-Styles';
import { FloatingHeaderContainer } from '../../components/Headers/FloatingHeader/FloatingHeader-Styles';
import { FloatingMenuContainer } from '../../components/FloatingMenu/FloatingMenu-Styles';

export const UsersPage = styled.section`
  ${({ theme }) => css`
  


  ${FloatingHeaderContainer} {
    background-image: linear-gradient( ${theme.colors.black}, ${theme.colors.transparent});

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

  > ${FloatingMenuContainer} {
      display: none;
      flex-direction: column;
      gap: ${theme.spacings.small};
      padding: ${theme.spacings.medium};

      @media ${theme.medias.tablet} {
        display: flex;
      }
    }

  ${MobileNavContainer} {
    position: absolute;
    top: 80px;
  }

  `}
`;
