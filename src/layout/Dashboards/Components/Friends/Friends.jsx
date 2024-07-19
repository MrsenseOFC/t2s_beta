import React, { useContext } from 'react';
import * as Styled from './Friends-Styles';
import { PlayerContext } from '../../../../contexts/userContext/PlayerProvider/PlayerContext';
import { GridCards } from '../../../../components/elements/GridCards/GridCards';

export function Friends({ friends }) {
  return (
    <Styled.FriendsContainer>
      <GridCards title="Amigos" items={friends} />
    </Styled.FriendsContainer>
  );
}
