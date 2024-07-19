import React, { useReducer } from 'react';
import Prop from 'prop-types';
import { PlayerContext } from './PlayerContext';
import { playerReducer } from './playerReducer';
import { playerData } from './playerData';

export function PlayerProvider({ children }) {
  const [playerState, playerDispatch] = useReducer(playerReducer, playerData);

  return (
    <PlayerContext.Provider value={{ playerState, playerDispatch }}>
      {children}
    </PlayerContext.Provider>
  );
}

PlayerProvider.propTypes = {
  children: Prop.node.isRequired,
};
