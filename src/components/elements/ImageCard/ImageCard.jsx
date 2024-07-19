import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ImageCard-Styles';

import { StyledLink } from '../StyledLink/StyledLink';

export function ImageCard({
  src, alt, title = '', islocked, path = '',
}) {
  return (

    <Styled.ImageCardElement islocked={islocked ? 'islocked' : undefined}>
      <StyledLink path={path}>

        <Styled.Image src={src} alt={alt} islocked={islocked ? 'islocked' : undefined} />

        {islocked && (
          <Styled.LockDiv islocked={islocked ? 'islocked' : undefined}>
            <img
              src="/assets/images/pngs/padlock.png"
              alt="cadeado"
            />
          </Styled.LockDiv>
        )}

        <Styled.Title>
          {title}
        </Styled.Title>
      </StyledLink>

    </Styled.ImageCardElement>

  );
}

ImageCard.propTypes = {
  src: Prop.string.isRequired,
  path: Prop.string,
  alt: Prop.string,
  title: Prop.string,
  islocked: Prop.bool,
};
