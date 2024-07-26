import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as Styled from './GridEvents-Styles';
import { GridLayout } from '../../../GridLayout/GridLayout';
import { EventModal } from '../EventModal/EventModal';
import { EventCard } from '../EventCard/EventCard';
import { FilterEvents } from '../FilterEvents/FilterProposals/FilterEvents';

export function GridEvents({ items }) {
  const [selectedEvent, setSelectedEvent] = useState();

  // Pagination stuff
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  const pagesVisited = pageNumber * itemsPerPage;
  const displayItems = items ? items.slice(pagesVisited, pagesVisited + itemsPerPage) : [];
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Altera o itemsPerPage baseado no Width
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 768 ? 2 : 4);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePaginationClick = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.GridEventsContainer>

      <FilterEvents />

      <GridLayout>
        {displayItems.map((item) => (
          <EventCard
            key={item.id}
            imagesrc={item.src}
            title={item.title}
            subtitle={item.subtitle}
            organizer={item.organizer}
            startDate={item.startDate}
            startHour={item.startHour}
            country={item.country}
            state={item.state}
            platform={item.platform}
            onClick={() => setSelectedEvent(item)}
          />
        ))}
      </GridLayout>

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

      {selectedEvent && (
        <EventModal event={selectedEvent} onclick={() => setSelectedEvent()} />
      )}
    </Styled.GridEventsContainer>
  );
}

GridEvents.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired,
};
