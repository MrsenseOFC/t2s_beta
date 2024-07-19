import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileHeader-Styles';
import { Nav } from '../Nav/Nav';
import { StyledLink } from '../elements/StyledLink/StyledLink';
import { theme } from '../../styles/theme';
import { PlayerNav } from './Components/PlayerNav/PlayerNav';
import { ClubNav } from './Components/ClubNav/ClubNav';
import { PublicNav } from './Components/PublicNav/PublicNav';

export function ProfileHeader({ children }) {
  return (
    <Styled.ProfileHeaderContainer>
      {children}
    </Styled.ProfileHeaderContainer>
  );
}

ProfileHeader.propTypes = {
  children: Prop.node.isRequired,
};
