import Prop from 'prop-types';
import React, { useState } from 'react';
import * as Styled from './Popup-Styles';
import { theme } from '../../../styles/theme';
import { Row } from '../../RowContainer/Row';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

export function Popup({
  isopen, onfirstclick, firstoption, firstpath, secondoption, secondpath, onsecondclick, title, subtitle,
}) {
  return (
    <>
      {isopen && <Styled.PopupOverlay />}

      <Styled.PopupElement open={isopen}>

        <Text text={title} uppercase />

        {subtitle && <Text text={subtitle} uppercase />}

        <Row>
          {firstoption && (
            <Button
              text={firstoption}
              path={firstpath}
              bgcolor={theme.colors.white}
              bghover={theme.colors.lightprimary}
              textcolor={theme.colors.black}
              texthover={theme.colors.black}
              border={theme.colors.black}
              borderhover={theme.colors.black}
              onclick={onfirstclick}
            />
          )}

          {secondoption && (
            <Button
              text={secondoption}
              path={secondpath}
              bgcolor={theme.colors.white}
              bghover={theme.colors.lightprimary}
              textcolor={theme.colors.black}
              texthover={theme.colors.black}
              border={theme.colors.black}
              borderhover={theme.colors.black}
              onclick={onsecondclick}
            />
          )}
        </Row>
      </Styled.PopupElement>
    </>
  );
}

Popup.propTypes = {
  title: Prop.string,
  subtitle: Prop.string,
  isopen: Prop.bool,
  onfirstclick: Prop.func,
  onsecondclick: Prop.func,
  firstoption: Prop.string,
  firstpath: Prop.string,
  secondoption: Prop.string,
  secondpath: Prop.string,
};
