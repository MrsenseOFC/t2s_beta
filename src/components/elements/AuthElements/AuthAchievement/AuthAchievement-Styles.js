import styled, { css } from 'styled-components';

export const AuthAchievementContainer = styled.div`
  ${({ theme }) => css`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    @media ${theme.medias.smallpc} {
      width: 100%;
    }
  `}
`;

export const AuthAchievementTitle = styled.h4`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: 400;
  `}
`;
