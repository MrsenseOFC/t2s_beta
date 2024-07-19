import React, { useEffect, useState } from 'react';
import Prop from 'prop-types';
import { Add } from '@styled-icons/material-outlined';
import * as Styled from './GridEditableProposals-Styles';
import { Title } from '../Title/Title';
import { GridLayoutContainer } from '../../GridLayout/GridLayout-Styles';
import { ProposalCard } from '../ProposalCard/ProposalCard';
import { ProposalModal } from '../ProposalModal/ProposalModal';
import { NewProposal } from '../NewProposal/NewProposal';
import { IconDiv } from '../IconDiv/IconDiv';
import { Row } from '../../RowContainer/Row';
import { EditProposal } from '../EditProposal/EditProposal';
import { Text } from '../Text/Text';

export function GridEditableProposals({ items, title }) {
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
  const [isAddNewProposal, setIsAddNewProposal] = useState(false);

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
    <Styled.GridEditableProposalsContainer>

      {isAddNewProposal ? (
        <NewProposal onclick={() => setIsAddNewProposal(!isAddNewProposal)} />
      ) : (
        <>
          {!selectedProposal && (
            <>
              <Row>
                <Title text={title} uppercase />
                <IconDiv name="Criar nova proposta" onclick={() => setIsAddNewProposal(!isAddNewProposal)}>
                  <Add />
                </IconDiv>
              </Row>

                {displayItems.length > 0 ? (
                  <GridLayoutContainer>
                    {displayItems.map((item) => (
                      <ProposalCard
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
                        ownerview
                      />
                    ))}
                  </GridLayoutContainer>
                )
                  : (
                    <Text text="Você ainda não publicou nenhuma proposta. Que tal começar agora? Clique no ícone de ‘+’ acima para criar a sua primeira proposta!" />
                  )}

              {displayItems.length > 0 && (
                <Styled.StyledPaginate
                  previousLabel="Anterior"
                  nextLabel="Próximo"
                  breakLabel="..."
                  pageCount={items.length > 0 ? Math.ceil(items.length / itemsPerPage) : 0}
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

            </>
          )}
        </>
      )}

      {selectedProposal && (
      <EditProposal proposal={selectedProposal} onclick={() => setSelectedProposal(null)} />
      )}

    </Styled.GridEditableProposalsContainer>
  );
}

GridEditableProposals.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object),

  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
