import { BsGithub } from 'react-icons/bs';
import {
  SiPython,
  SiRedux,
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
  SiPostman,
  SiGithub,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaRust } from 'react-icons/fa';
import { AiTwotoneApi } from 'react-icons/ai';
import { IoLogoNodejs } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import {
  CodeProps,
  DefaultMetaDataProps,
  SanityImageProps,
  SanityTableProps,
} from '@/interface';
import Image from 'next/image';

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


  export const CodeBlocks = {
    types: {
      code: ({ value }: { value: CodeProps }) => (
        <pre>
          <code>{value?.code}</code>
        </pre>
      ),
      image: ({ value }: { value: SanityImageProps }): boolean | any => {
        if (value?.image?.url !== null) {
          return (
            <Image
              className='m-0 mt-5 p-0'
              src={value?.image?.url}
              alt={value?.alt}
              width={value?.image?.metadata?.dimensions?.width}
              height={value?.image?.metadata?.dimensions?.height}
            />
          );
        } else {
          return false;
        }
      },
      table: ({ value }: { value: SanityTableProps }) => (
        <table>
          {value?.rows?.map((row, index) => (
            <tr key={index}>
              <th>{row?.cells[0]}</th>
              {row?.cells?.slice(1, row?.cells?.length)?.map((cell, index) => (
                <td key={index}>{cell}</td>
              ))}
            </tr>
          ))}
        </table>
      ),
    },

    marks: {
      link: ({ children, value }: any) => {
        const rel = !value.href.startsWith('/')
          ? 'noopener'
          : 'noreferrer noopener';
        return (
          <a
            className='text-blue-500 font-bold italic text-lg'
            href={value?.href}
            rel={rel}
          >
            {children}
          </a>
        );
      },

      strong: ({ children, value }: any) => (
        <strong className='text-rose-500 text-lg'>{children}</strong>
      ),
    },

    block: {
      h1: ({ children, value }: any) => (
        <h1 className='text-rose-500 text-[2rem] mb-0'>{children}</h1>
      ),
      h2: ({ children, value }: any) => (
        <h1 className='text-rose-500 text-[1.8rem] mb-0'>{children}</h1>
      ),
      h3: ({ children, value }: any) => (
        <h1 className='text-rose-500 text-[1.6rem] mb-0'>{children}</h1>
      ),
      h4: ({ children, value }: any) => (
        <h1 className='text-rose-500 text-[1.4rem] mb-0'>{children}</h1>
      ),
      h5: ({ children, value }: any) => (
        <h1 className='text-rose-500 text-[1.2rem] mb-0'>{children}</h1>
      ),
      h6: ({ children, value }: any) => (
        <h1 className='text-rose-500 text-[1.rem] mb-0'>{children}</h1>
      ),
    },
  };