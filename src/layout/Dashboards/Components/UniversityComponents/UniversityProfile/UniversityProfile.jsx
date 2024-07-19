import Prop from 'prop-types';
import React, { useContext } from 'react';
import * as Styled from './UniversityProfile-Styles';
import { ProfileInfo } from '../../../../../components/elements/ProfileInfo/ProfileInfo';
import { ProfileSlide } from '../../../../../components/elements/ProfileSlide/ProfileSlide';
import { Historic } from '../../../../../components/elements/Historic/Historic';
import { TextSlide } from '../../../../../components/elements/TextSlide/TextSlide';
import { Row } from '../../../../../components/RowContainer/Row';
import { UniversityContext } from '../../../../../contexts/userContext/UniversityProvider/UniversityContext';

export function UniversityProfile() {
  const universityContext = useContext(UniversityContext);
  const { universityState, univeristyDispatch } = universityContext;

  return (
    <Styled.UniversityProfileContainer>

      <ProfileInfo items={universityState.profile.info} />

      <ProfileSlide items={universityState.profile.photos} title="Fotos / Vídeos" ownerview />

      <Row>
        <Historic items={universityState.profile.leagues} title="Competições em disputa" />
      </Row>

      <TextSlide items={universityState.profile.championships} title="Títulos:" />
    </Styled.UniversityProfileContainer>
  );
}
