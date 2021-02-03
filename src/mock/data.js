import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Derick | Ongeri', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Derick Ongeri',
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
    info:
      'MISLAND-North Africa is an operational instrument relying on international standards for reporting SDG 15.3.1 and technical approaches allowing the delivery of regular information on land degradation indicators for six North African Countries at two levels. At the regional level where low and medium resolution EO are used. At the pilot site level, using high resolution imagery.',
    info2: '',
    url: 'http://172.105.246.124:8080/#/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Forest Fires Mapping Tool',
    info:
      'The Forest fires mapping tool uses medium resolution sensors (Landsat 8 OLI and Sentinel 2 MSI) to produce burnt area severity maps. It uses the difference between pre- and post-fire Normalized Burnt Ration(δNBR) that is classified to obtain burnt severity maps. This approach is implemented on Google Earth Engine (GEE) platform that allows users to auto-generate burnt area maps and statistics.',
    info2: '',
    url: 'https://derickongeri.users.earthengine.app/view/firemapper',
    repo: '', // if no repo, the button will not show up
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
      url: 'https://www.linkedin.com/in/derick-ongeri-91663a194/',
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
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
