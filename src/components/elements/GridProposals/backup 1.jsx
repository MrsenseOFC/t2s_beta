import React, { useEffect, useState } from 'react';
import Prop from 'prop-types';
import * as Styled from './GridProposals-Styles.js';
import { Title } from '../Title/Title.jsx';
import { GridLayoutContainer, ItemContainer } from '../../GridLayout/GridLayout-Styles.js';
import { theme } from '../../../styles/theme.js';
import { Button } from '../Button/Button.jsx';
import { ProposalCard } from '../ProposalCard/ProposalCard.jsx';
import { RowContainer } from '../../RowContainer/Row-Styles.js.js';

export function GridProposals({ items, title }) {
  const [showMoreItems, setShowMoreItems] = useState(false);
  const handleShowMore = () => setShowMoreItems(!showMoreItems);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = items.filter((item) => {
      const searchTextLower = searchTerm.toLowerCase();
      const searchableFields = [
        item.from?.toLowerCase(),
        item.date?.toLowerCase(),
        item.opportunity?.toLowerCase(),
        item.category?.toLowerCase(),
        item.country?.toLowerCase(),
        item.org?.toLowerCase(),
      ];

      return searchableFields.some((field) => field?.includes(searchTextLower));
    });
    setFilteredItems(filtered);
    setShowMoreItems(false);
  }, [searchTerm, items]);

  const itemsToShow = showMoreItems ? filteredItems : filteredItems.slice(0, 10);

  return (
    <Styled.GridProposalsContainer>

      <RowContainer>
        <Title text={title} uppercase />
        <p>Filtro</p>
        <input
          type="search"
          placeholder="Buscar por..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </RowContainer>

      {filteredItems.length > 0 ? (
        <GridLayoutContainer>
          {itemsToShow.map((item) => (
            <ProposalCard
              from={item.from}
              date={item.date}
              opportunity={item.opportunity}
              category={item.category}
              country={item.country}
              org={item.org}
              orglogo={item.orglogo}
              orgpath={item.orgpath}
            />
          ))}
        </GridLayoutContainer>
      ) : (
        <p>Nenhuma oportunidade correspondente</p>
      )}

      {filteredItems?.length > 10 && (

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

    </Styled.GridProposalsContainer>
  );
}

GridProposals.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object).isRequired,
  // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
