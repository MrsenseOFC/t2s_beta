import React, { useContext, useState } from 'react';
import * as Styled from './Opportunities-Styles';
import { GridProposals } from '../../../../components/elements/GridProposals/GridProposals';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { Title } from '../../../../components/elements/Title/Title';
import { AuthDropdown } from '../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { AuthSearch } from '../../../../components/elements/AuthElements/AuthSearch/AuthSearch';

export function Opportunities() {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const playerContext = useContext(PlayerContext);
  const { playerState, playerDispatch } = playerContext;

  const proposals = [
    ...s2tState.proposals[playerState.type.gender][playerState.type.category].agents,
    ...s2tState.proposals[playerState.type.gender][playerState.type.category].clubs,
  ];

  return (
    <Styled.OpportunitiesContainer>

      <GridProposals title="Oportunidades" items={proposals} />

    </Styled.OpportunitiesContainer>
  );
}
