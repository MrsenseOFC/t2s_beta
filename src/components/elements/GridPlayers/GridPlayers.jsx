import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as Styled from './GridPlayers-Styles';
import { Title } from '../Title/Title';
import { GridLayoutContainer } from '../../GridLayout/GridLayout-Styles';
import { UserCard } from '../UserCard/UserCard';
import { FilterPlayers } from '../FilterPlayers/FilterPlayers';
import { Text } from '../Text/Text';

export function GridPlayers({
  title, items, publicview, ownerview,
}) {
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

  const handlePaginationClick = () => {
    window.scrollTo({
      top: 200,
      behavior: 'smooth',
    });
  };

  return (
    <Styled.GridPlayersContainer>
      <Title text={title} uppercase />

      {publicview && <FilterPlayers />}

      {displayItems.length > 0 ? (
        <GridLayoutContainer>
          {displayItems.map((item) => (
            <UserCard
              path={item.path}
              profileimage={item.profileImageSrc}
              position={item.position}
              age={item.age}
              bestleg={item.bestLeg}
              name={item.name}
              weight={item.weight}
              height={item.height}
              category={item.category}
              id={item.playerId}
              key={item.playerId}
              favorite={publicview}
            />
          ))}
        </GridLayoutContainer>
      ) : (
        <Text text="Nenhum jogador foi encontrado" />
      )}

      {displayItems.length > 0 && (
      <Styled.Paginate
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
    </Styled.GridPlayersContainer>
  );
}

GridPlayers.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object),
  publicview: Prop.bool,
  ownerview: Prop.bool,
};
