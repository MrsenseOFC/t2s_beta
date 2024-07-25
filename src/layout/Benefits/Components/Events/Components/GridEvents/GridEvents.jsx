import Prop from 'prop-types';
import React, { useState } from 'react';
import * as Styled from './GridEvents-Styles';
import { GridLayout } from '../../../../../../components/GridLayout/GridLayout';
import { EventModal } from '../EventModal/EventModal';
import { EventCard } from '../EventCard/EventCard';

export function GridEvents({ items }) {
  const [selectedEvent, setSelectedEvent] = useState();

  return (
    <Styled.GridEventsContainer>
      <GridLayout>
        {items.map((item) => (
          <EventCard
            key={item.id}
            imagesrc={item.src}
            title={item.title}
            subtitle={item.subtitle}
            organizer={item.organizer}
            startDate={item.startDate}
            startHour={item.startHour}
            location={item.location}
            onClick={() => setSelectedEvent(item)}
          />
        ))}
      </GridLayout>

      {selectedEvent && (
        <EventModal event={selectedEvent} onclick={() => setSelectedEvent()} />
      )}
    </Styled.GridEventsContainer>
  );
}

GridEvents.propTypes = {
  children: Prop.node.isRequired,
};
