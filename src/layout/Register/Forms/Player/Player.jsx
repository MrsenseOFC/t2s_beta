import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Player-Styles';

import { AuthForm } from '../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthRedirect } from '../../../../components/elements/AuthElements/AuthRedirect/Redirect';
import { AuthWrapper } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { StyledLink } from '../../../../components/elements/StyledLink/StyledLink';
import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../styles/theme';
import { AuthContainer } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { AuthRadio } from '../../../../components/elements/AuthElements/AuthRadio/AuthRadio';
import { AuthHistoric } from '../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric';
import { Row } from '../../../../components/RowContainer/Row';
import { AuthFile } from '../../../../components/elements/AuthElements/AuthFile/AuthFile';
import { AuthAchievement } from '../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';
import { AuthQualCheck } from '../../../../components/elements/AuthElements/AuthQualificationCheck/AuthQualCheck';
import { AuthDropdown } from '../../../../components/elements/AuthElements/AuthDropdown/AuthDropdown';

export function Player() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
    navigate('/'); // Direciona o usuário para alguma página quando ele clica no submit
  };

  const legOptions = [
    { value: 'right', label: 'Direita' },
    { value: 'left', label: 'Esquerda' },
  ];

  const categoryOptions = [
    { value: 'sub7', text: 'Sub-7 (6 e 7 anos)' },
    { value: 'sub8', text: 'Sub-8 (8 anos)' },
    { value: 'sub9', text: 'Sub-9 (8 e 9 anos)' },
    { value: 'sub11', text: 'Sub-11 (10 e 11 anos)' },
    { value: 'sub13', text: 'Sub-13 (12 e 13 anos)' },
    { value: 'sub15', text: 'Sub-15 (14 e 15 anos)' },
    { value: 'sub17', text: 'Sub-17 (16 e 17 anos)' },
    { value: 'sub20', text: 'Sub-20 (18, 19 e 20 anos)' },
    { value: 'adult', text: 'Adulto (Já atua no time principal)' },
  ];

  const [category, setCategory] = useState('  ');

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
    { value: 'yes', label: 'Sim' },
    { value: 'no', label: 'Não' },
  ];

  const [league, setLeague] = useState(null);

  return (
    <Styled.PlayerContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm>

            <Subtitle text="Seu perfil" size={theme.sizes.xlarge} />

            <AuthRadio title="Qual sua melhor perna?" options={legOptions} groupname="legOptions" />

            <AuthDropdown
              title="Você atua em qual categoria?"
              id="category"
              placeholder="Escolha sua categoria"
              options={categoryOptions}
              onDropdownChange={(option) => setCategory(option.value)}
              otheroption
              selectedvalue={category}
            />

            {category === 'other' && (
            <AuthInput
              type="name"
              name="other_input"
              id="other_input"
              placeholder="insira aqui a categoria"
              title="Qual categoria?"
            />
            )}

            <AuthInput
              type="date"
              name="date_input"
              id="date_input"
              title="Data de nascimento"
            />

            <AuthInput
              type="text"
              name="weigth_input"
              id="weigth_input"
              title="Peso"
              placeholder="Seu peso atual (em KG)"
            />

            <AuthInput
              type="text"
              name="primaryBirthCountry_input"
              id="primaryBirthCountry_input"
              title="Nacionalidade primária"
              placeholder="Sua nacionalidade primária"
            />

            <AuthInput
              type="text"
              name="secondaryBirthCountry_input"
              id="secondaryBirthCountry_input"
              title="Nacionalidade secundária"
              placeholder="Sua nacionalidade secundária"
            />

            <AuthInput
              type="text"
              name="birthCity_input"
              id="birthCity_input"
              title="Cidade"
              placeholder="Sua cidade de nascimento"
            />

            <AuthInput
              type="text"
              name="passport_input"
              id="passport_input"
              title="Possui passporte para algum país?"
              placeholder="Caso sim, liste os países"
            />

            <AuthInput
              type="text"
              name="payment_input"
              id="payment_input"
              title="Salário"
              placeholder="Seu salário base"
            />

            <AuthInput
              type="text"
              name="transferValue_input"
              id="transferValue_input"
              title="Valor de transferência"
              placeholder="Seu valor de transferência"
            />

            <AuthDropdown
              title="Posição Principal"
              placeholder="Sua posição principal"
              id="mainPosition"
              options={positionsOptions}
            />

            <AuthDropdown
              title="Posição Secundária"
              placeholder="Sua posição secundária"
              id="secondaryPosition"
              options={positionsOptions}
            />

            <AuthDropdown
              title="Posição terciária"
              placeholder="Sua posição terciária"
              id="tertiaryPosition"
              options={positionsOptions}
            />

            <AuthDropdown
              title="Você atua em alguma liga?"
              id="league"
              placeholder="Escolha sua Liga"
              options={leagueOptions}
              onDropdownChange={(option) => setLeague(option.value)}
              otheroption
            />

            {league === 'other' && (
            <AuthInput
              type="name"
              name="other_input"
              id="other_input"
              placeholder="Insira aqui o nome da liga"
              title="Qual?"
              required
            />
            )}

            <AuthRadio title="Você possui algum empresário?" options={managerOptions} groupname="managerOptions" />

            <AuthFile text="Escolha sua foto de perfil (Recomendado: Imagens 1:1)" id="profileImage" />

            <AuthFile text="Escolha seu banner (Recomendado: Imagens 16:9)" id="bannerImage" />

            <Subtitle text="Sua história esportiva" size={theme.sizes.xlarge} />

            <Row>
              <AuthHistoric title="Histórico de clubes" id="Club" inputtitle="Clube" placeholder="Nome do Clube" />
              <AuthAchievement title="Histórico de títulos e prêmios" id="titles" inputtitle="Competição / Prêmio" placeholder="Nome da competição ou prêmio" />
            </Row>

            <Subtitle text="Sua história acadêmica" size={theme.sizes.xlarge} />

            {/* <Column> */}
            <AuthQualCheck title="Realizou a prova TOEFL?" groupname="toefl" />
            <AuthQualCheck title="Realizou a prova ACT?" groupname="act" />
            <AuthQualCheck title="Realizou a prova SAT?" groupname="sat" />

            <AuthInput
              type="date"
              name="secondGrade_input"
              id="secondGrade_input"
              title="Ano de formatura do segundo grau"
              placeholder="Ano"
            />

            <AuthInput
              type="number"
              name="secondGradeGpa_input"
              id="secondGradeGpa_input"
              title="GPA (Grade Point Average)"
              placeholder="Nota média final"
            />

            <AuthHistoric title="Conhecimentos" id="Academic" inputtitle="Formação" placeholder="Nome da formação" />

            <AuthButton
              name="register_submit"
              id="register_submit"
              value="Confirmar alteração"
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.PlayerContainer>

  );
}
