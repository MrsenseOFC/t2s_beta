import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import * as Styled from './ReportModal-Styles';
import { AuthDropdown } from '../AuthElements/AuthDropdown/AuthDropdown';
import { IconDiv } from '../IconDiv/IconDiv';
import { Subtitle } from '../Subtitle/Subtitle';
import { Column } from '../../ColumnContainer/Column';
import { TextArea } from '../TextArea/TextArea';
import { AuthForm } from '../AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../AuthElements/AuthButton/AuthButton';
import { Row } from '../../RowContainer/Row';
import { theme } from '../../../styles/theme';
import { Popup } from '../Popup/Popup';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';
import { FloatingMenu } from '../../FloatingMenu/FloatingMenu';

export function ReportModal({ onclick, imageid }) {
  const [reported, setReported] = useState(false);
  const reportOptions = [
    { value: 'inappropriateContent', text: 'Contéudo inadequado' },
    { value: 'copyright', text: 'Direitos Autorais' },
    { value: 'mediaManipulation', text: 'Manipulação de Mídia' },
    { value: 'poorQuality', text: 'Qualidade Ruim' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // lógica necessária para constar que a imagem do ID X foi reportada

    // Seta o reported para true para o componente renderizar uma mensagem de agradecimento quando
    // o usuário terminar de reportar
    setReported(true);
  };

  const handleEndReport = () => {
    // Seta o reported de volta para false para quando o componente ser chamado de novo ele estar resetado
    setReported(false);

    // disparada a função recebida na prop
    onclick();
  };

  return (
    <>
      {imageid && (
        <FloatingMenu>
          <Styled.ReportModalElement>

            {!reported && (
            <>
              <Row>
                <Subtitle text="Reportar" uppercase size={theme.sizes.xxlarge} />

                <IconDiv
                  onclick={onclick}
                  name="Fechar"
                  hovercolor={theme.colors.red}
                >
                  <CloseIcon />
                </IconDiv>

              </Row>

              <AuthForm>
                <AuthDropdown
                  title="Por qual motivo está reportando essa foto ou vídeo?"
                  id="competitiveCategory"
                  placeholder="Escolha o motivo"
                  options={reportOptions}
                  required
                />

                <Column>
                  {/* <Subtitle text="Insira mais detalhes" uppercase /> */}
                  <TextArea placeholder="Insira mais detalhes sobre o motivo (Opcional)" info="description" />
                </Column>

                <AuthButton
                  name="report_submit"
                  id="report_submit"
                  value="Confirmar"
                  onclick={handleSubmit}
                />

              </AuthForm>
            </>
            )}

            {reported && (
            <>
              <Text text="Recebemos a sua denúncia!" uppercase />
              <Text text="Obrigado por nos ajudar a manter nossa plataforma segura e livre de conteúdo impróprio. Sua denúncia será cuidadosamente analisada por nossa equipe. " />
              <Button
                text="Fechar"
                bgcolor={theme.colors.secondary}
                bghover={theme.colors.quaternary}
                textcolor={theme.colors.white}
                texthover={theme.colors.white}
                border={theme.colors.white}
                borderhover={theme.colors.white}
                onclick={handleEndReport}
              />
            </>
            )}

          </Styled.ReportModalElement>
        </FloatingMenu>
      )}
    </>
  );
}

ReportModal.propTypes = {
  onclick: Prop.func,
};
