'use client';

import { signIn } from 'next-auth/react';
import { IconBrandGithub } from '@tabler/icons-react';

const SignIinButton = () => {
  const SOCIAL_OAUTH = [{ name: 'github', icon: IconBrandGithub }];

  const handleSignin = (social: string) => {
    signIn(social, { redirect: false });
  };

  return (
    <div className='flex flex-col space-y-4'>
      {SOCIAL_OAUTH.map((social, index) => (
        <button
          onClick={() => handleSignin(social.name)}
          key={index}
          className='border border-zinc-700/40 text-sm relative group/btn flex space-x-2 items-center justify-start px-4 w-full rounded-md h-10 font-medium shadow-input'
          type='submit'
        >
          <span className='w-full inline-flex items-center justify-between '>
            <span className='inline-flex items-center gap-2.5'>
              <social.icon className='h-4 w-4 text-lime-600' />
              <span>
                Sign-in
                <span className='text-lime-300 capitalize'>{social.name}</span>
              </span>
            </span>
          </span>
        </button>
      ))}
    </div>
  );
};

export default SignIinButton;
