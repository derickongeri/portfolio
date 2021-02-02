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
    img: 'project1.jpg',
    title: 'MISLAND-North Africa',
    info: 'MISLAND-North Africa is an operational instrument relying on international standards for reporting SDG 15.3.1 and technical approaches allowing the delivery of regular information on land degradation indicators for six North African Countries at two levels. At the regional level(North Africa action zone) where low and medium resolution EO are used. At the pilot site level, where(customized indicators) can be developed, using medium resoultion data(landsat time series imagery and derived vegetation indices, combined with different satellite-derived climate data)',
    info2: '',
    url: 'http://172.105.246.124:8080/#/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Forest Fires Mapping Tool',
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
      url: 'https://codepen.io/derickongeri',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/derickongeri',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
