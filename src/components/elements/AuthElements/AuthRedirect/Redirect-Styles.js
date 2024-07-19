import styled, { css } from 'styled-components';
import { LinkContainer } from '../../StyledLink/StyledLink-Styles';

export const AuthRedirectElement = styled.div`
  ${({ theme }) => css`
    text-align: center;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;

    margin: 0 auto;

    & p,  {
      color: ${theme.colors.white};
      font-size: ${theme.sizes.small};
      font-weight: 300;
    }

    & ${LinkContainer} {
      font-size: ${theme.sizes.medium};

      @media ${theme.medias.mobile} {
        font-size: ${theme.sizes.small};
      }
    }
  `}
`;
