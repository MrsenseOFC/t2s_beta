import Prop from 'prop-types';
import React from 'react';
import * as Styled from './Historic-Styles';
import { GridOneColumn } from '../../GridOneColumn/GridOneColumn';
import { Title } from '../Title/Title';

export function Historic({ items, title }) {
  const orderedItems = items.sort((a, b) => {
    const earliestYearA = Math.min(...a.years);
    const earliestYearB = Math.min(...b.years);

    if (earliestYearA === earliestYearB) {
      const latestYearA = Math.max(...a.years);
      const latestYearB = Math.max(...b.years);
      return latestYearB - latestYearA;
    }

    return earliestYearB - earliestYearA;
  });

  return (
    <Styled.HistoricContainer>
      <GridOneColumn>
        <Title text={title} uppercase />
        {orderedItems && orderedItems.map((item) => (
          <Styled.HistoricElement key={item.id}>
            <Styled.Image src={item.image} alt="Imagem que representa o item" />
            <Styled.Item>{item.name}</Styled.Item>
            <Styled.Years>
              (
              {item.years.map((year, index) => (
                <span key={index}>
                  {year}
                  {index < item.years.length - 1 && '-'}
                </span>
              ))}
              )
            </Styled.Years>
          </Styled.HistoricElement>

        ))}
      </GridOneColumn>
    </Styled.HistoricContainer>

  );
}

Historic.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired, // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
