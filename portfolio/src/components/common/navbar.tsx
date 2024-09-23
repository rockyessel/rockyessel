'use client';

import Link from 'next/link';
import { Button } from '../ui/button';

const navItems = {
  '/': {
    name: 'home',
  },
  '/writings': {
    name: 'writings',
  },
  '/projects': {
    name: 'projects',
  },
  '/resume': {
    name: 'resume',
  },
};

const navItems2 = {
  '/archives': {
    name: 'Archives',
  },
};

const Navbar = () => {
  return (
    <header className='-ml-[8px] mb-12 mt-10 sticky top-0 tracking-tight bg-neutral-900'>
      <section className='lg:sticky lg:top-20'>
        <nav className='flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'>
          <div className='flex flex-row space-x-0 pr-10'>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className='transition-all hover:text-lime-700 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2'
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className='flex flex-row space-x-0 pr-10'>
            {Object.entries(navItems2).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className='transition-all hover:text-lime-700 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2'
                >
                  {name}
                </Link>
              );
            })}

            <button className='outline-none border-none'>Sign-in</button>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
