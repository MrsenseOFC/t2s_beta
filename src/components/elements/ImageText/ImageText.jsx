import Prop from 'prop-types';
import React from 'react';
import * as Styled from './ImageText-Styles';

export function ImageText({
  imagesrc = '', primarytext, secondarytext = '',
}) {
  return (
    <Styled.ImageTextElement>
      {imagesrc && <Styled.Image src={imagesrc} />}

      <Styled.Text>
        {primarytext}
      </Styled.Text>

      {secondarytext && (
      <Styled.Text>
        (
        {secondarytext}
        )
      </Styled.Text>
      )}

    </Styled.ImageTextElement>
  );
}

ImageText.propTypes = {
  primarytext: Prop.string.isRequired,
  imagesrc: Prop.string,
  secondarytext: Prop.oneOfType([
    Prop.number,
    Prop.string,
  ]),
};
