// armazena todos os dados do atleta
export const universityData = {

  type: {
    category: 'professional',
    team: 'male',
  },
  // dados gerais do perfil
  profile:
  {
    // dados usados no banner do atleta. Badge = icone referente ao atual plano dele
    banner: {
      name: 'São Paulo FC',
      profileImageSrc: '/assets/images/profile/spfc.jpg',
      badge: '/assets/images/pngs/medal.png',
      backgroundImageSrc: '/assets/images/profile/cdb.jpeg',
    },

    // Informações que são exibidas abaixo do banner
    info:
      [
        { title: 'País', info: 'Brasil' },
        { title: 'Estado', info: 'São Paulo' },
        { title: 'Fundação', info: '1930' },
        { title: 'Local de Treinamento', info: 'Barra funda - SP' },
        { title: 'Nivel de competição', info: 'Serie A' },
        { title: 'Representante', info: 'Júlio Casares' },
        { title: 'Técnico', info: 'Luis Zubeldía' },
        { title: 'Estádio', info: 'MorumBis' },
      ],

    // Fotos ou vídeos no perfil do usuário
    photos: [
      {
        id: 1,
        src: '/assets/images/profile/photo-1.png',
        type: 'photo',
        isfavorite: true,
      },

      {
        id: 2,
        src: '/assets/images/profile/photo-2.png',
        type: 'photo',
        isfavorite: false,
      },

      {
        id: 3,
        src: '/assets/images/profile/photo-3.png',
        type: 'photo',
        isfavorite: true,
      },

      {
        id: 4,
        src: '/assets/images/profile/photo-4.png',
        type: 'photo',
        isfavorite: true,

      },

      {
        id: 5,
        src: '/assets/images/profile/photo-1.png',
        type: 'photo',
        isfavorite: false,
      },

      {
        id: 6,
        src: '/assets/images/profile/photo-2.png',
        type: 'photo',
        isfavorite: false,
      },

      {
        id: 7,
        src: '/assets/images/profile/photo-3.png',
        type: 'photo',
        isfavorite: true,
      },
    ],

    // Histórico de clubes do usuário
    leagues: [
      {
        id: '1',
        name: 'Brasileirão Serie A',
        image: '/assets/images/background.png',
        years: [2024],
      },

      {
        id: '2',
        name: 'Conmebol Libertadores',
        image: '/assets/images/background.png',
        years: [2024],
      },

      {
        id: '3',
        name: 'Copa do brasil',
        image: '/assets/images/background.png',
        years: [2024],
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
        name: 'Conmebol Libertadores',
        image: '/assets/images/pngs/trophy.png',
        year: 2005,
      },

      {
        id: '3',
        name: 'Mundial de Interclubes',
        image: '/assets/images/pngs/trophy.png',
        year: 2005,
      },

      {
        id: '4',
        name: 'Copa do Brasil',
        image: '/assets/images/pngs/trophy.png',
        year: 2023,
      },

      {
        id: '5',
        name: 'Brasileirão',
        image: '/assets/images/pngs/trophy.png',
        year: 2008,
      },

      {
        id: '6',
        name: 'Supercopa Rei',
        image: '/assets/images/pngs/trophy.png',
        year: 2024,
      },

      {
        id: '7',
        name: 'Campeonato Paulista',
        image: '/assets/images/pngs/trophy.png',
        year: 2021,
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
      path: '/sportsinvest',
    },

    {
      id: '4',
      src: '/assets/images/benefits/benefits.png',
      title: 'Benefícios',
      path: '/benefits',
    },

    {
      id: '5',
      src: '/assets/images/benefits/exchange.png',
      title: 'Intercâmbio',
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
      path: 'eduardo',
      profileImageSrc: '/assets/images/background.png',
    },
    {
      id: '2',
      name: 'Victor Souza',
      path: 'victor',
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
