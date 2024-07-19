import Prop from 'prop-types';
import React, { useState } from 'react';
import { Close } from '@styled-icons/material-outlined';
import Zoom from 'react-medium-image-zoom';
import * as Styled from './ImageModal-Styles';
import { IconDiv } from '../IconDiv/IconDiv';
import { theme } from '../../../styles/theme';
import 'react-medium-image-zoom/dist/styles.css';

export function ImageModal({ onclick, imagesrc }) {
  // const imageZoomElement = document.querySelector('.fullView'); // Seletor CSS para o seu ImageZoom
  // const hasOpenedClass = imageZoomElement.classList.contains('opened');

  // if (hasOpenedClass) {
  //   // O ImageZoom possui a classe "opened"
  //   console.log('ImageZoom está aberto!');
  // } else {
  //   // O ImageZoom não possui a classe "opened"
  //   console.log('ImageZoom não está aberto.');
  // }

  return (
    <>
      {imagesrc && (
      <Styled.ModalWrapper>

        <Styled.ImageModalContainer>

          <IconDiv name="Fechar imagem" hovercolor={theme.colors.red} onclick={onclick}>
            <Close />
          </IconDiv>

          <Styled.ImageContainer>
            <Zoom>
              <img
                alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                src={imagesrc}
              />
            </Zoom>
          </Styled.ImageContainer>

        </Styled.ImageModalContainer>

      </Styled.ModalWrapper>
      )}
    </>
  );
}

ImageModal.propTypes = {
  imagesrc: Prop.string,
  onclick: Prop.func,
};
