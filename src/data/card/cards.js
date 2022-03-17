const ABOUT_CARD_DATA = [
  {
    ID: 0,
    TITLE: 'Personal Information',
    ICON: 'mdi-account',
    DESCRIPTION: [
      {
        LINE: 'I was born in 2001, I live my whole life in the south of Minas Gerais in Brazil but I always loved traveling with my family, my father is a truck driver, so I always had the opportunity to see new beautiful places in Brazil and I love it. I still want to travel the world.',
      },
      {
        LINE: 'I\'m very optimistic and competitive, I like strategy games and a league of legends, watching series and animes, I love one piece which is my favorite anime, I like to help other people, it makes me feel good.',
      },
      {
        LINE: 'I\'m always looking to do a greater common good, I think if I do my part it\'s okay, so I try to be a fair and fair person with all the people that pass through my life.',
      },
    ],
  },
  {
    ID: 1,
    ICON: 'mdi-wrench',
    TITLE: 'Professional Information',
    DESCRIPTION: [
      {
        LINE: 'My first job was as an administrative assistant after taking a course on it. I learned important business rules that help me today but it wasn\'t something I identified with, I liked to program in my spare time.',
      },
      {
        LINE: 'In my 15 years I took some courses in the technology area, hardware maintenance courses and the basics of software, and after I did a C# from basic to advanced, but I didn\'t follow my knowledge with C#, I wanted something different. So after 2 years I wanted to invest in Dropshipping and it was necessary to create a website E-commerce, and so I went back to programming in html, css and javascript. and after that I really liked the area and didn\'t stop studying new things.',
      },
      {
        LINE: 'After studying a good notion of javascript, I started to study React framework and Vue.js and ended up falling in love with Vue.js, I studied python which I really liked because it is a very powerful and easy to learn language. I realized it was getting better and started looking for vacancies, and it didn\'t take me long to find my first job as a developer, within this company I also worked as a QA, using cypress and jest.',
      },
      {
        LINE: 'I took many online courses, high level courses like harvard, and I\'m always looking to evolve my knowledge to learn more and more about programming and technology in general.',
      },
    ],
  },
];
const PORTFOLIO_CARD_DATA = [
  {
    ID: 0,
    TITLE: 'Music Player',
    ICON: 'mdi-github',
    OPPOSITE_DESCRIPTION: '06/2021',
    DESCRIPTION: [
      {
        LINE: 'Playlist with good maintenance, with easy access to add songs in the code.',
      },
    ],
    LINK: [
      {
        NAME_LINK: 'GitHub',
        HREF: 'https://github.com/vertocode/music-player',
      },
    ],
  },
  {
    ID: 1,
    TITLE: 'Netflix clone',
    ICON: 'mdi-github',
    OPPOSITE_DESCRIPTION: '08/2021',
    DESCRIPTION: [
      {
        LINE: 'Clone of the Netflix Content Selector page, being responsive and having the same animations as the original Netflix.',
      },
    ],
    LINK: [
      {
        NAME_LINK: 'GitHub',
        HREF: 'https://github.com/vertocode/netflix-clone-react.js',
      },
    ],
  },
  {
    ID: 2,
    TITLE: 'My Poke Team',
    ICON: 'mdi-github',
    OPPOSITE_DESCRIPTION: '01/2022 - 02/2022',
    DESCRIPTION: [
      {
        LINE: 'This app is consuming PokeAPI to render all existing pokemons, the intention of this app is that user create their own team and can modify and see pokemon details. A design with pokemon cards was implemented where depending on their type, a different design appears, making it more beautiful. Pokemons are cool.',
      },
    ],
    LINK: [
      {
        NAME_LINK: 'GitHub',
        HREF: 'https://github.com/vertocode/my-poke-team',
      },
      {
        NAME_LINK: 'Application',
        HREF: 'https://my-poke-team.vercel.app/',
      },
    ],
  },
  {
    ID: 3,
    TITLE: 'IoInsure',
    ICON: 'mdi-wrench',
    OPPOSITE_DESCRIPTION: '09/2021 - until the moment',
    DESCRIPTION: [
      {
        LINE: 'A gigantic insurance application for Australia initially, but soon for the whole world, i participated as a developer in the beginning being moved to QA with cypress soon after.',
      },
    ],
    LINK: [
      {
        NAME_LINK: 'WebSite',
        HREF: 'https://io.insure/',
      },
      {
        NAME_LINK: 'Application',
        HREF: 'https://dev.io.insure/auth/login',
      },
    ],
  },
  {
    ID: 4,
    TITLE: 'Fast Crud',
    ICON: 'mdi-wrench',
    OPPOSITE_DESCRIPTION: '03/2022 - until the moment',
    DESCRIPTION: [
      {
        LINE: 'A product from Simbiose Ventures where it helps developers to create other products with ease, you write what you need in JSON format, and FastCrud compiles for your need. This is a big application using Vue 3 with Composition API, TypeScript as main frontend, and Python mainly in backend',
      },
    ],
    LINK: [
      {
        NAME_LINK: 'Old Application',
        HREF: 'https://saasstage.simbioseventures.com/login/',
      },
    ],
  },
];

export { ABOUT_CARD_DATA, PORTFOLIO_CARD_DATA };
