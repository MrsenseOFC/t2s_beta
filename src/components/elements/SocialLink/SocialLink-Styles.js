import styled, { css } from 'styled-components';

export const SocialLinkElement = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.darkgray};
    border-radius: 50%;
    padding: ${theme.spacings.xxsmall};
    transition: all 500ms ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 0px 10px 3px ${theme.colors.gray};
    }
     & svg {
      width: 50px;

      @media ${theme.medias.tablet} {
        width: 40px;
      }

      @media ${theme.medias.mobile} {
        width: 30px;
      }
     }
  `}
`;
