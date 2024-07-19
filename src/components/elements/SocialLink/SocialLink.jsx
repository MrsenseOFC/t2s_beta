import Prop from 'prop-types';
import React from 'react';
import { Youtube as YoutubeIcon } from '@styled-icons/boxicons-logos/Youtube';
import {
  FacebookCircle as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, Tiktok as TiktokIcon,
} from '@styled-icons/boxicons-logos';

import * as Styled from './SocialLink-Styles';
import { StyledLink } from '../StyledLink/StyledLink';
import { theme } from '../../../styles/theme';

export function SocialLink({ type }) {
  const fixedType = type.toLowerCase();

  return (
    <Styled.SocialLinkElement>
      {fixedType === 'youtube' && (
        <StyledLink path="https://www.youtube.com" hovercolor="#FF0000" newtab>
          <YoutubeIcon />
        </StyledLink>
      )}

      {fixedType === 'facebook' && (
      <StyledLink path="https://www.facebook.com" hovercolor="#1877f2" newtab>
        <FacebookIcon />
      </StyledLink>
      )}

      {fixedType === 'twitter' && (
      <StyledLink path="https://www.x.com" hovercolor="#1DA1F2" newtab>
        <TwitterIcon />
      </StyledLink>
      )}

      {fixedType === 'instagram' && (
      <StyledLink path="https://www.instagram.com" hovercolor="#C13584" newtab>
        <InstagramIcon />
      </StyledLink>
      )}

      {fixedType === 'tiktok' && (
      <StyledLink path="https://www.tiktok.com" hovercolor="#ff0050" newtab>
        <TiktokIcon />
      </StyledLink>
      )}

    </Styled.SocialLinkElement>
  );
}

SocialLink.propTypes = {
  type: Prop.string.isRequired,
};
