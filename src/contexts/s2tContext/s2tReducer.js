import axios from 'axios';
import * as types from './s2tTypes';

export const s2tReducer = async (state, action) => {
  switch (action.type) {
    case types.show_data: {
      return { ...state };
      // padrão usado: return { ...state, player: [...action.payload] };
    }

    // case types.add_proposal: {
    //   return {
    //     ...state,
    //     proposals: {
    //       ...state.proposals,
    //       male: {
    //         ...state.proposals.male,
    //         professional: {
    //           ...state.proposals.male.professional,
    //           clubs: [...state.proposals.male.professional.clubs, ...action.payload],
    //         },
    //       },
    //     },
    //   }; }

    case types.add_proposal: {
      // Pega os dados do estado atual
      const proposal = { ...action.payload };

      try {
        // Envia os dados da proposta para a API usando Axios
        const response = await axios.post('/api/proposals', proposal);

        // Handle da resposta da API (opcional)
        console.log('Proposta enviada com sucesso:', response.data);
      } catch (error) {
        // Tratamento de erros da API
        console.error('Erro ao enviar proposta:', error);
      }

      console.log(proposal);
    }

    default: {
      return { ...state };
    }
  }
};
