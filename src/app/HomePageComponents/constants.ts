import routes from '@app/routes';
import Feature1and1 from '@shared/assets/1and1/mobileCollage1.png';
import FeatureAHL from '@shared/assets/ahl/tablet1.png';
import FeatureFastForward from '@shared/assets/fastForward/desktop1.png';
import FeaturedBooker from '@shared/assets/booker/laptop.png';
import FeatureWhereabouts from '@shared/assets/whereabouts/tablet1.png';
import colors from '@theme/foundations/colors';

export type Project = {
  name: string;
  id: Projects;
  skills: string[];
  imageSrc: string;
  alt: string;
  route: string;
  color: string;
};

export type ProjectData = {
  name: string;
  id: Projects;
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
  Booker = 'BOOKER',
  Whereabouts = 'WHEREABOUTS',
}

export const projectTeasersData: Record<Projects, Project> = {
  [Projects.G1AND1]: {
    name: '1AND1',
    id: Projects.G1AND1,
    skills: ['react native', 'typescript', 'redux', 'redux toolkit'],
    imageSrc: Feature1and1.src,
    alt: 'Mobile mockup collage of 1and1 app',
    route: routes.goals1And1,
    color: colors.mint[400],
  },
  [Projects.AHL]: {
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
    color: colors.sky[400],
  },
  [Projects.FF]: {
    name: 'Fast Forward',
    id: Projects.FF,
    skills: ['react', 'typescript', 'nextJS', 'graphQL', 'apollo', 'mapbox'],
    imageSrc: FeatureFastForward.src,
    alt: 'Desktop mockup of Fast Forward Application',
    route: routes.fastForward,
    color: colors.pink[300],
  },
  [Projects.Booker]: {
    name: 'Booker',
    id: Projects.Booker,
    skills: [
      'react',
      'typescript',
      'stencil',
      'node',
      'express',
      'apollo',
      'graphQL',
      'mongoDB',
    ],
    imageSrc: FeaturedBooker.src,
    alt: 'Laptop mockup of the booker launcher app',
    route: routes.booker,
    color: colors.purple[100],
  },
  [Projects.Whereabouts]: {
    name: 'Whereabouts',
    id: Projects.Whereabouts,
    skills: [
      'react',
      'typescript',
      'openAI',
      'graphQL',
      'apollo',
      'mapbox',
      'mongoDB',
    ],
    imageSrc: FeatureWhereabouts.src,
    alt: 'Tablet mockup of Whereabouts application',
    route: routes.whereabouts,
    color: colors.orange[100],
  },
};

export const projectTeasers: Project[] = Object.values(projectTeasersData);

