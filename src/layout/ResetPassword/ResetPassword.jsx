import Prop from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './ResetPassword-Styles';
import { AuthWrapper } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { Title } from '../../components/elements/Title/Title';
import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { theme } from '../../styles/theme';
import { Popup } from '../../components/elements/Popup/Popup';

export function ResetPassword() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  // enviar os dados para o backend
  };

  return (
    <Styled.ResetPasswordPage>
      <AuthWrapper>

        <AuthContainer>

          <Title text="Alterar senha" size={theme.sizes.xxlarge} />

          <AuthForm>

            <AuthInput
              type="password"
              name="password_input"
              id="password_input"
              placeholder="Insira uma nova senha"
              title="Nova senha"
              required
            />

            <AuthInput
              type="password"
              name="confirm_password_input"
              id="confirm_password_input"
              placeholder="Insira novamente sua nova senha"
              title="Confirme sua nova senha"
              required
            />

            <AuthButton
              name="login_submit"
              id="login_submit"
              value="Confirmar alteração"
              onclick={handleSubmit}
            />

          </AuthForm>
        </AuthContainer>

        {isOpen && (
        <Popup
          title="Sua senha foi alterada com sucesso!"
          firstoption="Fechar"
          firstpath="/login"
          isopen={isOpen}
          onclick={() => setIsOpen(!isOpen)}
        />
        )}

      </AuthWrapper>
    </Styled.ResetPasswordPage>
  );
}
