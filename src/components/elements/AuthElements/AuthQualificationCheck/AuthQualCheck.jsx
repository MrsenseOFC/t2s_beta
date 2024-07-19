import React, { useState } from 'react';
import Prop from 'prop-types';
import * as Styled from './AuthQualCheck-Styles';
import {
  AuthRadioContainer, AuthRadioElement, AuthRadioInput, AuthRadioLabel, AuthRadioTitle,
} from '../AuthRadio/AuthRadio-Styles';
import { AuthInput } from '../AuthInput/AuthInput';
import { AuthFile } from '../AuthFile/AuthFile';

export function AuthQualCheck({
  title, groupname,
}) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <Styled.AuthQualCheckContainer>

      <AuthRadioContainer>
        <AuthRadioTitle>
          {title}
          {' '}
          (Obrigatório)
        </AuthRadioTitle>

        <AuthRadioElement>
          <AuthRadioInput
            type="radio"
            name={groupname}
            id={`${groupname}_yes`}
            value={`${groupname}_yes`}
            required
            onChange={handleRadioChange}
          />
          <AuthRadioLabel htmlFor={`${groupname}_yes`}>Sim</AuthRadioLabel>

        </AuthRadioElement>

        <AuthRadioElement>
          <AuthRadioInput
            type="radio"
            name={groupname}
            id={`${groupname}_no`}
            value={`${groupname}_no`}
            required
            onChange={handleRadioChange}
          />
          <AuthRadioLabel htmlFor={`${groupname}_no`}>Não</AuthRadioLabel>
        </AuthRadioElement>

        {selectedOption === `${groupname}_yes` && (
          <>
            <AuthInput
              type="number"
              name="qualNote_input"
              id="qualNote_input"
              title="Nota"
              placeholder="Insira sua nota final"
              required
            />

            <AuthFile text="Comprovante / Certificado (Opcional)" id={`${groupname}_certificate`} accept="image/jpeg, image/png, application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
          </>
        )}
      </AuthRadioContainer>
    </Styled.AuthQualCheckContainer>
  );
}

AuthQualCheck.propTypes = {
  title: Prop.string.isRequired,
  groupname: Prop.string.isRequired,
};
