import React, { useContext } from 'react';
import Prop from 'prop-types';
import * as Styled from './MyOpportunities-Styles';
import { GridEditableProposals } from '../../../../components/elements/GridEditableProposals/GridEditableProposals';

export function MyOpportunities({ opportunities }) {
  return (
    <Styled.MyOpportunitiesContainer>

      <GridEditableProposals title="Minhas oportunidades" items={opportunities} />

    </Styled.MyOpportunitiesContainer>
  );
}

MyOpportunities.propTypes = {
  opportunities: Prop.arrayOf(Prop.object),
};
