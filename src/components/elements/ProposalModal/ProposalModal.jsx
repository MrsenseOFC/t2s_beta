import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './ProposalModal-Styles';
import { Title } from '../Title/Title';
import { GridTwoColumn } from '../../GridTwoColumn/GridTwoColumn';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';
import { Subtitle } from '../Subtitle/Subtitle';
import { InfoInRow } from '../InfoInRow/InfoInRow';
import { Text } from '../Text/Text';
import { ColumnContainer } from '../../ColumnContainer/Column-Styles';
import { TextArea } from '../TextArea/TextArea';
import { Row } from '../../RowContainer/Row';
import { IconDiv } from '../IconDiv/IconDiv';
import { FavoriteIcon } from '../FavoriteIcon/FavoriteIcon';

export function ProposalModal({ proposal, onclick, isapplied }) {
  const [message, setMessage] = useState('');
  console.log(proposal);

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    // enviar os dados para o backend
  };

  return (

    <Styled.ProposalModalElement>

      {proposal && (
      <>
        <Row>
          <Title text="Oportunidade" uppercase />

          <IconDiv
            onclick={onclick}
            name="Fechar proposta"
            hovercolor={theme.colors.red}
          >
            <CloseIcon />
          </IconDiv>
        </Row>

        <Subtitle text="Detalhes" uppercase />

        <GridTwoColumn>

          {proposal.details.from && <InfoInRow infotitle="Proposta de" info={proposal.details.from} uppercase />}
          {proposal.details.date && <InfoInRow infotitle="Data" info={proposal.details.date} uppercase />}
          {proposal.details.disponibility ? <InfoInRow infotitle="Disponibilidade" info={proposal.details.disponibility} uppercase /> : <InfoInRow infotitle="Disponibilidade" info="Imediato" uppercase />}
          {proposal.details.org && <InfoInRow infotitle="Liga" info={proposal.details.org} uppercase />}
          {proposal.details.country && <InfoInRow infotitle="País" info={proposal.details.country} uppercase />}
          {proposal.details.category && <InfoInRow infotitle="Categoria" info={proposal.details.category} uppercase />}
          {proposal.details.opportunity && <InfoInRow infotitle="Posição" info={proposal.details.opportunity} uppercase />}
          {proposal.details.minHeight && <InfoInRow infotitle="Altura mínima" info={`${proposal.details.minHeight} M`} uppercase />}
          {proposal.details.age.minAge && <InfoInRow infotitle="Idade mínima" info={`${proposal.details.age.minAge} Anos`} uppercase />}
          {proposal.details.age.maxAge && <InfoInRow infotitle="Idade máxima" info={`${proposal.details.age.maxAge} Anos`} uppercase />}
          {proposal.details.payment.minPayment && <InfoInRow infotitle="Salário" info={`${proposal.details.payment.minPayment} | ${proposal.details.payment.maxPayment} ${proposal.details.payment.currency}`} uppercase />}

        </GridTwoColumn>

        {proposal.description && (
        <ColumnContainer>
          <Subtitle text="Descrição" uppercase />
          <Text text={proposal.description} />
        </ColumnContainer>
        )}

        {proposal.requirements && (
        <ColumnContainer>
          <Subtitle text="Requisitos" uppercase />
          <Text text={proposal.requirements} />
        </ColumnContainer>
        )}

        <ColumnContainer>
          <Subtitle text="Mensagem" uppercase />
          <TextArea placeholder="Opcional" info="message" onChange={(e) => setMessage(e.target.value)} value={message} />

          {isapplied ? (
            <Button
              text="Você já enviou uma proposta"
              bgcolor={theme.colors.darkgray}
              bghover={theme.colors.darkgray}
              textcolor={theme.colors.white}
              texthover={theme.colors.white}
              border={theme.colors.lightgray}
              borderhover={theme.colors.lightgray}
            />
          ) : (
            <Button
              text="Enviar proposta"
              bgcolor={theme.colors.quaternary}
              bghover={theme.colors.secondary}
              textcolor={theme.colors.white}
              texthover={theme.colors.white}
              border={theme.colors.tertiary}
              borderhover={theme.colors.white}
              onclick={handleSubmitMessage}
            />
          )}

        </ColumnContainer>
      </>
      )}

    </Styled.ProposalModalElement>

  );
}

ProposalModal.propTypes = {
  proposal: Prop.func,
  onclick: Prop.func,
  isapplied: Prop.bool,
};
