import { BsGithub } from 'react-icons/bs';
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiAdobephotoshop,
  SiFigma,
  SiMongodb,
  SiCodefactor,
  SiCodecov,
} from 'react-icons/si';
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
];

export const formDataInitialState = {
  name: '',
  email: '',
  message: '',
};

export const defaultMetaData: DefaultMetaDataProps = {
  description: `I am Rocky Essel, a front-end developer who is passionate about web technologies.`,
  title: `Homepage`,
  image: `https://esselr.vercel.app/homepage.png`,
  alt: 'Homepage',
  keywords: '',
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
