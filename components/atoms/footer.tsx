import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full h-auto px-4 lg:px-14 xl:px-20 2xl:px-40 py-10 md:container md:mx-auto'>
      <section className='w-full flex flex-col md:flex-row items-center md:flex md:items-center justify-center md:justify-between'>
        <span className='text-sm flex flex-wrap justify-center gap-1 sm:text-center'>
          © 2023{'  '}
          <Link href='/' className='hover:underline font-pink'>
            ROCKYESSEL™.
          </Link>
          All Rights Reserved.
        </span>

        <ul className='flex flex-wrap justify-center items-center mt-3 text-sm gap-1 sm:mt-0'>
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
      </section>
    </footer>
  );
};

export default Footer;
