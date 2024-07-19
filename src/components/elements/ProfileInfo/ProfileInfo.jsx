import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ProfileInfo-Styles';
import { GridTwoColumn } from '../../GridTwoColumn/GridTwoColumn';
import { InfoInRow } from '../InfoInRow/InfoInRow';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';

export function ProfileInfo({ items }) {
  return (
    <Styled.ProfileInfoElement>
      <GridTwoColumn>
        {items.map((item) => (
          <InfoInRow key={item.title} infotitle={item.title} info={item.info} uppercase />
        ))}
      </GridTwoColumn>
    </Styled.ProfileInfoElement>
  );
}

ProfileInfo.propTypes = {
  items: Prop.arrayOf(Prop.object).isRequired, // n faço ideia oq é isso, só está assim pq foi o unico q n deu erro no console
};
