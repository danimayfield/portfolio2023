export const projects = [
  {
    name: '1AND1',
    skills: ['react native', 'typescript', 'redux', 'redux toolkit'],
    description:
      "I was apart of the end to end creation and deployment of the 1AND1 personal wellness app. As a V1 I implemented the redux state management to manage the data which is stored on the phone's local storage. As well as I developed all the features within the application in typescript react native using NativeBase's UI Framework.",
    favourite:
      'My favourite part about working on this project was implementing a performance enhancing event queue that saves user events to a queue and sends them periodically to machine learning to track how real users use the app to influence new features.',
  },
  {
    name: 'Animal Health Link',
    skills: [
      'react',
      'typescript',
      'graphQL',
      'apollo',
      'directus',
      'docker',
      'dialpad integration',
    ],
    description:
      'I was apart of the end to end development of this custom triage web application. I created features using react typescript & Chakra UI and working with a GraphQL/Apollo backend which used directus to help manage. The main feature of this app is a form flow that call center users must be able to navigate to any point in the flow easily. This app also features two-way communication via SMS enabling users to recieve texts & images from customers.',
    favourite:
      'My favourite part about working on this project was implementing different customizations to make the use and flow of the application further tailored to the specific RVT agents that will be using it. Customizations include implementing a dark mode for users on the night shift as well as generating pdfs of submitted incidents that are easily shareable.',
  },
  {
    name: 'Fast Forward',
    skills: ['react', 'typescript', 'graphQL', 'apollo', 'mapbox'],
    description:
      "I was apart of the creation and development of Fast Forward's custom map application. This application uses Mapbox to display and manage Fast Forward's assets for the regions they service. I developed and customized the points on the map, adding ability to filter them based on different properties and developing search functionalty amoung other main features. This was all done within typescript react using Chakra UI and a graphQL & apollo backend.",
    favourite:
      'My favourite part about working on this project was getting to fully integrate the Mapbox API within a web application. As well as creating an admin area that allows for certain users to add new assets with different image types in bulk, set new map boundaries & publish map tiles that will display within the main application.',
  },
];
