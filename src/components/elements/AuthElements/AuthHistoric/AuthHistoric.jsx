import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthHistoric-Styles';
import { AuthInput } from '../AuthInput/AuthInput';
import { theme } from '../../../../styles/theme';
import { Button } from '../../Button/Button';
import { AuthCheckbox } from '../AuthCheckbox/AuthCheckbox';
import { AuthInfo } from '../AuthInfo/AuthInfo';

export function AuthHistoric({
  title = '', id, inputtitle, placeholder, isactual,
}) {
  return (
    <Styled.AuthHistoricContainer>

      <Styled.AuthHistoricTitle>
        {title}
      </Styled.AuthHistoricTitle>

      <AuthInfo text="Exemplo" />

      <AuthInput
        type="text"
        name={`${id}_input`}
        id={`${id}_input`}
        placeholder={placeholder}
        title={inputtitle}
      />

      <AuthInput
        type="date"
        name={`${id}EarliestYear_input`}
        id={`${id}EarliestYear_input`}
        placeholder="Ano de entrada"
        title="Entrada"
      />

      {!isactual && (
      <AuthInput
        type="date"
        name={`${id}LatestYear_input`}
        id={`${id}LatestYear_input`}
        placeholder="Ano de saída"
        title="Saída"
      />
      )}

      <AuthCheckbox id={`isActual${id}`} value="ActualClub" text={`Atual ${inputtitle}`} checked={isactual} />

      <Button
        text="Adicionar"
        bgcolor={theme.colors.quaternary}
        bghover={theme.colors.secondary}
        textcolor={theme.colors.white}
        texthover={theme.colors.white}
        border={theme.colors.tertiary}
        borderhover={theme.colors.white}
      />

    </Styled.AuthHistoricContainer>
  );
}

AuthHistoric.propTypes = {
  title: Prop.string,
  inputtitle: Prop.string,
  placeholder: Prop.string,
  id: Prop.string.isRequired,
  isactual: Prop.bool,
};
