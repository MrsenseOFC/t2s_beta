import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Bubble-Styles';

export function Bubble({ children }) {
  return (
    <Styled.BubbleContainer>
      {children}
    </Styled.BubbleContainer>
  );
}

Bubble.propTypes = {
  children: Prop.node.isRequired,
};
