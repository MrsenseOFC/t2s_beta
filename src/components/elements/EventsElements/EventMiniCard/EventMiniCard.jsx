import Prop from 'prop-types';
import React from 'react';
import * as Styled from './EventMiniCard-Styles';
import { Subtitle } from '../../Subtitle/Subtitle';
import { Text } from '../../Text/Text';
import { StyledLink } from '../../StyledLink/StyledLink';

export function EventMiniCard({
  title, subtitle, text, path,
}) {
  return (
    <Styled.EventMiniCardContainer>
      <StyledLink path={path}>

        {title && <Subtitle text={title} as="h4" />}

        <Styled.Line />

        <Styled.EventInfo>
          {subtitle && <Subtitle text={subtitle} as="h5" />}
          <Text text={text} />
        </Styled.EventInfo>
      </StyledLink>

    </Styled.EventMiniCardContainer>
  );
}

EventMiniCard.propTypes = {
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
