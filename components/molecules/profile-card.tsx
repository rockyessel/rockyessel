import React from 'react';
import { BsGithub, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { SiMicrosoftoutlook } from 'react-icons/si';

const ProfileCard = () => {
  return (
    <div className='w-full px-10 py-5 border border-black rounded-md'>
      <span className='text-sm uppercase'>Written by</span>
      <p className='font-extrabold text-3xl capitalize'>Rocky Essel</p>
      <div className='flex flex-col gap-2'>
        <p>
          I&apos;m a quietly confident, naturally curious web developer, that
          loves improving, trying out different idea designs, and coding them
          out. And my goal is to work in a company where I can deliver business
          value while also leveling up as a developer.
        </p>

        <ul className='text-4xl flex gap-2 mb-1'>
          <li>
            <a
              rel='noopener'
              title='Github'
              href='https://github.com/rockyessel'>
              <BsGithub />
            </a>
          </li>

          <li>
            <a
              rel='noopener'
              title='Twitter'
              href='https://twitter.com/rockyessel'
            >
              <BsTwitter />
            </a>
          </li>

          <li>
            <a
              rel='noopener'
              title='Linkedin'
              href='https://www.linkedin.com/in/rockyessel/'
            >
              <BsLinkedin />
            </a>
          </li>

          <li>
            <a rel='noopener' title='Mail' href='mailto:essel_r@outlook.com'>
              <SiMicrosoftoutlook />
            </a>
          </li>
        </ul>

        <p>
          Like what I do?
          <span className='font-bold p-2 rounded-md hover:border hover:border-black hover:bg-orange-300 cursor-pointer'>
            Hire me
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
