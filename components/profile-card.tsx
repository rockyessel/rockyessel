import React from 'react';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { SiMicrosoftoutlook } from 'react-icons/si';

const ProfileCard = () => {
  return (
    <div className='w-full bg-orange-400 px-10 py-5 border border-black rounded-md'>
      <span className='text-sm uppercase'>Written by</span>
      <p className='font-extrabold text-3xl capitalize'>Rocky Essel</p>
      <div className='flex flex-col gap-2'>
        <p>
          A frontend engineer with over 7 years of experience building
          interactive web applications with modern tech like Laravel, Tailwind,
          React and Next.js.
        </p>

        <ul className='text-4xl flex gap-2 mb-1'>
          <li>
            <BsGithub />
          </li>
          <li>
            <BsTwitter />
          </li>
          <li>
            <BsLinkedin />
          </li>
          <li>
            <SiMicrosoftoutlook />
          </li>
        </ul>

        <p>
          Like what i do?{' '}
          <span className='font-bold p-2 rounded-md hover:border hover:border-black hover:bg-orange-300 cursor-pointer'>
            Hire me
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
