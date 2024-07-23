import Prop from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { ImageAdd as AddImageIcon } from '@styled-icons/fluentui-system-filled';
import * as Styled from './ProfilePicture-Styles';
import { Button } from '../Button/Button';
import { theme } from '../../../styles/theme';
import { AuthIconFile } from '../AuthElements/AuthIconFile/AuthIconFile';

export function ProfilePicture({
  imagefile,
  badge = '',
  type = '',
  ownerview,
}) {
  const [profilePicture, setProfilePicture] = useState(null); // Set initial state to null

  // executado quando o usuário envia uma nova foto
  const handlePictureChange = (event) => {
    const newFile = event.target.files[0];
    if (newFile) {
      // lógica para enviar a imagem para o backend
    }
  };

  // executado sempre que imagefile(Foto de perfil do usuário é modificada)
  useEffect(() => {
    if (imagefile && imagefile instanceof Blob) { // verifica se a imagem veio como um blob
      // processo para transformar o blob em um src renderizável
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target.result);
        reader.readAsDataURL(imagefile);
      };
    }
  }, [imagefile]);

  return (
    <Styled.ProfilePictureContainer>

      <Styled.ProfilePictureElement>
        <Styled.Picture src={profilePicture || '/assets/images/logos/vertical-background.png'} alt="Foto de perfil do usuário" />
        {ownerview && (
          <Styled.Badge>
            <AuthIconFile
              id="changeProfilePicture"
              hovercolor={theme.colors.primary}
              name="Botão para alterar a foto do seu perfil"
              onChange={handlePictureChange}
            >
              <AddImageIcon />
            </AuthIconFile>
          </Styled.Badge>
        )}
      </Styled.ProfilePictureElement>

      {type && (
        <Button
          text={type}
          bgcolor={theme.colors.secondary}
          bghover={theme.colors.secondary}
          textcolor={theme.colors.black}
          texthover={theme.colors.black}
          border={theme.colors.black}
          borderhover={theme.colors.black}
        />
      )}
    </Styled.ProfilePictureContainer>
  );
}
