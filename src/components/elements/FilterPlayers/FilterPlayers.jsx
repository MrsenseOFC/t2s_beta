import Prop from 'prop-types';
import React, { useState } from 'react';
import { OptionsOutline as OptionsIcons } from '@styled-icons/evaicons-outline/OptionsOutline';
import * as Styled from './FilterPlayers-Styles';
import { AuthInput } from '../AuthElements/AuthInput/AuthInput';
import { AuthDropdown } from '../AuthElements/AuthDropdown/AuthDropdown';
import { AuthWrapper } from '../AuthElements/AuthWrapper/AuthWrapper';
import { AuthForm } from '../AuthElements/AuthForm/AuthForm';
import { GridLayout } from '../../GridLayout/GridLayout';
import { AuthSearch } from '../AuthElements/AuthSearch/AuthSearch';
import { Row } from '../../RowContainer/Row';
import { IconDiv } from '../IconDiv/IconDiv';
import { AuthLayout } from '../AuthElements/AuthLayout/AuthLayout';
import { SearchWrapper } from '../AuthElements/AuthSearch/AuthSearch-Styles';
import { theme } from '../../../styles/theme';

export function FilterPlayers() {
  const [isOpen, setIsOpen] = useState(true);
  const [competitiveCategory, setCompetitiveCategory] = useState('');
  const [category, setCategory] = useState('  ');

  const legOptions = [
    { value: 'right', text: 'Direita' },
    { value: 'left', text: 'Esquerda' },
  ];

  const categoryOptions = [
    { value: 'sub7', text: 'Sub-7 (6 e 7 anos)' },
    { value: 'sub8', text: 'Sub-8 (8 anos)' },
    { value: 'sub9', text: 'Sub-9 (8 e 9 anos)' },
    { value: 'sub11', text: 'Sub-11 (10 e 11 anos)' },
    { value: 'sub13', text: 'Sub-13 (12 e 13 anos)' },
    { value: 'sub15', text: 'Sub-15 (14 e 15 anos)' },
    { value: 'sub17', text: 'Sub 17 (16 e 17 anos)' },
    { value: 'sub20', text: 'Sub-20 (18, 19 e 20 anos)' },
    { value: 'adult', text: 'Adulto (Já atua no time principal)' },
  ];

  const positionsOptions = [
    { value: 'goleiro', text: 'Goleiro' },
    { value: 'lateral esquerdo', text: 'Lateral Esquerdo' },
    { value: 'lateral direito', text: 'Lateral Direito' },
    { value: 'zagueiro', text: 'Zagueiro' },
    { value: 'ala', text: 'Ala' },
    { value: 'primeiro volante', text: 'Primeiro Volante' },
    { value: 'segundo volante', text: 'Segundo Volante' },
    { value: 'meio-campista', text: 'Meio-Campista' },
    { value: 'meia-ofensivo', text: 'Meia Ofensivo' },
    { value: 'meia-lateral', text: 'Meia Lateral' },
    { value: 'segundo atacante', text: 'Segundo atacante' },
    { value: 'ponta esquerda', text: 'Ponta Esquerda' },
    { value: 'ponta direita', text: 'Ponta Direito' },
    { value: 'centroavante', text: 'Centroavante' },
  ];

  const leagueOptions = [
    { value: 'lifa', text: 'LIFA' },
  ];

  const managerOptions = [
    { value: 'yes', text: 'Sim' },
    { value: 'no', text: 'Não' },
  ];

  const availabilityOptions = [
    { value: 'activeFree', text: 'Ativo - Sem contrato' },
    { value: 'active', text: 'Ativo - Com contrato' },
    { value: 'injuredFree', text: 'Lesionado - Sem contrato' },
    { value: 'injured', text: 'Lesionado - Com contrato' },
  ];

  const competitiveCategoryOptions = [
    { value: 'pro', text: 'Profissional' },
    { value: 'semiPro', text: 'Semi-Profissional' },
    { value: 'academic', text: 'Universitário' },
    { value: 'amateur', text: 'Amador' },
    { value: 'recreational', text: 'Recreacional' },
  ];

  const levelsOptions = [
    { value: 'serieA', text: 'Serie A' },
    { value: 'serieB', text: 'Serie B' },
    { value: 'serieC', text: 'Serie C' },
    { value: 'serieD', text: 'Serie D' },
  ];

  const opportunityTypeOptions = [
    { value: 'scouts', text: 'Scouts' },
    { value: 'agents', text: 'Agentes' },
    { value: 'clubs', text: 'Clubes' },
  ];

  return (
    <Styled.FilterPlayersContainer isopen={isOpen ? 'isopen' : undefined}>
      <AuthWrapper>

        <AuthForm>

          <Row>
            <AuthDropdown
              id="competitiveCategory"
              options={competitiveCategoryOptions}
              placeholder="Categoria competitiva"
              onDropdownChange={(option) => setCompetitiveCategory(option.value)}
            />
            <SearchWrapper>
              <IconDiv onclick={() => setIsOpen(!isOpen)} name="Filtrar oportunidades">
                <OptionsIcons />
              </IconDiv>
              <AuthSearch id="searchPlayers" name="earchPlayers" />
            </SearchWrapper>
          </Row>

          <AuthLayout isopen={isOpen}>

            <AuthDropdown
              id="competitiveLevel"
              placeholder="Nível competitivo"
              options={levelsOptions}
              otheroption
            />

            <AuthDropdown
              id="category"
              placeholder="Categoria"
              options={categoryOptions}
              onDropdownChange={(option) => setCategory(option.value)}
              otheroption
              selectedvalue={category}
            />

            <AuthDropdown
              placeholder="Posição"
              id="mainPosition"
              options={positionsOptions}
            />

            <AuthDropdown
              id="league"
              placeholder="Liga"
              options={leagueOptions}
              otheroption
            />

            <AuthDropdown
              id="bestLeg"
              placeholder="Melhor perna"
              options={legOptions}
            />

            <AuthDropdown
              id="availability"
              placeholder="Disponibilidade"
              options={availabilityOptions}
            />

            <AuthDropdown
              id="manager"
              placeholder="Possui empresário?"
              options={managerOptions}
            />

            <AuthInput
              type="number"
              name="minimumAge_input"
              id="minimumAge_input"
              placeholder="idade mínima"
            />

            <AuthInput
              type="number"
              name="maximumAge_input"
              id="maximumAge_input"
              placeholder="idade máxima"
            />

            <AuthInput
              type="number"
              name="minimumPayment_input"
              id="minimumPayment_input"
              placeholder="Salário mínimo"
            />

            <AuthInput
              type="number"
              name="maximumPayment_input"
              id="maximumPayment_input"
              placeholder="Salário máximo"
            />

            <AuthInput
              type="number"
              name="minimumTransferValue_input"
              id="MinimumTransferValue_input"
              placeholder="Valor mínimo de transferência"
            />

            <AuthInput
              type="number"
              name="maximumTransferValue_input"
              id="MaximumTransferValue_input"
              placeholder="Valor máximo de transferência"
            />

            <AuthInput
              type="text"
              name="birthCountry_input"
              id="birthCountry_input"
              placeholder="País de nascimento"
            />

            <AuthInput
              type="text"
              name="passport_input"
              id="passport_input"
              placeholder="Passaporte"
            />

          </AuthLayout>

        </AuthForm>

      </AuthWrapper>

    </Styled.FilterPlayersContainer>
  );
}

FilterPlayers.propTypes = {
};
