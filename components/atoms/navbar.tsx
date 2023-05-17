import React from 'react';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { menuLink } from '@/utils/services';
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsFillMoonStarsFill,
  BsFillSunFill,
} from 'react-icons/bs';

const Navbar = (): JSX.Element => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false);
  const handleState = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className={`z-[4] w-full bg-[#0e141b] h-auto sticky top-0 px-4 lg:px-14 xl:px-20 2xl:px-40 py-2  md:mx-auto transition-all duration-400`}>
      <nav className='flex items-center justify-between'>
        {/* Logo */}
        <Link href='/'>
          <div className='flex items-center gap-1 z-[10]'>
            <span className='font-astroz text-5xl p-2 transition-all duration-500 rounded-full bg-rose-900 hover:text-rose-900 hover:bg-white'>
              RE
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className='hidden md:flex gap-2 items-center'>
          {menuLink.map((link, index) => (
            <Link key={index} href={link?.url}>
              <li className='inline-flex justify-start items-center gap-2  hover:text-gray-300  duration-700 cursor-pointer w-full text-center hover:border-none'>
                <span className='font-extrabold text-rose-800'>
                  0{index + 1}.
                </span>
                {link?.name}
              </li>
            </Link>
          ))}
        </ul>

        {/* Menu Button */}
        {showMenu ? (
          <button
            type='button'
            title=''
            onClick={handleState}
            className='z-[2] border px-3 py-3 hover:rounded-md hover:border-transparent hover:bg-gray-600 border-gray-600 md:hidden inline-flex flex-col justify-center items-center'
          >
            <FaTimes className='text-2xl' />
            <span className='hidden md:block'>Close</span>
          </button>
        ) : (
          <ul className=' md:hidden inline-flex flex-col justify-center items-center'>
            <li
              title='Menu bar'
              onClick={handleState}
              className=' md:hidden inline-flex flex-col justify-center items-center'
            >
              <div className='space-y-2 group'>
                <span className='block w-5 h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
                <span className='block w-8 h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
                <span className='block w-8 h-0.5 bg-gray-200 group-hover:bg-opacity-[0.4]'></span>
              </div>
              <span className='hidden md:block'>Menu</span>
            </li>
          </ul>
        )}

        {/* Mobile Menu */}
        {showMenu && (
          <div className='transition-all duration-400 md:hidden bg-[#18202b] bg-opacity-[0.7] flex justify-end items-center absolute top-0 left-0 w-full h-screen overflow-hidden'>
            <div className='flex flex-col pt-20 pl-5 items-start gap-8 bg-[#0e141b] w-[280px] h-screen'>
              <ul className='flex flex-col uppercase divide-gray-800 items-start gap-8 bg-[#0e141b] w-full h-full'>
                {menuLink.map((link, index) => (
                  <Link key={index} href={link?.url}>
                    <li
                      onClick={handleState}
                      className='inline-flex justify-start items-center gap-2  hover:text-gray-500  duration-700 cursor-pointer w-full text-center hover:border-none'
                    >
                      <span className='font-extrabold text-rose-500'>
                        0{index + 1}.
                      </span>
                      {link?.name}
                    </li>
                  </Link>
                ))}
              </ul>

              <div className='w-full flex justify-center text-4xl gap-2 pb-10'>
                <a
                  rel='noopener'
                  className='hover:scale-125 hover:text-rose-500 origin-center hover:origin-top transition-all duration-500'
                  target={`_blank`}
                  href='https://github.com/rockyessel'
                >
                  <BsGithub />{' '}
                </a>{' '}
                <a
                  rel='noopener'
                  className='hover:scale-125 hover:text-rose-500 origin-center hover:origin-top transition-all duration-500'
                  target={`_blank`}
                  href='https://twitter.com/rockyessel'
                >
                  <BsTwitter />{' '}
                </a>{' '}
                <a
                  rel='noopener'
                  className='hover:scale-125 hover:text-rose-500 origin-center hover:origin-top transition-all duration-500'
                  target={`_blank`}
                  href='https://www.linkedin.com/in/rockyessel/'
                >
                  <BsLinkedin />{' '}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
