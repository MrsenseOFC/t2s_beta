import React, { useState } from 'react';
import Prop from 'prop-types';
import * as Styled from './GridCards-Styles';
import { ImageCard } from '../ImageCard/ImageCard';
import { GridLayoutContainer, ItemContainer } from '../../GridLayout/GridLayout-Styles';
import { theme } from '../../../styles/theme';
import { Button } from '../Button/Button';
import { Subtitle } from '../Subtitle/Subtitle';

export function GridCards({ items, title }) {
  const [showMoreItems, setShowMoreItems] = useState(false);
  const itemsToShow = showMoreItems ? items : items.slice(0, 12);
  const handleShowMore = () => setShowMoreItems(!showMoreItems);

  return (
    <Styled.GridCardsWrapper>
      <Subtitle text={title} uppercase as="h3" size={theme.sizes.xxlarge} />

      <Styled.GridCardsContainer>

        <GridLayoutContainer>
          {itemsToShow.map((item) => (
            <ItemContainer key={item.id}>
              <ImageCard
                src={item.profileImageSrc}
                title={item.name}
                path={item.path}
              />
            </ItemContainer>
          ))}
        </GridLayoutContainer>

      </Styled.GridCardsContainer>

      {items?.length > 12 && (

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
    </Styled.GridCardsWrapper>

  );
}

GridCards.propTypes = {
  title: Prop.string,
  items: Prop.arrayOf(Prop.object).isRequired,
};
