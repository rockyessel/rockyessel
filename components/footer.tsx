import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-auto px-4 lg:px-14 xl:px-20 2xl:px-40 py-10 md:container md:mx-auto'>
      <footer className='w-full p-4 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <Link href='/' className='hover:underline font-pink'>
            ROCKYESSEL™
          </Link>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <Link href='/about' className='mr-4 hover:underline md:mr-6 '>
              About
            </Link>
          </li>
          <li>
            <Link
              href='/privacy-policy'
              className='mr-4 hover:underline md:mr-6'
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href='/resume' className='mr-4 hover:underline md:mr-6'>
              Resume
            </Link>
          </li>
          <li>
            <Link href='/contact' className='hover:underline'>
              Contact
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
