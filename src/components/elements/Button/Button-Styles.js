import styled, { css } from 'styled-components';

export const ButtonElement = styled.button`
  ${({
    theme, size, textcolor, texthover, bgcolor, bghover, border, borderhover, active, gradient,
  }) => css`
    color: ${textcolor};
    background: ${gradient ? `linear-gradient(to right, ${theme.colors.lightsecondary}, ${theme.colors.lightprimary})` : `${bgcolor}`};
    box-shadow: ${active ? `0px 0px 5px 1px ${borderhover}` : 'none'};
    border: 1px solid ${border};
    border-radius: 10px;

    font-family: ${theme.fonts.primary};
    font-weight: 800;
    font-size: ${size};
    text-transform:uppercase;

    padding: ${theme.spacings.xsmall};

    transition: all 800ms ease-in-out;

    &:hover{
      color: ${texthover};
      background: ${bghover};
      border: 1px solid ${borderhover};
    }

    @media${theme.medias.tablet} {
      font-size: ${theme.sizes.xsmall};
    }

    @media${theme.medias.smallmobile} {
      font-size: ${theme.sizes.xxsmall};
    }
  `}
`;
