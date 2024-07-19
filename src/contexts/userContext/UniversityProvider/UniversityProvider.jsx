import React, { useReducer } from 'react';
import Prop from 'prop-types';
import { UniversityContext } from './UniversityContext';
import { universityReducer } from './universityReducer';
import { universityData } from './universityData';

export function UniversityProvider({ children }) {
  const [universityState, universityDispatch] = useReducer(universityReducer, universityData);

  return (
    <UniversityContext.Provider value={{ universityState, universityDispatch }}>
      {children}
    </UniversityContext.Provider>
  );
}

UniversityProvider.propTypes = {
  children: Prop.node.isRequired,
};
