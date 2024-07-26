import Prop from 'prop-types';
import React, { useState } from 'react';
import { OptionsOutline as OptionsIcons } from '@styled-icons/evaicons-outline/OptionsOutline';
import * as Styled from './FilterEvents-Styles';
import { AuthInput } from '../../../AuthElements/AuthInput/AuthInput';
import { AuthDropdown } from '../../../AuthElements/AuthDropdown/AuthDropdown';
import { AuthWrapper } from '../../../AuthElements/AuthWrapper/AuthWrapper';
import { AuthForm } from '../../../AuthElements/AuthForm/AuthForm';
import { GridLayout } from '../../../../GridLayout/GridLayout';
import { AuthSearch } from '../../../AuthElements/AuthSearch/AuthSearch';
import { Row } from '../../../../RowContainer/Row';
import { IconDiv } from '../../../IconDiv/IconDiv';
import { AuthLayout } from '../../../AuthElements/AuthLayout/AuthLayout';
import { SearchWrapper } from '../../../AuthElements/AuthSearch/AuthSearch-Styles';

export function FilterEvents() {
  const [isOpen, setIsOpen] = useState(true);
  const [eventType, setEventType] = useState('all');

  const eventTypeOptions = [
    { value: 'match', text: 'Partida' },
    { value: 'camping', text: 'Camping' },
    { value: 'clinic', text: 'Clínica' },
    { value: 'palestra', text: 'Palestra' },
    { value: 'tour', text: 'Tour' },
    { value: 'showcase', text: 'Showcase' },
    { value: 'exchange', text: 'Intercâmbio' },
  ];

  const eventFormatOptions = [
    { value: 'online', text: 'Online' },
    { value: 'inPerson', text: 'Presencial' },
  ];

  return (
    <Styled.FilterEventsContainer isopen={isOpen ? 'isopen' : undefined}>
      <AuthWrapper>
        <AuthForm>

          <Row>
            <AuthDropdown
              id="opportunityType"
              options={eventTypeOptions}
              placeholder="Todos"
              onDropdownChange={(option) => setEventType(option.value)}
            />

            <SearchWrapper>
              <IconDiv onclick={() => setIsOpen(!isOpen)} name="Filtrar oportunidades">
                <OptionsIcons />
              </IconDiv>
              <AuthSearch name="proposalSearch" id="proposalSearch" />
            </SearchWrapper>

          </Row>

          <AuthLayout isopen={isOpen}>

            <AuthDropdown
              id="eventFormat"
              options={eventFormatOptions}
              placeholder="Formato do evento"
            />

            <AuthInput
              type="text"
              name="organizer_input"
              id="organizer_input"
              placeholder="Organizador(a)"
            />

            <AuthInput
              type="number"
              name="minimumHeight_input"
              id="minimumHeight_input"
              placeholder="País"
            />

          </AuthLayout>

        </AuthForm>

      </AuthWrapper>

    </Styled.FilterEventsContainer>
  );
}

FilterEvents.propTypes = {
};
