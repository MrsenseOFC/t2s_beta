import Prop from 'prop-types';
import React, { useContext, useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import axios from 'axios';
import * as Styled from './NewEvent-Styles';
import { Subtitle } from '../../Subtitle/Subtitle';
import { ColumnContainer } from '../../../ColumnContainer/Column-Styles';
import { AuthWrapper } from '../../AuthElements/AuthWrapper/AuthWrapper';
import { AuthForm } from '../../AuthElements/AuthForm/AuthForm';
import { TextArea } from '../../TextArea/TextArea';
import { AuthInput } from '../../AuthElements/AuthInput/AuthInput';
import { AuthButton } from '../../AuthElements/AuthButton/AuthButton';
import { IconDiv } from '../../IconDiv/IconDiv';
import { Title } from '../../Title/Title';
import { Row } from '../../../RowContainer/Row';
import { AuthLayout } from '../../AuthElements/AuthLayout/AuthLayout';
import { AuthDropdown } from '../../AuthElements/AuthDropdown/AuthDropdown';
import { S2tContext } from '../../../../contexts/s2tContext/S2tContext';
import { addProposal } from '../../../../contexts/s2tContext/s2tActions';
import { AuthFile } from '../../AuthElements/AuthFile/AuthFile';
import { theme } from '../../../../styles/theme';

export function NewEvent({ onclick }) {
  const s2tContext = useContext(S2tContext);
  const { s2tState, s2tDispatch } = s2tContext;

  const [eventData, setEventData] = useState({
    id: 1,
    title: '',
    subtitle: '',
    description: '',
    organizer: '',
    startDate: '',
    endDate: '',
    startHour: '',
    format: '',
    country: '',
    state: '',
    zipCode: '',
    adress: '',
    path: '/',
    src: '/assets/images/others/leagues.png',
    termsAndConditions: '',
  });

  const handleSubmit = (e) => {

  };

  const eventFormatOptions = [
    { value: 'online', text: 'Online' },
    { value: 'inPerson', text: 'Presencial' },
  ];

  return (
    <Styled.NewEventContainer>
      <Row>
        <Title text="Criar evento" uppercase />

        <IconDiv name="Voltar" onclick={onclick} hovercolor={theme.colors.red}>
          <CloseIcon />
        </IconDiv>
      </Row>

      <AuthWrapper>
        <AuthForm>
          <Subtitle text="Detalhes" uppercase />
          <AuthLayout isopen>
            <AuthInput
              type="text"
              name="eventName_input"
              id="eventName_input"
              placeholder="Escolha o título do seu evento"
              title="Título"
              value={eventData.title}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, title: e.target.value }))}
              required
            />

            <AuthInput
              type="text"
              name="eventSubtitle_input"
              id="eventSubtitle_input"
              placeholder="Um breve resumo sobre o evento"
              title="Resumo"
              value={eventData.subtitle}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, subtitle: e.target.value }))}
            />

            <AuthInput
              type="text"
              name="eventOrganizer_input"
              id="eventOrganizer_input"
              placeholder="Quem está organizando o evento"
              title="Organizador"
              value={eventData.organizer}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, organizer: e.target.value }))}
              required
            />

            <AuthDropdown
              id="eventFormat"
              options={eventFormatOptions}
              placeholder="Escolha"
              title="Qual o formato do evento?"
              onDropdownChange={(value) => setEventData((prevData) => ({ ...prevData, format: value }))}
            />

            {eventData.format === 'inPerson' && (
              <>
                <AuthInput
                  type="text"
                  name="eventCountry_input"
                  id="eventCountry_input"
                  placeholder="Insira o país que será realizado o evento"
                  title="País"
                  value={eventData.country}
                  onChange={(e) => setEventData((prevData) => ({ ...prevData, country: e.target.value }))}
                />

                <AuthInput
                  type="text"
                  name="eventState_input"
                  id="eventState_input"
                  placeholder="Insira o estado que será realizado o evento"
                  title="Estado"
                  value={eventData.state}
                  onChange={(e) => setEventData((prevData) => ({ ...prevData, state: e.target.value }))}
                />

                <AuthInput
                  type="text"
                  name="eventZipCode_input"
                  id="eventZipCode_input"
                  placeholder="Insira o CEP"
                  title="CEP"
                  value={eventData.zipCode}
                  onChange={(e) => setEventData((prevData) => ({ ...prevData, zipCode: e.target.value }))}
                />

                <AuthInput
                  type="text"
                  name="eventState_input"
                  id="eventState_input"
                  placeholder="Insira o restante do endereço"
                  title="Endereço"
                  value={eventData.adress}
                  onChange={(e) => setEventData((prevData) => ({ ...prevData, adress: e.target.value }))}
                />

              </>
            )}

            {eventData.format === 'online' && (
            <AuthInput
              type="text"
              name="eventPlatform_input"
              id="eventPlatform_input"
              placeholder="Qual plataforma será realizado o evento"
              title="Plataforma"
              value={eventData.adress}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, adress: e.target.value }))}
            />
            )}

            <AuthInput
              type="time"
              name="eventStartHour_input"
              id="eventStartHour_input"
              title="Horário de início do evento"
              value={eventData.startHour}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, startHour: e.target.value }))}
            />

            <AuthInput
              type="date"
              name="eventStartDate_input"
              id="eventStartDate_input"
              title="Data de início do evento"
              value={eventData.startDate}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, startDate: e.target.value }))}
              required
            />

            <AuthInput
              type="date"
              name="eventEndDate_input"
              id="eventEndDate_input"
              title="Data do fim do evento"
              value={eventData.endDate}
              onChange={(e) => setEventData((prevData) => ({ ...prevData, endDate: e.target.value }))}
              required
            />

            <AuthFile
              id="eventImage_input"
              text="Selecione a imagem de capa para o seu evento (16:9)"
            />

          </AuthLayout>

          <ColumnContainer>
            <Subtitle text="Descrição" uppercase />
            <TextArea
              placeholder="Insira mais detalhes sobre o evento"
              name="description"
              value={eventData.description}
              onchange={(e) => setEventData((prevData) => ({ ...prevData, description: e.target.value }))}
            />
          </ColumnContainer>

          {/* <AuthInput
            type="text"
            name="eventDocuments_input"
            id="eventDocuments_input"
            placeholder="Insira aqui o link para acesso aos documentos do evento, incluindo os Termos e Condições."
            title="Documentos"
            value={eventData.location}
            onChange={(e) => setEventData((prevData) => ({ ...prevData, location: e.target.value }))}
            required
          /> */}

          <AuthButton
            name="createEvent_submit"
            id="createEvent_submit"
            value="Publicar Evento"
            onclick={(e) => handleSubmit(e)}
          />
        </AuthForm>
      </AuthWrapper>

    </Styled.NewEventContainer>
  );
}

NewEvent.propTypes = {
  onclick: Prop.func,
};
