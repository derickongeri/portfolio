import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Derick | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Derick',
  subtitle: "I'm a GIS|Earth Observations Expert",
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'derick.jpg',
  paragraphOne:
    'I am a self-motivated and enthusiastic individual intrigued and keen towards the use of earth observation and geospatial technologies, process and workflow automation, as well as software development to solve challenges of sustainable development.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: 'A big advantage of SAR satellite imagery over its optical/infrared counterparts is of course weather and solar illumination independence. But for land cover classification, SAR data are relatively insensitive to vegetation/crop differences. This can be at least partly compensated by making use of time series of SAR acquisitions over a complete growth period. In this part of the course we\'ll examine this possibility with Sentinel-1 images collected on the Goggle Earthengine. There are many alternative classifiers available, such as Bayes, random forest, support vector machine, etc. We will choose to work with a neural network, essentially because of its flexibility, but also because we will continue in the next part of the course with deep learning (i.e. neural network) methods.',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
