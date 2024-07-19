import Prop from 'prop-types';
import React from 'react';
import * as Styled from './NewsCard-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { Text } from '../Text/Text';
import { StyledLink } from '../StyledLink/StyledLink';

export function NewsCard({
  title, text, thumbnail, path,
}) {
  return (
    <Styled.NewsCardContainer>
      <StyledLink path={path}>

        <Styled.NewsThumbnail src={thumbnail} alt="Thumbnail da notícia" />

        <Styled.NewsInfo>
          <Subtitle text={title} as="h5" />
          <Text text={text} />
        </Styled.NewsInfo>
      </StyledLink>

    </Styled.NewsCardContainer>
  );
}

NewsCard.propTypes = {
  title: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]),
  text: Prop.string,
  path: Prop.string,
  thumbnail: Prop.string,
};
