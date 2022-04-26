// eslint-disable-next-line import/no-unresolved
import ImageProfile from '@/assets/img/everton-vanoni.jpg';
import cypress from '@/assets/img/services/cypress.png';
import python from '@/assets/img/services/python.png';
import vuejs from '@/assets/img/services/vuejs.png';
import typescript from '@/assets/img/services/typescript.png';
import react from '@/assets/img/services/react.png';
import sass from '@/assets/img/services/sass.png';

export const HOME_DATA = {
  // FIRST CARD DATA
  FULL_NAME: 'Everton Vanoni Fernandes',
  // to choose your profile image, just put the location it is in the import of "ImageProfile"
  IMAGE_PROFILE: ImageProfile,
  FIRST_DESCRIPTION: [
    'Hello, welcome to my portfolio! I\'ll be introducing myself and talking a little about myself, you can find out more through the "About" menu option.',
    'I\'m Front End Developer, QA Engineer and technology lover ❤️, I also know a little bit about the back end but my best is the front. I like challenges related to programming and I am always looking to evolve myself. My programming knowledge started as a hobbin and curiosity, in order to have fun and pass the time I started creating personal projects that I loved to create, tried hard and loved when I got the expected result.',
    'I like what I do with strong coffee, if you need some help and I can help you, feel free to call me, I like to help other people, in addition to being developing, I have big dreams and I\'m working in my technical and behavioral development.\n',
  ],
};

export const SERVICES = {
  // If you want it to have a second card, answer true, if not, answer false
  SECOND_CARD_VISIBLE: true,
  SECOND_TITLE: 'Services for you',
  SECOND_CARD_DATA: [
    {
      IMG: vuejs,
      TITLE: 'Vue.js',
      DESCRIPTION: 'Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.',
    },
    {
      IMG: python,
      TITLE: 'Python',
      DESCRIPTION: 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics developed by Guido van Rossum. It was originally released in 1991. Designed to be easy as well as fun, the name "Python" is a nod to the British comedy group Monty Python.',
    },
    {
      IMG: typescript,
      TITLE: 'TypeScript',
      DESCRIPTION: 'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing to the language. ... TypeScript may be used to develop JavaScript applications for both client-side and server-side execution (as with Node. js or Deno).',
    },
    {
      IMG: react,
      TITLE: 'React',
      DESCRIPTION: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React has a few different kinds of components, but we\'ll start with React.Component subclasses: class ShoppingList extends React.',
    },
    {
      IMG: cypress,
      TITLE: 'Cypress',
      DESCRIPTION: 'Cypress is a free and open source, MIT-licensed, testing tool written in JavaScript. ... Cypress makes quality E2E, integration and unit tests easy to write and debug. With it, you can drive the browser like a human would.',
    },
    {
      IMG: sass,
      TITLE: 'Sass',
      DESCRIPTION: 'Sass (which stands for \'Syntactically awesome style sheets) is an extension of CSS that enables you to use things like variables, nested rules, inline imports and more. It also helps to keep things organised and allows you to create style sheets faster.',
    },
  ],
};
