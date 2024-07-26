import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { DocumentPdf as DocumentPdfIcon, DocumentTableArrowRight } from '@styled-icons/fluentui-system-filled';
import * as Styled from './EventModal-Styles';
import { FloatingMenu } from '../../../FloatingMenu/FloatingMenu';
import { Row } from '../../../RowContainer/Row';
import { Title } from '../../Title/Title';
import { IconDiv } from '../../IconDiv/IconDiv';
import { Subtitle } from '../../Subtitle/Subtitle';
import { GridTwoColumn } from '../../../GridTwoColumn/GridTwoColumn';
import { InfoInRow } from '../../InfoInRow/InfoInRow';
import { ColumnContainer } from '../../../ColumnContainer/Column-Styles';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';
import { theme } from '../../../../styles/theme';
import { AuthInput } from '../../AuthElements/AuthInput/AuthInput';
import { AuthOptions } from '../../AuthElements/AuthOptions/AuthOptions';
import { AuthCheckbox } from '../../AuthElements/AuthCheckbox/AuthCheckbox';
import { GridOneColumn } from '../../../GridOneColumn/GridOneColumn';
import { AuthForm } from '../../AuthElements/AuthForm/AuthForm';
import { StyledLink } from '../../StyledLink/StyledLink';

export function EventModal({ event, onclick }) {
  const [isRegistering, setIsRegistering] = useState();

  return (
    <Styled.EventModalContainer>
      <>
        <Row>
          {event.title && <Title text={event.title} uppercase />}
          <IconDiv
            onclick={onclick}
            name="Fechar Evento"
            hovercolor={theme.colors.red}
          >
            <CloseIcon />
          </IconDiv>
        </Row>

        <Subtitle text="Detalhes" uppercase />

        <GridOneColumn>
          {event.organizer && <InfoInRow infotitle="Organizador(a)" info={event.organizer} uppercase />}
          {event.startDate && <InfoInRow infotitle="Data de início" info={event.startDate} uppercase />}
          {event.endDate && <InfoInRow infotitle="Data do fim" info={event.endDate} uppercase />}
          {event.startHour && <InfoInRow infotitle="Horário" info={`${event.startHour}h`} uppercase />}
          {event.country && <InfoInRow infotitle="País" info={event.country} uppercase />}
          {event.state && <InfoInRow infotitle="Estado" info={event.state} uppercase />}
          {event.zipCode && <InfoInRow infotitle="CEP" info={event.zipCode} uppercase />}
          {event.adress && <InfoInRow infotitle="Endereço" info={event.adress} uppercase />}
          {event.platform && <InfoInRow infotitle="Plataforma" info={event.platform} uppercase />}
        </GridOneColumn>

        <ColumnContainer>
          <Subtitle text="Descrição" uppercase />
          {event.description && <Text text={event.description} />}
        </ColumnContainer>

        {isRegistering && (
          <AuthForm>
            <AuthInput
              title="Nome"
              type="text"
              name="completeName_input"
              id="completeName_input"
              placeholder="Seu nome completo"
              required
            />

            <AuthInput
              title="Endereço"
              type="text"
              name="address_input"
              id="address_input"
              placeholder="Seu endereço completo"
              required
            />

            <AuthInput
              title="E-mail"
              type="email"
              name="email_input"
              id="email_input"
              placeholder="Seu e-mail cadastrado"
              required
            />

            <AuthInput
              title="Número de telefone"
              type="number"
              name="phoneNumber_input"
              id="phoneNumber_input"
              placeholder="Seu número de telefone cadastrado"
              required
            />

            <AuthInput
              title="Senha"
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha cadastrada"
              required
            />

            <AuthInput
              title="Confirme sua senha"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirme sua senha cadastrada"
              required
            />

            <StyledLink path="https://x.com/home" newtab>
              <IconDiv name="Documentos">
                <DocumentTableArrowRight />
              </IconDiv>
              <Text text="Acesse os documentos do evento" />
            </StyledLink>

            <AuthCheckbox
              text="
                Li, compreendi e concordo com todos os termos e condições descritos nos documentos acima. Além disso, reconheço que isto constitui uma assinatura digital em meu nome."
              id="acceptEventTerms"
            />
          </AuthForm>
        )}

        {isRegistering ? (
          <Button
            text="Registrar"
            bgcolor={theme.colors.quaternary}
            bghover={theme.colors.secondary}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
            border={theme.colors.tertiary}
            borderhover={theme.colors.white}
            onclick={() => setIsRegistering(!isRegistering)}
          />
        ) : (
          <Button
            text="Eu quero participar"
            bgcolor={theme.colors.quaternary}
            bghover={theme.colors.secondary}
            textcolor={theme.colors.white}
            texthover={theme.colors.white}
            border={theme.colors.tertiary}
            borderhover={theme.colors.white}
            onclick={() => setIsRegistering(!isRegistering)}
          />
        )}

      </>

    </Styled.EventModalContainer>
  );
}

EventModal.propTypes = {
  event: Prop.arrayOf(Prop.object).isRequired,
  onclick: Prop.func,
};
