import React, { useState } from 'react';
import Prop from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import * as Styled from './SlideProposals-Styles';
import { Title } from '../Title/Title';
import { ProposalCard } from '../ProposalCard/ProposalCard';
import { ProposalModal } from '../ProposalModal/ProposalModal';

export function SlideProposals({ items, title }) {
  // Recebe os dados do card clicado pelo usuário
  const [selectedProposal, setSelectedProposal] = useState(null);

  const handleCardClick = (item) => {
    setSelectedProposal(item);
  };

  return (
    <Styled.SlideProposalsContainer>

      <Title text={title} uppercase />

      <Styled.ModalContainer>

        <Swiper
          spaceBetween={0}
          navigation
          loop
          slidesPerView={4}
        >
          {items.map((item) => (
            <SwiperSlide key={item.opportunityId}>
              <ProposalCard
                from={item.details.from}
                date={item.details.date}
                opportunity={item.details.opportunity}
                category={item.details.category}
                country={item.details.country}
                org={item.details.org}
                orglogo={item.details.orglogo}
                orgpath={item.details.orgpath}
                onclick={() => handleCardClick(item)}
                id={item.opportunityId}
                key={item.opportunityId}
              />
            </SwiperSlide>

          ))}
        </Swiper>

        {/* Renderiza um modal com os dados do card clicado pelo usuário */}
        {selectedProposal && (
          <ProposalModal
            from={selectedProposal.details.from}
            date={selectedProposal.details.date}
            opportunity={selectedProposal.details.opportunity}
            category={selectedProposal.details.category}
            country={selectedProposal.details.country}
            org={selectedProposal.details.org}
            orglogo={selectedProposal.details.orglogo}
            orgpath={selectedProposal.details.orgpath}
            minpayment={selectedProposal.details.payment.minPayment}
            maxpayment={selectedProposal.details.payment.maxPayment}
            description={selectedProposal.description}
            requirements={selectedProposal.requirements}
            onclick={() => setSelectedProposal(null)}
          />
        )}

      </Styled.ModalContainer>

    </Styled.SlideProposalsContainer>
  );
}

SlideProposals.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object).isRequired,
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
