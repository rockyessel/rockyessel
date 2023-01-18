import React from 'react';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import {
  SiFeedly,
  SiMicrosoftoutlook,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiWebmoney,
} from 'react-icons/si';
import { FaRust } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';
import { IoLogoNodejs } from 'react-icons/io';
import { useRouter } from 'next/router';

const ProjectCard = () => {
  const router: string = useRouter().asPath.split('/').slice(-1)[0];

  const if_true = router === 'projects';

  return (
    <div className='bg-orange-400 p-4 rounded-md shadow-md'>
      <div>
        <p
          className={`font-bold ${
            if_true ? 'w-full inline-flex justify-between items-center' : null
          }`}
        >
          <span>SARPS Logistics Co.</span>
          {if_true && (
            <span className='bg-orange-300 p-1 rounded-md'>
              Professional Work
            </span>
          )}
        </p>

        <div>
          <ul className='rounded-md py-2 flex flex-wrap gap-2 items-center'>
            <li
              title='Python'
              className='inline-flex items-center gap-1 border border-black p-1 font-medium bg-orange-400'
            >
              <SiPython /> Python
            </li>
            <li
              title='Node.js'
              className='inline-flex items-center gap-1 border border-black p-1 font-medium bg-orange-400'
            >
              <IoLogoNodejs /> Node.js
            </li>
            <li
              title='Rust'
              className='inline-flex items-center gap-1 border border-black p-1 font-medium bg-orange-400'
            >
              <FaRust /> Rust
            </li>
            <li
              title='HTML'
              className='inline-flex items-center gap-1 border border-black p-1 font-medium bg-orange-400'
            >
              <SiHtml5 /> HTML
            </li>
          </ul>
        </div>
        
        <p>
          When it comes to Tailwind CSS, it&apos;s hard to ignore the popularity
          of this famous front-end framework. Over the years, the growth of this
          ecosystem has seen steady increases, and it was announced that, in
          July, the download count o...
        </p>
      </div>

      <div className='w-full flex justify-between items-center text-[2.6rem]'>
        <div className='flex items-center gap-5'>
          <span className='tooltip' data-tip='Github'>
            <BsGithub className='bg-orange-300 p-1 rounded-md' />
          </span>
          <span className='tooltip' data-tip='Live Website'>
            <SiWebmoney className='bg-orange-300 p-1 rounded-md' />
          </span>
        </div>

        <div className='group flex items-center gap-5'>
          <span className='tooltip' data-tip='Open For More Details'>
            <AiFillFolderOpen className='bg-orange-300 p-1 rounded-md' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
