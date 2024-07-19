import Prop from 'prop-types';
import React, { useState } from 'react';
import { ChevronUpOutline as ArrowUp, ArrowheadUpOutline as DoubleArrouUp } from '@styled-icons/evaicons-outline';
import { ExposurePlus1 as Plus1Icon, ExposurePlus2 as Plus2Icon } from '@styled-icons/material-outlined';
import { StarOneQuarter } from '@styled-icons/fluentui-system-filled/StarOneQuarter';
import { StarHalf, Star, StarEmphasis } from '@styled-icons/fluentui-system-filled';
import * as Styled from './RateIcons-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';

export function RateIcons({ mediaid, ratevalue }) {
  const [rate, setRate] = useState();

  const handleRateClick = (value) => {
    setRate(rate === value ? '' : value);
  };

  return (
    <Styled.RateIconsElement>
      <IconDiv
        name="+1"
        onclick={() => handleRateClick(1)}
        active={rate === 1}
        activecolor={theme.colors.gold}
        hovercolor={theme.colors.gold}
      >
        <StarHalf />
      </IconDiv>

      <IconDiv
        name="+5"
        onclick={() => handleRateClick(5)}
        active={rate === 5}
        activecolor={theme.colors.gold}
        hovercolor={theme.colors.gold}
      >
        <Star />
      </IconDiv>

      <IconDiv
        name="+10"
        onclick={() => handleRateClick(10)}
        active={rate === 10}
        activecolor={theme.colors.gold}
        hovercolor={theme.colors.gold}
      >
        <StarEmphasis />
      </IconDiv>
    </Styled.RateIconsElement>
  );
}

RateIcons.propTypes = {
  mediaid: Prop.oneOfType([
    Prop.string,
    Prop.number,
  ]),
  ratevalue: Prop.number,
};
