import React, { useEffect, useState } from 'react';
import Prop from 'prop-types';
import * as Styled from './GridProposals-Styles';
import { Title } from '../Title/Title';
import { GridLayoutContainer } from '../../GridLayout/GridLayout-Styles';
import { ProposalCard } from '../ProposalCard/ProposalCard';
import { ProposalModal } from '../ProposalModal/ProposalModal';
import { AuthSearch } from '../AuthElements/AuthSearch/AuthSearch';
import { FilterProposals } from '../FilterProposals/FilterProposals';
import { Text } from '../Text/Text';

export function GridProposals({ items, title }) {
  // Pagination stuff
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = items ? items.slice(pagesVisited, pagesVisited + itemsPerPage) : [];
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Altera o itemsPerPage baseado no Width
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 4 : 8);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Recebe os dados do card clicado pelo usuário
  const [selectedProposal, setSelectedProposal] = useState(null);

  const handleCardClick = (item) => {
    setSelectedProposal(item);
  };

  const handlePaginationClick = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.GridProposalsContainer>

      {title && <Title text={title} uppercase />}
      <FilterProposals />

      <Styled.ModalContainer>

        {displayItems.length > 0 ? (
          <GridLayoutContainer>
            {displayItems.map((item) => (
              <ProposalCard
                from={item.details.from}
                date={item.details.date}
                opportunity={item.details.opportunity}
                category={item.details.category}
                country={item.details.country}
                org={item.details.org}
                orglogo={item.details.orgLogo}
                orgpath={item.details.orgPath}
                onclick={() => handleCardClick(item)}
                id={item.opportunityId}
                key={item.opportunityId}
                publicview

              />
            ))}
          </GridLayoutContainer>
        ) : (

          <Text text="Nenhuma oportunidade encontrada" />
        )}

        {displayItems.length > 0 && (
          <Styled.StyledPaginate
            previousLabel="Anterior"
            nextLabel="Próximo"
            breakLabel="..."
            pageCount={Math.ceil(items.length / itemsPerPage)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            onPageChange={changePage}
            containerClassName="pagination"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            onClick={handlePaginationClick}
          />
        )}

        {/* Renderiza um modal com os dados do card clicado pelo usuário */}
        {selectedProposal && (
          <ProposalModal
            proposal={selectedProposal}
            onclick={() => setSelectedProposal(null)}
          />
        )}

      </Styled.ModalContainer>

    </Styled.GridProposalsContainer>
  );
}

GridProposals.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object),
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
