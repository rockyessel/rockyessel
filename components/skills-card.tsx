import React from 'react';
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
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaRust } from 'react-icons/fa';
import { AiTwotoneApi } from 'react-icons/ai';
import { IoLogoNodejs } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

const SkillsCard = () => {
  const router = useRouter().asPath.split('/').slice(-1)[0];

  const if_not_equal: boolean = '/' !== router;

  console.log('if_not_equal', if_not_equal);

  const data_list = [
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
  ];

  return (
    <ul className='rounded-md py-2 flex flex-wrap gap-2 items-center'>
      {data_list?.map((list, index) => (
        <li
          key={index}
          className='inline-flex items-center gap-1 border border-black p-1 font-medium bg-orange-400'
        >
          {list?.icon} {list?.name}
        </li>
      ))}
    </ul>
  );
};

export default SkillsCard;
