import React, { useState } from 'react';
import Prop from 'prop-types';
import * as Styled from './GridProposals-Styles';
import { Title } from '../Title/Title';
import { GridLayoutContainer, ItemContainer } from '../../GridLayout/GridLayout-Styles';
import { theme } from '../../../styles/theme';
import { Button } from '../Button/Button';
import { ProposalCard } from '../ProposalCard/ProposalCard';
import { ProposalModal } from '../ProposalModal/ProposalModal';

export function GridProposals({ items, title }) {
  const [showMoreItems, setShowMoreItems] = useState(false);
  const itemsToShow = showMoreItems ? items : items.slice(0, 12);
  const handleShowMore = () => setShowMoreItems(!showMoreItems);

  const [selectedProposalIndex, setSelectedProposalIndex] = useState(null);

  if (selectedProposalIndex) {
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  }

  return (
    <Styled.GridProposalsContainer>

      <Title text={title} uppercase />

      <Styled.ModalContainer>

        <GridLayoutContainer>
          {itemsToShow.map((item, index) => (
            <ProposalCard
              from={item.details.from}
              date={item.details.date}
              opportunity={item.details.opportunity}
              category={item.details.category}
              country={item.details.country}
              org={item.details.org}
              orglogo={item.details.orglogo}
              orgpath={item.details.orgpath}
              onclick={() => setSelectedProposalIndex(index)}
              id={item.opportunityId}
              key={item.opportunityId}
            />
          ))}
        </GridLayoutContainer>

        {items?.length > 10 && (

        <Button
          onclick={handleShowMore}
          text={showMoreItems ? 'Mostrar menos' : 'Mostrar mais'}
          bgcolor={theme.colors.black}
          bghover={theme.colors.white}
          textcolor={theme.colors.white}
          texthover={theme.colors.black}
          border={theme.colors.white}
          borderhover={theme.colors.white}
        />
        )}

        {selectedProposalIndex !== null && (
        <ProposalModal
          from={items[selectedProposalIndex].details.from}
          date={items[selectedProposalIndex].details.date}
          opportunity={items[selectedProposalIndex].details.opportunity}
          category={items[selectedProposalIndex].details.category}
          country={items[selectedProposalIndex].details.country}
          org={items[selectedProposalIndex].details.org}
          orglogo={items[selectedProposalIndex].details.orglogo}
          orgpath={items[selectedProposalIndex].details.orgpath}
          minpayment={items[selectedProposalIndex].details.payment.minPayment}
          maxpayment={items[selectedProposalIndex].details.payment.maxPayment}
          description={items[selectedProposalIndex].description}
          requirements={items[selectedProposalIndex].requirements}
          onclick={() => setSelectedProposalIndex(null)}
        />
        )}

      </Styled.ModalContainer>

    </Styled.GridProposalsContainer>
  );
}

GridProposals.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object).isRequired,
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
