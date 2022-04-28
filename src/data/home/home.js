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
  FULL_NAME: 'Front-end Developer & Quality Assurance Engineer',
  // to choose your profile image, just put the location it is in the import of "ImageProfile"
  IMAGE_PROFILE: ImageProfile,
  FIRST_DESCRIPTION: [
    'Hello, welcome to my website.',
    'My name is Everton Vanoni Fernandes, I\'m 21 years old and I\'m glad you\'re here! ❤',
    'I love technology and am curious about the area, you can talk to me about what might be cool. I also like a very strong coffee ☕ and I need music to be able to work with codes.',
    'My favorite language is Javascript along with the Vue.js framework, I love creating applications with it, even this website was created with Vue. 👨🏻‍💻',
    'I have an interesting knowledge in the QA area too, I\'ve learned a lot from working using Cypress.',
    'I\'m a little obsessed with beautiful code, with a well-made structure, I\'m always looking to improve the code and structure of the project where I work. ⭐',
    'I\'m always willing to help other team members, I like to help because it solidifies my knowledge and helps him too! I am pleased to see the partner grow.',
    'I\'m very curious and I\'m always looking to improve my knowledge with studies and more studies, at the moment I\'m addicted to studying and practicing design patterns.',
    'This was a summary of the summary about me, if you want to know me better you can contact me and it will be a pleasure to meet you! Thanks. 😉',
  ],
};

export const SERVICES = {
  // If you want it to have a second card, answer true, if not, answer false
  SECOND_CARD_VISIBLE: true,
  SECOND_TITLE: 'Some services for you',
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
