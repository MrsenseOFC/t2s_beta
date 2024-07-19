// src/contexts/AuthContext/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Criação do contexto de autenticação
const AuthContext = createContext();

// Hook personalizado para consumir o contexto de autenticação
export const useAuth = () => useContext(AuthContext);

// Provedor de autenticação que envolve toda a aplicação
export function AuthProvider({ children }) {
  // Estado para armazenar o usuário atualmente autenticado
  const [currentUser, setCurrentUser] = useState(null);

  // Estado para controlar o carregamento de autenticação
  const [loading, setLoading] = useState(true);

  // Função para realizar o login do usuário
  const login = (userData) => {
    setCurrentUser(userData);
  };

  // Função para realizar o logout do usuário
  const logout = () => {
    setCurrentUser(null);
  };

  // Valor do contexto de autenticação, contendo o estado atual e funções
  const authContextValue = {
    currentUser,
    login,
    logout,
    loading,
  };

  // Retorna o provedor do contexto de autenticação, passando o valor do contexto e envolvendo os filhos
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
