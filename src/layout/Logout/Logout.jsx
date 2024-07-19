import Prop from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './Logout-Styles';
import { Popup } from '../../components/elements/Popup/Popup';

export function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.alert('Criar Lógica para fazer o logout');
  };

  return (
    <Styled.LogoutPage>
      <Popup
        isopen
        title="Você deseja realmente encerrar sua sessão?"
        firstoption="Sim"
        onfirstclick={handleLogout}
        firstpath="/"
        secondoption="Não"
        onsecondclick={() => navigate(-1)}
      />
    </Styled.LogoutPage>
  );
}

Logout.propTypes = {
};
