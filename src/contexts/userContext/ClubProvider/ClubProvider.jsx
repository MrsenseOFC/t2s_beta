import React, { useReducer } from 'react';
import Prop from 'prop-types';
import { ClubContext } from './ClubContext';
import { clubReducer } from './clubReducer';
import { clubData } from './clubData';

export function ClubProvider({ children }) {
  const [clubState, clubDispatch] = useReducer(clubReducer, clubData);

  return (
    <ClubContext.Provider value={{ clubState, clubDispatch }}>
      {children}
    </ClubContext.Provider>
  );
}

ClubProvider.propTypes = {
  children: Prop.node.isRequired,
};
