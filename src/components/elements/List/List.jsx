import Prop from 'prop-types';
import React from 'react';
import * as Styled from './List-Styles';

export function List({ children }) {
  return (
    <Styled.ListWrapper>
      <Styled.ListContainer>
        {children}
      </Styled.ListContainer>
    </Styled.ListWrapper>

  );
}

List.propTypes = {
  children: Prop.node.isRequired,
};
