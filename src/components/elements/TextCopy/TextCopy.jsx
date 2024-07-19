import Prop from 'prop-types';
import React, { useEffect, useState } from 'react';
import { ContentCopy as CopyIcon } from '@styled-icons/material-outlined';
import * as Styled from './TextCopy-Styles';
import { Text } from '../Text/Text';
import { IconDiv } from '../IconDiv/IconDiv';
import { Subtitle } from '../Subtitle/Subtitle';
import { Row } from '../../RowContainer/Row';
import { theme } from '../../../styles/theme';

export function TextCopy({ title, text }) {
  const [message, setMessage] = useState(''); // Armazena a mensagem exibida
  const [isCopied, setIsCopied] = useState(false); // Indica se o texto foi copiado

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(text); // Assume que 'text' está definido em outro lugar
      setMessage('Texto copiado com sucesso!');
      setIsCopied(true);
    } catch (error) {
      setMessage('Erro ao copiar o texto!');
      setIsCopied(false);
    }
  };

  useEffect(() => {
    let timeoutId;

    if (message && isCopied) {
      timeoutId = setTimeout(() => {
        setMessage('');
        setIsCopied(false);
      }, 3500);
    }

    return () => clearTimeout(timeoutId);
  }, [message, isCopied]);

  return (
    <Styled.TextCopyContainer>

      <Text text={title} uppercase />

      <Row>
        <Styled.TextCopyElement active={isCopied ? 'active' : undefined}>
          <Text text={text} color={isCopied ? theme.colors.primary : theme.colors.white} />
          <IconDiv name="Copiar" onclick={handleCopyText} active={isCopied}>
            <CopyIcon />
          </IconDiv>
        </Styled.TextCopyElement>

        {message && <Text text={message} />}
      </Row>

    </Styled.TextCopyContainer>

  );
}

TextCopy.propTypes = {
  title: Prop.string,
  text: Prop.string.isRequired,
};
