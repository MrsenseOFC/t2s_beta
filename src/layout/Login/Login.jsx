import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as Styled from './Login-Styles';

import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthRedirect } from '../../components/elements/AuthElements/AuthRedirect/Redirect';
import { AuthOptions } from '../../components/elements/AuthElements/AuthOptions/AuthOptions';
import { AuthWrapper } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper';

import { StyledLink } from '../../components/elements/StyledLink/StyledLink';
import { Title } from '../../components/elements/Title/Title';
import { theme } from '../../styles/theme';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { FloatingHeader } from '../../components/Headers/FloatingHeader/FloatingHeader';
import { Logo } from '../../components/elements/Logo/Logo';
import { Nav } from '../../components/Nav/Nav';
import { Button } from '../../components/elements/Button/Button';

export function Login() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://showcase2transfer.onrender.com/api/auth/login', {
        email: userData.email,
        password: userData.password,
      });

      if (response.data && response.data.token) {
        const { token } = response.data;
        localStorage.setItem('accessToken', token); // Armazena o token JWT no localStorage
        const { user } = response.data;

        // Redirecionamento baseado no tipo de perfil
        if (user.profile_type === 'player') {
          navigate('/player-dashboard');
        } else if (user.profile_type === 'scout') {
          navigate('/scout-dashboard');
        } else if (user.profile_type === 'club') {
          navigate('/club-dashboard');
        } else {
          navigate('/default-dashboard');
        }
      } else {
        alert('Credenciais inválidas. Por favor, verifique seus dados.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.response ? error.response.data : error.message);
      alert('Erro ao fazer login. Por favor, tente novamente.');
    }

    setUserData({
      ...userData,
      password: '', // Limpa a senha do estado após o envio do formulário
    });
  };

  return (
    <>

      <FloatingHeader>

        <Logo size="150px" logo="/assets/images/pngs/logo.png" />

        <Nav>

          <Button
            path="/"
            text="Página principal"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/login"
            text="Login"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
          />

          <Button
            path="/register"
            text="Registre-se"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/benefits"
            text="Benefícios"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />
        </Nav>
      </FloatingHeader>

      <Styled.LoginPage>
        <AuthWrapper>
          <AuthContainer>
            <Title text="Login" size={theme.sizes.xxlarge} />

            <AuthForm onSubmit={handleSubmit} method="post">
              <AuthInput
                type="email"
                name="email"
                id="email_input"
                placeholder="Seu email"
                title="E-mail"
                value={userData.email}
                onChange={handleChange}
                required
              />

              <AuthInput
                type="password"
                name="password"
                id="password_input"
                placeholder="Insira sua senha"
                title="Senha"
                value={userData.password}
                onChange={handleChange}
                required
              />

              <AuthButton
                name="login_submit"
                id="login_submit"
                value="Login"
                onClick={handleSubmit}
              />

              <AuthOptions
                checkboxtext="Lembrar login"
                checkboxid="rememberMe"
                path="/forgot-password"
                pathtext="Esqueceu a senha?"
              />

              <AuthRedirect
                text="Não possui uma conta?"
                path="/register"
                pathtext="Registre-se"
              />

              <StyledLink
                text="Voltar para home"
                path="/"
                color={theme.colors.secondary}
                hovercolor={theme.colors.tertiary}
              />
            </AuthForm>
          </AuthContainer>
        </AuthWrapper>
      </Styled.LoginPage>
    </>
  );
}
