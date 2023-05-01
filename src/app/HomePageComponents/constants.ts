import routes from '@app/routes';
import Feature1and1 from '@shared/assets/1and1/mobileCollage1.png';
import FeatureAHL from '@shared/assets/ahl/tablet1.png';
import FeatureFastForward from '@shared/assets/fastForward/desktop1.png';

export type Project = {
  name: string;
  id: string;
  skills: string[];
  imageSrc: string;
  alt: string;
  route: string;
};

export type ProjectData = {
  name: string;
  subtitle: string;
  skills: string[];
  description: string;
  favourite: string;
  link?: string;
  challenges?: string;
};

export enum Projects {
  G1AND1 = '1AND1',
  AHL = 'AHL',
  FF = 'FF',
}

export const projects: Project[] = [
  {
    name: '1AND1',
    id: Projects.G1AND1,
    skills: ['react native', 'typescript', 'nextJS', 'redux', 'redux toolkit'],
    imageSrc: Feature1and1.src,
    alt: 'Mobile mockup collage of 1and1 app',
    route: routes.goals1And1,
  },
  {
    name: 'Animal Health Link',
    id: Projects.AHL,
    skills: [
      'react',
      'typescript',
      'nextJS',
      'graphQL',
      'apollo',
      'directus',
      'docker',
      'dialpad integration',
    ],
    imageSrc: FeatureAHL.src,
    alt: 'Tablet mockup Animal Health Link application',
    route: routes.animalHealthLink,
  },
  {
    name: 'Fast Forward',
    id: Projects.FF,
    skills: ['react', 'typescript', 'nextJS', 'graphQL', 'apollo', 'mapbox'],
    imageSrc: FeatureFastForward.src,
    alt: 'Desktop mockup of Fast Forward Application',
    route: routes.fastForward,
  },
];

export const projectData: Record<Projects, ProjectData> = {
  [Projects.G1AND1]: {
    name: '1AND1',
    subtitle: 'a one-of-a-kind mental health and wellness app',
    skills: ['react native', 'typescript', 'nextJS', 'redux', 'redux toolkit'],
    description:
      "I was a foundational developer helping this start up launch their first product, the 1AND1 personal wellness app. As a V1 application I developed all the features within the application in typescript react native using NativeBase's UI Framework. As well as I gave advice on best practices for metadata and mobile developement.",
    challenges:
      "A challenge we faced throughout this projects was not having a backend database to hold user data. In lieu of this I implemented the redux state management to manage the data which is stored on the phone's local storage. We used this to store all the user data and progress as well as caching the articles from their wordpress blog for quicker loading times.",
    favourite:
      'I had two favourite parts working on this project. The first was implementing a performance enhancing event queue that saves user events to a queue and sends them periodically to machine learning to track how real users use the app to help influence new features. My second favourite piece of this project was being able to collaborate heavily with the design team due to staffing changes within the company. I really love being able to build a product that has a smooth & easy to use UI AND UX experience and one we can all be proud of',
    link: 'https://apps.apple.com/us/app/1and1/id6446096038',
  },
  [Projects.AHL]: {
    name: 'Animal Health Link',
    subtitle: 'vetrinary triage solutions for the modern vet industry',
    skills: [
      'react',
      'typescript',
      'nextJS',
      'graphQL',
      'apollo',
      'directus',
      'docker',
      'dialpad integration',
    ],
    description:
      'I was apart of the end to end development of this custom triage web application. I created features using react typescript & Chakra UI and working with a GraphQL/Apollo backend which used directus to help manage. The main feature of this app is a form flow that call center users must be able to navigate to any point in the flow easily in order to triage emergency situations. This app also features two-way communication via SMS enabling users to recieve texts & images from customers as well as handle phone calls with the integration of dialpad. This app also has a scheduling feature to ensure clinic calendars are up to date and a reporting feature where pdf reports are generated & can be saved or emailed to selected email addresses.',
    favourite:
      'My favourite part about working on this project was implementing different customizations to make the use and flow of the application further tailored to the specific vetrinary technicians that will be using it. Customizations include implementing a dark mode for users on the night shift as well as generating pdfs of submitted incidents that are easily shareable.',
  },
  [Projects.FF]: {
    name: 'Fast Forward',
    subtitle:
      'software and workflow solution for governing bodies to inspect & maintain electrical poles ',
    skills: ['react', 'typescript', 'nextJS', 'graphQL', 'apollo', 'mapbox'],
    description:
      "I was apart of the creation and development of Fast Forward's custom map application. This application uses Mapbox to display and manage Fast Forward's assets for the regions they service. I developed and customized the points on the map, adding ability to filter them based on different properties and developing search functionalty amoung other main features. This app also had an administrative section where admins can upload images, assets and sources to the app and subsequently manage those uploads. This app has multiple layers to it and functionality that allows users to view and cycle through 360 images, thermal images and high resolution images. This was all done within typescript react using Chakra UI and a graphQL & apollo backend.",
    favourite:
      'My favourite part about working on this project was getting to fully integrate the Mapbox API within a web application and creating all of the different layers to support all the different types of assets. As well as creating an admin area that allows for certain users to add new assets with different image types in bulk, set new map boundaries & publish map tiles that will display within the main application. This was my first time using Mapbox but really enjoyed the learning curve and feel proud of the end product.',
  },
};
