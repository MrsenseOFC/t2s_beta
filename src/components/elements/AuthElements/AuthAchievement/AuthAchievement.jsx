import Prop from 'prop-types';
import React from 'react';
import * as Styled from './AuthAchievement-Styles';
import { AuthInfo } from '../AuthInfo/AuthInfo';
import { AuthInput } from '../AuthInput/AuthInput';
import { Button } from '../../Button/Button';
import { theme } from '../../../../styles/theme';

export function AuthAchievement({
  title, id, inputtitle, placeholder,
}) {
  return (
    <Styled.AuthAchievementContainer>

      <Styled.AuthAchievementTitle>
        {title}
      </Styled.AuthAchievementTitle>

      <AuthInfo text="Exemplo" />

      <AuthInput
        type="text"
        name={`${id}_input`}
        id={`${id}_input`}
        placeholder={placeholder}
        title={inputtitle}
      />

      <AuthInput
        type="number"
        name={`${id}AchievementYear_input`}
        id={`${id}AchievementYear_input`}
        placeholder="Ano da conquista"
        title="Ano"
      />

      <Button
        text="Adicionar"
        bgcolor={theme.colors.quaternary}
        bghover={theme.colors.secondary}
        textcolor={theme.colors.white}
        texthover={theme.colors.white}
        border={theme.colors.tertiary}
        borderhover={theme.colors.white}
      />

    </Styled.AuthAchievementContainer>
  );
}

AuthAchievement.propTypes = {
  title: Prop.string,
  inputtitle: Prop.string,
  placeholder: Prop.string,
  id: Prop.string.isRequired,

};
