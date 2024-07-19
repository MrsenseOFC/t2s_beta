import Prop from 'prop-types';
import React from 'react';
import * as Styled from './EventCard-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { Text } from '../Text/Text';
import { StyledLink } from '../StyledLink/StyledLink';

export function EventCard({
  title, subtitle, text, path,
}) {
  return (
    <Styled.EventCardContainer>
      <StyledLink path={path}>

        {title && <Subtitle text={title} as="h4" />}

        <Styled.Line />

        <Styled.EventInfo>
          {subtitle && <Subtitle text={subtitle} as="h5" />}
          <Text text={text} />
        </Styled.EventInfo>
      </StyledLink>

    </Styled.EventCardContainer>
  );
}

EventCard.propTypes = {
  title: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]),
  subtitle: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]),
  text: Prop.string,
  path: Prop.string,
};
