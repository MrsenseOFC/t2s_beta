import Prop from 'prop-types';
import React from 'react';
import * as Styled from './MyEvents-Styles';

export function MyEvents({ children }) {
  return (
    <Styled.MyEventsContainer>
      {children}
    </Styled.MyEventsContainer>
  );
}

MyEvents.propTypes = {
  children: Prop.node.isRequired,
};
