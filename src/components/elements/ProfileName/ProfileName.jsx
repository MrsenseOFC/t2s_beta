import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Styled from './ProfileName-Styles';

export function ProfileName() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          throw new Error('Token não encontrado no localStorage');
        }

        const response = await axios.get('https://showcase2transfer.onrender.com/api/users', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data && response.data.username) {
          setUsername(response.data.username);
        } else {
          console.error('Nome de usuário não encontrado na resposta:', response.data);
        }
      } catch (error) {
        console.error('Erro ao buscar nome de usuário:', error);
      }
    };

    fetchUsername();
  }, []); // Executa apenas uma vez após a montagem do componente

  return (
    <Styled.ProfileNameElement>
      <Styled.Name>
        {username}
      </Styled.Name>
    </Styled.ProfileNameElement>
  );
}
