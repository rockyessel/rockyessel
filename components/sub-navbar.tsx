import React from 'react';
import Link from 'next/link';
import { SiFeedly } from 'react-icons/si';
import { TiCode } from 'react-icons/ti';
import { CgUserlane, CgVoicemail } from 'react-icons/cg';
import { GiNotebook } from 'react-icons/gi';

const SubNavbar = () => {
  return (
    <header className='px-6 sticky top-10 h-20 w-full'>
      <nav>
        <ul className='w-full flex justify-between items-center overflow-x-auto text-xl'>
          <Link href='/'>
            <li className='border-t-4 border-gray-200 px-4 py-2 hover:bg-gray-300 inline-flex items-center gap-1'>
              <SiFeedly /> Feeds
            </li>
          </Link>

          <Link href='/projects'>
            <li className='border-t-4 border-transparent px-4 py-2 hover:bg-gray-300 inline-flex items-center gap-1'>
              <TiCode /> Projects
            </li>
          </Link>

          <Link href='/about'>
            <li className='border-t-4 border-transparent px-4 py-2 hover:bg-gray-300 inline-flex items-center gap-1'>
              <CgUserlane /> About
            </li>
          </Link>

          <Link href='/notes'>
            <li className='border-t-4 border-transparent px-4 py-2 hover:bg-gray-300 inline-flex items-center gap-1'>
              <GiNotebook /> Notes
            </li>
          </Link>

          <Link href='/contact'>
            <li className='border-t-4 border-transparent px-4 py-2 hover:bg-gray-300 inline-flex items-center gap-1'>
              <CgVoicemail /> Contact
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default SubNavbar;
