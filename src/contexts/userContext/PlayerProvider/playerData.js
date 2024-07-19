// armazena todos os dados do atleta
export const playerData = {

  type: {
    gender: 'male',
    category: 'professional',
  },
  // dados gerais do perfil
  profile:
  {
    // dados usados no banner do atleta. Badge = icone referente ao atual plano dele
    banner: {
      name: 'Bernardo da Silva',
      profileImageSrc: {},
      badge: '/assets/images/pngs/medal.png',
      backgroundImageSrc: '/assets/images/profile/banner.png',
    },

    // Informações que são exibidas abaixo do banner
    info:
      [
        { title: 'Nascimento', info: '05/02/1992' },
        { title: 'Idade', info: 32 },
        { title: 'Local de nascimento', info: 'Mogi das cruzes' },
        { title: 'Nacionalidade', info: 'Brasil' },
        { title: 'Passaporte', info: 'N/A' },
        { title: 'Time', info: 'Masculino' },
        { title: 'Altura', info: '1,72M' },
        { title: 'Peso', info: '75 KG' },
        { title: 'Melhor perna', info: 'Direita' },
        { title: 'Posição Principal', info: 'Ponta Esquerda' },
        { title: 'Posição Secundária', info: 'Centroavante' },
        { title: 'Categoria', info: 'Adulto' },
        { title: 'TOEFL', info: 'N/A' },
        { title: 'ACT', info: 'N/A' },
        { title: 'SAT', info: 'N/A' },
      ],

    // Fotos ou vídeos no perfil do usuário
    photos: [
      {
        id: '1',
        src: '/assets/images/profile/photo-1.png',
        type: 'photo',
        isfavorite: true,
      },

      {
        id: '2',
        src: '/assets/images/profile/photo-2.png',
        type: 'photo',
        isfavorite: false,
      },

      {
        id: '3',
        src: '/assets/images/profile/photo-3.png',
        type: 'photo',
        isfavorite: true,
      },

      {
        id: '4',
        src: '/assets/images/profile/photo-4.png',
        type: 'photo',
        isfavorite: true,
      },

      {
        id: '5',
        src: '/assets/images/profile/photo-1.png',
        type: 'photo',
        isfavorite: false,
      },

      {
        id: '6',
        src: '/assets/images/profile/photo-2.png',
        type: 'photo',
        isfavorite: false,
      },

      {
        id: '7',
        src: '/assets/images/profile/photo-3.png',
        type: 'photo',
        isfavorite: false,
      },
    ],

    // Histórico de clubes do usuário
    clubs: [
      {
        id: '1',
        name: 'São Paulo',
        image: '/assets/images/background.png',
        years: [2010, 2015],
      },

      {
        id: '2',
        name: 'Barcelona',
        image: '/assets/images/background.png',
        years: [2015, 2015],
      },

      {
        id: '3',
        name: 'PSG',
        image: '/assets/images/background.png',
        years: [2015, 2019],
      },

      {
        id: '4',
        name: 'Bayern München',
        image: '/assets/images/background.png',
        years: [2019, 2023],
      },

      {
        id: '5',
        name: 'Juventus',
        image: '/assets/images/background.png',
        years: [2023, 2025],
      },

      {
        id: '6',
        name: 'São Paulo',
        image: '/assets/images/background.png',
        years: [2025, 2027],
      },
    ],

    // Histórico acadêmico do usuário
    studies: [
      {
        id: '1',
        name: 'Ensino Fundamental',
        years: [2000, 2008],
        image: '/assets/images/background.png',
      },

      {
        id: '2',
        name: 'Ensino Médio',
        years: [2008, 2012],
        image: '/assets/images/background.png',
      },

      {
        id: '3',
        name: 'Curso técnico de Ti',
        years: [2013, 2015],
        image: '/assets/images/background.png',
      },

      {
        id: '4',
        name: 'Ciência da Computação',
        years: [2015, 2020],
        image: '/assets/images/background.png',
      },

      {
        id: '5',
        name: 'Curso de React.js',
        years: [2021, 2021],
        image: '/assets/images/background.png',
      },
    ],

    // Títulos já conquistados pelo usuário
    championships: [
      {
        id: '1',
        name: 'Sul Americana',
        image: '/assets/images/pngs/trophy.png',
        year: 2012,
      },

      {
        id: '2',
        name: 'La Liga',
        image: '/assets/images/pngs/trophy.png',
        year: 2017,
      },

      {
        id: '3',
        name: 'Uefa Champions League',
        image: '/assets/images/pngs/trophy.png',
        year: 2018,
      },

      {
        id: '4',
        name: 'Copa do mundo',
        image: '/assets/images/pngs/trophy.png',
        year: 2018,
      },

      {
        id: '5',
        name: 'Taça guanabara',
        image: '/assets/images/pngs/trophy.png',
        year: 2019,
      },

      {
        id: '6',
        name: 'Campeonato Gáucho',
        image: '/assets/images/pngs/trophy.png',
        year: 2022,
      },

    ],

  },

  //  lista de benefícios da conta do usuário.
  //  Ao clicar é direcionado a página do benefício clicado.
  //  Caso tenha isLocked como true, a estilização do componente
  //  vai ser alterada e ao clicar ele vai direcionar automaticamente para a página de planos
  benefits: [
    {
      id: '1',
      src: '/assets/images/benefits/podcast.png',
      title: 'podcast',
      path: '/podcast',
    },

    {
      id: '2',
      src: '/assets/images/benefits/tv.png',
      title: 'Sport TV',
      path: '/sporttv',
    },

    {
      id: '3',
      src: '/assets/images/benefits/investments.png',
      title: 'Sports Invest',
      islocked: true,
      path: '/sportsinvest',
    },

    {
      id: '4',
      src: '/assets/images/benefits/benefits.png',
      title: 'Benefícios',
      islocked: true,
      path: '/benefits',
    },

    {
      id: '5',
      src: '/assets/images/benefits/exchange.png',
      title: 'Intercâmbio',
      islocked: true,
      path: '/interchange',
    },

    {
      id: '6',
      src: '/assets/images/benefits/visibility.png',
      title: 'Visibilidade',
      path: '/visibility',
    },

    {
      id: '7',
      src: '/assets/images/benefits/events.png',
      title: 'Eventos',
      islocked: true,
      path: '/events',
    },

    {
      id: '8',
      src: '/assets/images/benefits/exchange.png',
      title: 'Inglês',
      islocked: true,
      path: '/english',
    },
  ],

  friends: [
    {
      id: '1',
      name: 'Eduardo Silva',
      path: '/user/SPFC',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '2',
      name: 'Victor Souza',
      path: '/user/victor',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '3',
      name: 'Matheus Oliveira',
      path: 'matheus',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '4',
      name: 'Leonardo Ferreira',
      path: 'leonardo',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '5',
      name: 'Pedro Santos',
      path: 'pedro',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '6',
      name: 'Gabriel Costa',
      path: 'gabriel',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '7',
      name: 'Arthur Mendes',
      path: 'arthur',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '8',
      name: 'Igor Pereira',
      path: 'igor',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '9',
      name: 'Lucas Almeida',
      path: 'lucas',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '10',
      name: 'Bernardo Dias',
      path: 'bernardo',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '11',
      name: 'Augusto Vargas',
      path: 'augusto',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '12',
      name: 'César Araújo',
      path: 'cesar',
      profileImageSrc: '/assets/images/background.png',
    },
  ],
};
