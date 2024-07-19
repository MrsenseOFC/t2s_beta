import Prop from 'prop-types';
import React from 'react';
import * as Styled from './PlayerContacts-Styles';
import { ContactCard } from '../../../../../components/elements/ContactCard/ContactCard';
import { VerticalMiniSlide } from '../../../../../components/elements/VerticalMiniSlide/VerticalMiniSlide';
import { VerticalLongSlide } from '../../../../../components/elements/VerticalLongSlide/VerticalLongSlide';

export function PlayerContacts() {
  return (
    <Styled.PlayerContactsContainer>

      {/* Necessário mudanças. Está assim apenas para renderizar algo visual */}
      <VerticalLongSlide type="contact" title="Suas mensagens" />

      {/* placeholder do que seria o chat em si */}
      <section />
    </Styled.PlayerContactsContainer>
  );
}

PlayerContacts.propTypes = {

};
