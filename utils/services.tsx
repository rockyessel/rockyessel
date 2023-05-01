import { BsGithub } from 'react-icons/bs';
import { SiPython, SiRedux, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiExpress, SiAdobephotoshop, SiFigma, SiMongodb, SiCodefactor, SiCodecov, SiPostman, SiGithub } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaRust } from 'react-icons/fa';
import { AiTwotoneApi } from 'react-icons/ai';
import { IoLogoNodejs } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { DefaultMetaDataProps } from '@/interface';

export const data_list = [
  {
    name: 'Python',
    icon: <SiPython />,
  },
  {
    name: 'Node.js',
    icon: <IoLogoNodejs />,
  },
  {
    name: 'Rust',
    icon: <FaRust />,
  },
  {
    name: 'HTML',
    icon: <SiHtml5 />,
  },
  {
    name: 'CSS',
    icon: <SiCss3 />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'ES6 JavaScript',
    icon: <SiJavascript />,
  },
  {
    name: 'Express.js',
    icon: <SiExpress />,
  },
  {
    name: 'React.js',
    icon: <RiReactjsLine />,
  },
  {
    name: 'React Native',
    icon: <RiReactjsLine />,
  },
  {
    name: 'Next.js',
    icon: <TbBrandNextjs />,
  },
  {
    name: 'Git',
    icon: <BsGithub />,
  },
  {
    name: 'API',
    icon: <AiTwotoneApi />,
  },
  {
    name: 'TailwindCSS',
    icon: <SiTailwindcss />,
  },
  {
    name: 'Photoshop',
    icon: <SiAdobephotoshop />,
  },
  {
    name: 'Figma',
    icon: <SiFigma />,
  },
  {
    name: 'CMS',
    icon: <SiCodefactor />,
  },
  {
    name: 'Sanity',
    icon: <SiCodecov />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    name: 'Redux',
    icon: <SiRedux />,
  },
  {
    name: 'Postman',
    icon: <SiPostman />,
  },
  {
    name: 'Git',
    icon: <SiGithub />,
  },
];

export const formDataInitialState = {
  name: '',
  email: '',
  message: '',
};

export const defaultMetaData: DefaultMetaDataProps = {
  description: `I am a front-end developer with experience building web applications. I have a passion for creating a better web, with a focus on speed, ease of use, aesthetic design, accessibility, and user satisfaction. My goal is to work in a company where I can deliver business value while also growing as a web developer.`,
  title: `Portfolio Homepage`,
  image: `https://esselr.vercel.app/images/homepage.PNG`,
  alt: 'Homepage',
  keywords: 'portfolio website,blog,website,projects',
  type: `website`,
  publishedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  author_name: 'Rocky Essel',
  MIME: 'png',
};

export const menuLink = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Projects',
    url: '/projects',
  },
  {
    name: 'Thoughts',
    url: '/thoughts',
  },
  {
    name: 'About',
    url: '/about',
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

export const adding_skills = [
  'ES6 JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'MongoDB',
  'CMS',
  'CSS',
  'HTML',
  'TailwindCSS',
  'Redux',
  'Postman',
  'Git',
  // 'React Native',
];
