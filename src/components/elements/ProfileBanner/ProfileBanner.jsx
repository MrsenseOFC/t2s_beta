import Prop from 'prop-types';
import React from 'react';
import { ImageAdd as AddImageIcon } from '@styled-icons/fluentui-system-filled';
import * as Styled from './ProfileBanner-Styles';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';
import { theme } from '../../../styles/theme';
import { Button } from '../Button/Button';
import { Nav } from '../../Nav/Nav';

export function ProfileBanner({ backgroundimagesrc, children, ownerview }) {
  return (
    <Styled.ProfileBannerWrapper backgroundimagesrc={backgroundimagesrc}>

      <Styled.ProfileBannerContainer>
        {children}
      </Styled.ProfileBannerContainer>

      {ownerview && (
        <AuthIconFile id="changeBannerPicture" hovercolor={theme.colors.primary} name="Botão para alterar o banner do seu perfil">
          <AddImageIcon />
        </AuthIconFile>
      )}

    </Styled.ProfileBannerWrapper>
  );
}

ProfileBanner.propTypes = {
  children: Prop.node.isRequired,
  ownerview: Prop.bool,
  backgroundimagesrc: Prop.string,
};
