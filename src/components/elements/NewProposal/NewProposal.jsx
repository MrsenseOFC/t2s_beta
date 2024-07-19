import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import axios from 'axios';
import * as Styled from './NewProposal-Styles';
import { Subtitle } from '../Subtitle/Subtitle';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { AuthWrapper } from '../AuthElements/AuthWrapper/AuthWrapper';
import { AuthForm } from '../AuthElements/AuthForm/AuthForm';
import { TextArea } from '../TextArea/TextArea';
import { AuthInput } from '../AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../AuthElements/AuthButton/AuthButton';
import { IconDiv } from '../IconDiv/IconDiv';
import { Title } from '../Title/Title';
import { Row } from '../../RowContainer/Row';
import { AuthLayout } from '../AuthElements/AuthLayout/AuthLayout';
import { AuthDropdown } from '../AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../contexts/s2tContext/S2tContext';
import { addProposal } from '../../../contexts/s2tContext/s2tActions';

export function NewProposal({ onclick }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const [proposalData, setProposalData] = useState({
    opportunityId: 0,
    details: {
      from: 'Reducer',
      date: '',
      disponibility: '',
      category: '',
      opportunity: '',
      country: '',
      org: '',
      age: {
        minAge: '',
        maxAge: '',
      },
      payment: {
        minPayment: '',
        maxPayment: '',
        currency: '',
      },
      minHeight: '',
    },
    description: '',
    requirements: '',
  });

  const handleSubmit = (e) => {
    addProposal(s2tDispatch, proposalData);
  };

  const competitiveCategoryOptions = [
    { value: 'pro', text: 'Profissional' },
    { value: 'semiPro', text: 'Semi-Profissional' },
    { value: 'academic', text: 'Universitário' },
    { value: 'amateur', text: 'Amador' },
    { value: 'recreational', text: 'Recreacional' },
  ];

  const positionsOptions = [
    { value: 'goalkeeper', text: 'Goleiro' },
    { value: 'left-back', text: 'Lateral Esquerdo' },
    { value: 'right-back', text: 'Lateral Direito' },
    { value: 'center-back', text: 'Zagueiro' },
    { value: 'wing-back', text: 'Ala' },
    { value: 'defensive midfielder', text: 'Primeiro Volante' },
    { value: 'central midfielder', text: 'Meio-Campista' },
    { value: 'attacking midfielder', text: 'Meia Ofensivo' },
    { value: 'wide midfielder', text: 'Meia Lateral' },
    { value: 'second striker', text: 'Segundo atacante' },
    { value: 'left winger', text: 'Ponta Esquerda' },
    { value: 'right winger', text: 'Ponta Direito' },
    { value: 'center forward', text: 'Centroavante' },
  ];

  const currencyOptions = [
    { value: 'R$', text: 'Real' },
    { value: '$', text: 'Dolar (Americano)' },
    { value: '€', text: 'Euro' },
  ];

  console.log(proposalData);

  return (
    <Styled.NewProposalContainer>
      <Row>

        <Title text="Criar oportunidade" uppercase />

        <IconDiv name="Voltar" onclick={onclick}>
          <CloseIcon />
        </IconDiv>
      </Row>

      <AuthWrapper>
        <AuthForm>
          <Subtitle text="Detalhes" uppercase />
          <AuthLayout isopen>
            <AuthInput
              type="text"
              name="league_input"
              id="league_input"
              placeholder="Para qual liga é a oportunidade?"
              title="Liga"
              value={proposalData.details.org}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, org: e.target.value } }))}
              required
            />

            <AuthInput
              type="text"
              name="country_input"
              id="country_input"
              placeholder="Para qual país é a oportunidade?"
              title="País"
              required
              value={proposalData.details.country}
              onchange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, country: e.target.value } }))}
            />

            <AuthDropdown
              title="Para qual posição é a oportunidade"
              placeholder="Escolha a posição"
              id="position"
              required
              options={positionsOptions}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, opportunity: option.text } }))}
            />

            <AuthDropdown
              title="Para qual categoria é a oportunidade?"
              id="competitiveCategory"
              placeholder="Escolha a categoria"
              options={competitiveCategoryOptions}
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, category: option.text } }))}
              required
            />

            <AuthInput
              type="date"
              name="disponibility_input"
              id="disponibility_input"
              title="Qual a data de disponibilidade da oportunidade?"
              value={proposalData.details.disponibility}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, disponibility: e.target.value } }))}
            />

            <AuthInput
              type="number"
              name="minimumHeight_input"
              id="minimumHeight_input"
              placeholder="Qual altura mínima para se candidatar?"
              title="Altura mínima"
              value={proposalData.details.minHeight}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, minHeight: e.target.value } }))}
            />

            <AuthInput
              type="number"
              name="minimumAge_input"
              id="minimumAge_input"
              placeholder="Qual a idade mínima para se candidatar? (Em anos)"
              title="Idade Mínima"
              value={proposalData.details.age.minAge}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, age: { ...prevData.details.age, minAge: e.target.value } } }))}
            />

            <AuthInput
              type="number"
              name="maximumAge_input"
              id="maximumAge_input"
              placeholder="Qual a idade máxima para se candidatar? (Em anos)"
              title="Idade Máxima"
              value={proposalData.details.age.maxAge}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, age: { ...prevData.details.age, maxAge: e.target.value } } }))}
            />

            <AuthInput
              type="text"
              name="mininumPayment_input"
              id="mininumPayment_input"
              placeholder="Qual o menor valor que o jogador pode receber mensalmente?"
              title="Salário mínimo"
              required
              value={proposalData.details.payment.minPayment}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, minPayment: e.target.value } } }))} // Atualize aqui
            />

            <AuthInput
              type="text"
              name="maximumPayment_input"
              id="maximumPayment_input"
              placeholder="Qual o maior valor que o jogador pode receber mensalmente?"
              title="Salário máximo"
              value={proposalData.details.payment.maxPayment}
              onChange={(e) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, maxPayment: e.target.value } } }))} // Atualize aqui
            />

            <AuthDropdown
              title="Qual moeda será usada para o pagamento?"
              placeholder="Escolha a moeda"
              id="paymentCurrency"
              options={currencyOptions}
              required
              onDropdownChange={(option) => setProposalData((prevData) => ({ ...prevData, details: { ...prevData.details, payment: { ...prevData.details.payment, currency: option.value } } }))}
            />

          </AuthLayout>

          <ColumnContainer>
            <Subtitle text="Descrição" uppercase />
            <TextArea
              placeholder="Insira a descrição da sua proposta"
              name="description"
              value={proposalData.description}
              onchange={(e) => setProposalData((prevData) => ({ ...prevData, description: e.target.value }))}
            />
          </ColumnContainer>

          <ColumnContainer>
            <Subtitle text="Requisitos" uppercase />
            <TextArea
              placeholder="Insira outros requisitos para sua proposta"
              name="requirements"
              value={proposalData.requirements}
              onchange={(e) => setProposalData((prevData) => ({ ...prevData, requirements: e.target.value }))}
            />
          </ColumnContainer>

          <AuthButton
            name="createProposal_submit"
            id="createProposal_submit"
            value="Publicar Proposta"
            onclick={(e) => handleSubmit(e)}
          />
        </AuthForm>
      </AuthWrapper>

    </Styled.NewProposalContainer>
  );
}

NewProposal.propTypes = {
  onclick: Prop.func,
};
