import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as Styled from './Register-Styles';

import { Subtitle } from '../../components/elements/Subtitle/Subtitle';
import { Text } from '../../components/elements/Text/Text';
import { AuthContainer } from '../../components/elements/AuthElements/AuthWrapper/AuthWrapper-Styles';
import { AuthForm } from '../../components/elements/AuthElements/AuthForm/AuthForm';
import { AuthInput } from '../../components/elements/AuthElements/AuthInput/AuthInput';
import { AuthDropdown } from '../../components/elements/AuthElements/AuthDropdown/AuthDropdown';
import { AuthButton } from '../../components/elements/AuthElements/AuthButton/AuthButton';
import { AuthRedirect } from '../../components/elements/AuthElements/AuthRedirect/Redirect';
import { StyledLink } from '../../components/elements/StyledLink/StyledLink';
import { Bubble } from '../../components/Bubble/Bubble';
import { theme } from '../../styles/theme';
import { FloatingHeader } from '../../components/Headers/FloatingHeader/FloatingHeader';
import { Logo } from '../../components/elements/Logo/Logo';
import { Nav } from '../../components/Nav/Nav';
import { Button } from '../../components/elements/Button/Button';
import { ListContainer, ListItem } from '../../components/elements/List/List-Styles';

export function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profileType, setProfileType] = useState('');
  const [competitiveCategory, setCompetitiveCategory] = useState('');
  const [competitiveLevel, setCompetitiveLevel] = useState('');
  const [teamCategory, setTeamCategory] = useState('');
  const [plan, setPlan] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }

    const input = {
      username,
      email,
      password,
      profile_type: profileType,
      competitive_category: competitiveCategory,
      competitive_level: competitiveLevel,
      team_category: teamCategory,
      plan,
    };

    try {
      const response = await axios.post('https://showcase2transfer.onrender.com/api/auth/register', input);
      console.log('Resposta do servidor:', response.data);

      localStorage.setItem('username', username);

      navigate('/login');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  const profileTypeOptions = [
    { value: 'player', text: 'Atleta' },
    { value: 'scout', text: 'Scout' },
    { value: 'club', text: 'Clube' },
    { value: 'agent', text: 'Agente' },
    { value: 'league', text: 'Liga' },
    { value: 'university', text: 'Universidade' },
    { value: 'staff', text: 'Staff' },
    { value: 'exchangeAgencie', text: 'Agência de intercâmbio' },
    { value: 'fan', text: 'Fã' },
  ];

  const competitiveCategoryOptions = [
    { value: 'pro', text: 'Profissional' },
    { value: 'semiPro', text: 'Semi-Profissional' },
    { value: 'academic', text: 'Universitário' },
    { value: 'amateur', text: 'Amador' },
    { value: 'recreational', text: 'Recreacional' },
  ];

  const levelsOptions = [
    { value: 'serieA', text: 'Serie A' },
    { value: 'serieB', text: 'Serie B' },
    { value: 'serieC', text: 'Serie C' },
    { value: 'serieD', text: 'Serie D' },
  ];

  const teamCategoryOptions = [
    { value: 'male', text: 'Masculino' },
    { value: 'female', text: 'Feminino' },
  ];

  const plansOptions = [
    { value: 'free', text: 'Plano grátis ( jogador )' },
    { value: 'plan1', text: 'Plano 1 ( jogador ) - R$ 7,00/mês' },
    { value: 'plan2', text: 'Plano 2 ( jogador ) - R$ 15,00/mês' },
    { value: 'plan3', text: 'Plano 3 ( jogador ) - R$ 50,00/mês' },
  ];

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
            bghover={theme.colors.mediumblack}
            textcolor={theme.colors.white}
            texthover={theme.colors.primary}
            border={theme.colors.white}
            borderhover={theme.colors.primary}
          />

          <Button
            path="/register"
            text="Registre-se"
            bgcolor={theme.colors.mediumblack}
            bghover={theme.colors.black}
            textcolor={theme.colors.primary}
            texthover={theme.colors.primary}
            border={theme.colors.primary}
            borderhover={theme.colors.primary}
            active
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
      <Styled.RegisterPage>
        <Bubble>
          <Subtitle text="Passo a passo" uppercase as="h4" size={theme.sizes.xlarge} />
          <ListContainer>
            <ListItem>
              Informe seus dados pessoais com atenção e complete todos os campos obrigatórios.
            </ListItem>

            <ListItem>
              Selecione o tipo de perfil que deseja criar
            </ListItem>

            <ListItem>
              Valide sua conta: Confirme seu email e siga as instruções para concluir o processo de cadastro.
            </ListItem>
          </ListContainer>
        </Bubble>

        <AuthContainer>
          <Subtitle text="Registre-se" uppercase as="h4" size={theme.sizes.xlarge} />

          <AuthForm onSubmit={handleSubmit}>
            <AuthInput
              type="text"
              name="username"
              id="username"
              placeholder="Seu nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <AuthInput
              type="email"
              name="email"
              id="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <AuthInput
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <AuthInput
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <AuthDropdown
              title="Qual o seu tipo de perfil?"
              id="profileType"
              placeholder="Escolha seu tipo de perfil"
              options={profileTypeOptions}
              selectedvalue={profileType}
              onDropdownChange={(value) => setProfileType(value)}
              required
            />

            <AuthDropdown
              title="Qual categoria você se enquadra?"
              id="competitiveCategory"
              placeholder="Escolha sua categoria"
              options={competitiveCategoryOptions}
              selectedvalue={competitiveCategory}
              onDropdownChange={(value) => setCompetitiveCategory(value)}
              required
            />

            <AuthDropdown
              title="Qual o seu nível competitivo?"
              id="competitiveLevel"
              placeholder="Escolha seu nível"
              options={levelsOptions}
              selectedvalue={competitiveLevel}
              onDropdownChange={(value) => setCompetitiveLevel(value)}
            />

            <AuthDropdown
              title="Deseja atuar em um time de qual categoria?"
              id="teamCategory"
              placeholder="Escolha a categoria do time"
              options={teamCategoryOptions}
              selectedvalue={teamCategory}
              onDropdownChange={(value) => setTeamCategory(value)}
            />

            <AuthDropdown
              title="Escolha um plano"
              id="plan"
              placeholder="Escolha seu plano"
              options={plansOptions}
              selectedvalue={plan}
              onDropdownChange={(value) => setPlan(value)}
              required
            />

            <AuthButton
              name="register_submit"
              id="register_submit"
              value="Registrar"
            />

            <AuthRedirect
              text="Já possui uma conta?"
              path="/login"
              pathtext="Login"
            />

            <StyledLink
              text="Voltar para a home"
              path="/"
              color={theme.colors.secondary}
              hovercolor={theme.colors.tertiary}
            />
          </AuthForm>
        </AuthContainer>
      </Styled.RegisterPage>
    </>
  );
}
