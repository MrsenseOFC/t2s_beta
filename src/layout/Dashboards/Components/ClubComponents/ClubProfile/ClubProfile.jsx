import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './ClubProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { ProfileSlide } from '../../../../../components/elements/ProfileSlide/ProfileSlide';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { Row } from '../../../../../components/RowContainer/Row';
import { ClubContext } from '../../../../../contexts/userContext/ClubProvider/ClubContext';

export function ClubProfile() {
  const clubContext = useContext(ClubContext);
  const { clubState, clubDispatch } = clubContext;

  return (
    <Styled.ClubProfileContainer>

      <ProfileInfo items={clubState.profile.info} />

      <ProfileSlide items={clubState.profile.photos} title="Fotos / Vídeos" ownerview />

      <Row>
        <Historic items={clubState.profile.leagues} title="Competições em disputa" />
      </Row>

      <TextSlide items={clubState.profile.championships} title="Títulos:" />
    </Styled.ClubProfileContainer>
  );
}
