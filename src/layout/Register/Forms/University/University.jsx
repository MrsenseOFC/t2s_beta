import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './University-Styles';

import { AuthForm } from '../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthWrapper } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { Subtitle } from '../../../../components/elements/Subtitle/Subtitle';

import { theme } from '../../../../styles/theme';
import { AuthContainer } from '../../../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';

import { AuthHistoric } from '../../../../components/elements/AuthElements/AuthHistoric/AuthHistoric';
import { Row } from '../../../../components/RowContainer/Row';
import { AuthFile } from '../../../../components/elements/AuthElements/AuthFile/AuthFile';
import { AuthAchievement } from '../../../../components/elements/AuthElements/AuthAchievement/AuthAchievement';

export function University() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
    navigate('/'); // Direciona o usuário para alguma página quando ele clica no submit
  };

  return (
    <Styled.UniversityContainer>

      <AuthWrapper>

        <AuthContainer>

          <AuthForm>

            <Subtitle text="Seu perfil (Universidade)" size={theme.sizes.xlarge} />

            <AuthInput
              type="date"
              name="date_input"
              id="date_input"
              title="Data de fundação"
            />

            <AuthInput
              type="text"
              name="representative_input"
              id="representative_input"
              title="Representante"
              placeholder="Nome do representante da universidade"
            />

            <AuthInput
              type="text"
              name="country_input"
              id="country_input"
              title="País"
              placeholder="De qual país é a universidade"
            />

            <AuthInput
              type="text"
              name="state_input"
              id="state_input"
              title="Estado"
              placeholder="De qual estado é a universidade"
            />

            <AuthInput
              type="text"
              name="trainingCenter_input"
              id="trainingCenter_input"
              title="Local de treinamento"
              placeholder="Onde a universidade realiza os treinamentos"
            />

            <AuthInput
              type="text"
              name="coach_input"
              id="coach_input"
              title="Treinador"
              placeholder="Atual treinador da universidade"
            />

            <AuthFile text="Escolha sua foto de perfil (Recomendado: Imagens 1:1)" id="profileImage" />

            <AuthFile text="Escolha seu banner (Recomendado: Imagens 16:9)" id="bannerImage" />

            <Row>
              <AuthAchievement title="Histórico de títulos e prêmios" id="titles" inputtitle="Competição / Prêmio" placeholder="Nome da competição ou prêmio" />
            </Row>

            <AuthButton
              name="register_submit"
              id="register_submit"
              value="Confirmar alteração"
            />

          </AuthForm>
        </AuthContainer>

      </AuthWrapper>
    </Styled.UniversityContainer>

  );
}
