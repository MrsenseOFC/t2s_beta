import Prop from 'prop-types';
import React from 'react';
import { FormNew, SportSoccer } from '@styled-icons/fluentui-system-filled';
import * as Styled from './ProposalCard-Styles';
import { StyledLink } from '../StyledLink/StyledLink';
import { InfoInRow } from '../InfoInRow/InfoInRow';
import { CenterColumn } from '../../CenterColumn/CenterColumn';
import { Subtitle } from '../Subtitle/Subtitle';
import { Text } from '../Text/Text';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';
import { RemoveIcon } from '../RemoveIcon/RemoveIcon';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';

export function ProposalCard({
  id, from = '', date = '', opportunity = '', country = '', org = '', orglogo = '', orgpath = '', category = '', onclick, publicview, ownerview, isapplied,
}) {
  return (
    <Styled.ProposalCardElement onClick={onclick}>

      {/* {orglogo && <Styled.ProposalImage src={orglogo} alt="Logo da organização" />} */}

      <IconDiv color={isapplied ? theme.colors.primary : theme.colors.white} hovercolor="none">
        <FormNew />
      </IconDiv>

      <CenterColumn>

        {from && <InfoInRow infotitle="Pedido de" info={from} />}
        {date && <InfoInRow infotitle="Publicada em" info={date} />}
        {category && <InfoInRow infotitle="Categoria" info={category} />}

      </CenterColumn>

      {opportunity && <Subtitle text={opportunity} uppercase />}

      <CenterColumn>
        {country && <Text text={country} />}
        {org && <StyledLink path={orgpath} text={org} />}
      </CenterColumn>

      {publicview && <FavoriteIcon is={id} />}
      {ownerview && <RemoveIcon id={id} message="Tem certeza de que deseja excluir esta oportunidade?" />}

    </Styled.ProposalCardElement>
  );
}

ProposalCard.propTypes = {
  from: Prop.string,
  id: Prop.oneOfType([
    Prop.string, Prop.number,
  ]),
  date: Prop.string,
  opportunity: Prop.string,
  country: Prop.string,
  org: Prop.string,
  orglogo: Prop.string,
  orgpath: Prop.string,
  category: Prop.string,
  onclick: Prop.func,
  publicview: Prop.bool,
  ownerview: Prop.bool,
  isapplied: Prop.bool,
};
