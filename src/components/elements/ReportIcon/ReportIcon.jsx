import Prop from 'prop-types';
import React, { useState } from 'react';

import { Report } from '@styled-icons/material-outlined/Report';
import * as Styled from './ReportIcon-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';

export function ReportIcon({ onclick, isreporting }) {
  return (
    <Styled.ReportIconElement isreporting={isreporting ? 'isreporting' : undefined}>
      <IconDiv
        active={isreporting}
        activecolor={theme.colors.white}
        name="Denunciar"
        hovercolor={theme.colors.white}
        onclick={onclick}
      >
        <Report />
      </IconDiv>
    </Styled.ReportIconElement>
  );
}

ReportIcon.propTypes = {
  isreporting: Prop.bool,
  onclick: Prop.func,
};