export const projectData: Record<Projects, ProjectData> = {
  [Projects.G1AND1]: {
    name: '1AND1',
    id: Projects.G1AND1,
    subtitle: 'a one-of-a-kind mental health and wellness app',
    skills: ['react native', 'typescript', 'redux', 'redux toolkit'],
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
    id: Projects.AHL,
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
      'I was apart of the end to end development of this custom triage web application. This app was created to reduce the workload on vetrinary technicians who were originally flipping through multiple different applications while taking emergency phone calls from incoming patients. This application is a one stop shop for all their needs to save time, reduce errors and create a smoother flow for overworked vetrinary staff. I created features using react typescript & Chakra UI and working with a GraphQL/Apollo backend which used directus to help manage.',
    challenges:
      'One of the first challenges faced was ensuring users could send and receive messages via SMS to callers so we implemented functionality enabling users to recieve texts & images from customers as well as handle phone calls with the integration of dialpad. Any images sent during an incident could be added to the final pdf report as well. Another challenge faced was that the main users (being vetrinary technicians) were often taking emergency calls and had to be able to act quickly. I helped create a form flow where call center users can navigate to any point in the flow easily in order to triage emergency situations as efficiently as possible.',
    favourite:
      'My favourite part about working on this project was implementing different customizations to make the use and flow of the application further tailored to the specific vetrinary technicians that will be using it. Customizations include implementing a dark mode for users on the night shift as well as generating pdfs of submitted incidents that are easily shareable to selected emails.',
  },
  [Projects.FF]: {
    name: 'Fast Forward',
    id: Projects.FF,
    subtitle:
      'software and workflow solution for governing bodies to inspect & maintain electrical poles ',
    skills: ['react', 'typescript', 'nextJS', 'graphQL', 'apollo', 'mapbox'],
    description:
      "I was apart of the creation, deployment and continuous development of Fast Forward's product. This application uses Mapbox to display and manage Fast Forward's assets for the regions they service/maintain. This app has multiple layers to it and functionality that allows users to view and edit assets as well as cycle through 360-view images, thermal images and high resolution images. This was all done within typescript react using Chakra UI and a graphQL & apollo backend.",
    challenges:
      'A large challenge I faced was learning to integrate Mapbox into this application. Mapbox was new to me at the time and learning how to read and write with their syntax was integral in being able to create and stack multiple layers on the map to show different assets and images. Creating and being able to manipulate these layers were critical in customizing and adding the ability to filter different features on the map.',
    favourite:
      'My favourite part about working on this project was getting to fully integrate the Mapbox API within a web application and creating all of the different layers to support all the different types of assets. As well as creating an admin area that allows for certain users to add new assets with different image types in bulk, set new map boundaries & publish map tiles that will display within the main application. This was my first time using Mapbox but really enjoyed the learning curve and feel proud of the end product.',
  },
  [Projects.Booker]: {
    name: 'Booker',
    id: Projects.Booker,
    subtitle:
      'the game-changing booking engine that turns "just looking" into actual bookings for Destination Marketing Organizations and their members',
    skills: [
      'react',
      'typescript',
      'stencil',
      'custom web components',
      'node',
      'express',
      'apollo',
      'graphQL',
      'mongoDB',
      'mongoose',
      'sendGrid API',
      'stripe API',
      'NPM package creation',
    ],
    description:
      "I was the principal developer apart of the full redesign and front-end refactor of the primary Booker codebase, from a bespoke system to a fully reusable Saas product. Booker is a fully embeddable booking modal that can be embedded on any site. I also lead the creation and maintenance of a comprehensive custom design system built for Booker and it's related products. While managing multiple front end codebases for Booker and it's related products, I also became the primary developer managing the backend API that powers Booker!",
    challenges:
      'The biggest challenge I had was creating a Saas product that could be so flexible it could be customized to make what acts like a bespoke booking engine for each individual business. Each business that uses Booker has vastly different products with vastly different needs and functionality requirements that all must be under a single codebase that can manage them all. I worked hard to organize the front and back end codebases meticulously to allow for each business to customize their Booker experience to what their business needs through the Booker admin app. The Booker admin app is where businesss owners can create a Booker & generate the embed script they need to embed a Booker on their site. To do this, I took a lot of time to learn about each business and their needs and created avenues for different functionality to be reused for other businesses.',
    favourite:
      "My favourite part about creating and maintaining Booker and it's related products was creating something meaningful and useful that facilitated real revenue generation for Destination Marketing Organizations and their member businesses. We worked with real tourism operators throughout Canada and Booker played an integral role in the success of these small businesses as their preferred booking engine. Another big favourite part of mine was creating a custom calendar component for Booker from scratch, to be used in multiple different ways with multiple different functionalities.",
    link: 'https://www.tourism.tech/booker-dmo',
  },
  [Projects.Whereabouts]: {
    name: 'Whereabouts',
    id: Projects.Whereabouts,
    subtitle: 'member management and marketing tracking for the modern DMO.',
    skills: [
      'react',
      'typescript',
      'vite',
      'auth0',
      'custom web components',
      'shadow DOM',
      'graphQL',
      'apollo',
      'mongoDB',
      'mongoose',
      'mapbox API',
      'openAI API',
    ],
    description:
      'I was a principal developer in the creation and development of Whereabouts.  Whereabouts is a member management system for destination marketing organizations (DMOs) and their unique needs. Each DMO tends to manager their memebers in different ways, so Whereabouts was created to be a flexible system that can be customized to each DMOs needs. Through Vite I created fully customizeable and exportable widgets that injest data from the comprehensive Whereabouts database that can be embedded on any site through the use of custom web components.',
    favourite:
      "My favourite part about working on the Whereabouts application was creating the feature that allows DMOs to create a widget in less than five minutes. This widget can be embedded on their site that will showcase members of their choice with all of their member's images and important information. These widgets are fully customizeable through part styling and are protected against style bleed as they live within a shadow root. We use Vite to separately bundle each widget and we host them on a CDN to ensure fast loading times. This was a really fun challenge to work on and I am proud of the end product.",
    challenges:
      'The biggest challenge working on this application was right at the very begining when we were determining how to structure the database schema. We had to create a schema that was flexible enough to handle the different needs of each DMO but also be able to scale to the needs of the future. In particular, our Smart List feature was a challenge to conceptualize the schema, as it required storing enough data that dynamically determines the members that match the criteria of the list while not overinflating the schema or database. In the end, the time we took to plan out the database structure allowed our development time to be much more efficient and streamlined. The schema we settled on was rarely adjusted and allowed for the application to be flexible while allowing room for growth.',
    link: 'https://next.whereabouts.tech/',
  },
};
