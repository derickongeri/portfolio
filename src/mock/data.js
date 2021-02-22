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
  img: 'derick1.jpg',
  paragraphOne:
    'Derick Ongeri is a Earth Observation and GIS expert at LocateIT Kenya Limited, a leading GeoICT service provider based in Nairobi, Kenya. He has two years’ experience developing solutions utilizing  location data, satellite imagery, geospatial processing  tools and workflows, as well as software development for a diverse array of clients. Something he does with love and passion.',
  paragraphTwo:
    'Derick holds a bachelors degree in Geomatics Engineering and Geospatial Information Systems from the Jomo Kenyatta University of Agriculture and Technology.',
  paragraphThree:
    'In his free time, he enjoys playing football, nature trails, travelling to new places, drawing or a game of chess.',
  resume: 'https://drive.google.com/file/d/1VlysKah2eBCfgSDHCXnuSoP5dICT7ivL/view?usp=sharing', // if no resume, the button will not show up
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
    img: 'project3.png',
    title: 'DataServe',
    info: 'DataServe is an Open Source, Content Management System (CMS) for geospatial data. It is a web-based application and platform for developing geospatial information systems (GIS) and for deploying spatial data infrastructures (SDI).',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'derickongeri@gmail.com',
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
