import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { DocumentPdf as DocumentPdfIcon, DocumentTableArrowRight } from '@styled-icons/fluentui-system-filled';
import * as Styled from './EventModal-Styles';
import { FloatingMenu } from '../../../../../../components/FloatingMenu/FloatingMenu';
import { Row } from '../../../../../../components/RowContainer/Row';
import { Title } from '../../../../../../components/elements/Title/Title';
import { IconDiv } from '../../../../../../components/elements/IconDiv/IconDiv';
import { Subtitle } from '../../../../../../components/elements/Subtitle/Subtitle';
import { GridTwoColumn } from '../../../../../../components/GridTwoColumn/GridTwoColumn';
import { InfoInRow } from '../../../../../../components/elements/InfoInRow/InfoInRow';
import { ColumnContainer } from '../../../../../../components/ColumnContainer/Column-Styles';
import { Text } from '../../../../../../components/elements/Text/Text';
import { Button } from '../../../../../../components/elements/Button/Button';
import { theme } from '../../../../../../styles/theme';
import { AuthInput } from '../../../../../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthOptions } from '../../../../../../components/elements/AuthElements/AuthOptions/AuthOptions';
import { AuthCheckbox } from '../../../../../../components/elements/AuthElements/AuthCheckbox/AuthCheckbox';
import { GridOneColumn } from '../../../../../../components/GridOneColumn/GridOneColumn';
import { AuthForm } from '../../../../../../components/elements/AuthElements/AuthForm/AuthForm';
import { StyledLink } from '../../../../../../components/elements/StyledLink/StyledLink';

export function EventModal({ event, onclick }) {
  const [isRegistering, setIsRegistering] = useState();

  return (
    <Styled.EventModalContainer>
      <>
        <Row>
          <Title text={event.title} uppercase />

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
          <InfoInRow infotitle="Organizador(a)" info={event.organizer} uppercase />
          <InfoInRow infotitle="Data de início" info={event.startDate} uppercase />
          <InfoInRow infotitle="Data do fim" info={event.endDate} uppercase />
          <InfoInRow infotitle="Horário" info={`${event.startHour}h`} uppercase />
          <InfoInRow infotitle="Local" info={event.location} uppercase />
        </GridOneColumn>

        <ColumnContainer>
          <Subtitle text="Descrição" uppercase />
          <Text text={event.description} />
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
