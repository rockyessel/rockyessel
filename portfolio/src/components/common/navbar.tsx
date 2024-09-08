'use client';

import Link from 'next/link';

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

const Navbar = () => {
  return (
    <section className='-ml-[8px] mb-12 mt-10 sticky top-0 tracking-tight bg-neutral-900'>
      <div className='lg:sticky lg:top-20'>
        <nav
          className='flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'
          id='nav'
        >
          <div className='flex flex-row space-x-0 pr-10'>
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className='transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2'
                >
                  {name}
                </Link>
              );
            })}
          </div>


          <p>sign-in</p>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
