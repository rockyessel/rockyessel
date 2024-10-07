'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils/helpers';
import { FolderKanban, House, PenLine, File, Package2 } from 'lucide-react';

const navItems = {
  '/': {
    name: 'home',
    icon: House,
  },
  '/writings': {
    name: 'writings',
    icon: PenLine,
  },
  '/projects': {
    name: 'projects',
    icon: FolderKanban,
  },
  '/resume': {
    name: 'resume',
    icon: File,
  },
};

const navItems2 = {
  '/archives': {
    name: 'Archives',
    icon: Package2,
  },
};

interface Props {
  className?: string;
}

const Navbar = ({ className }: Props) => {
  return (
    <header
      className={cn(
        className,
        '-ml-[8px] mb-12 mt-10 sticky top-0 tracking-tight bg-neutral-900'
      )}
    >
      <section className='lg:sticky lg:top-20'>
        <nav className='flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative'>
          <div className='flex flex-row gap-2.5 space-x-0 pr-10'>
            {Object.entries(navItems).map(([path, item]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className='items-center transition-all hover:text-lime-700 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2'
                >
                  <item.icon className='w-4 h-4 mr-2' />
                  {item.name}
                </Link>
              );
            })}
          </div>
          <div className='flex flex-row space-x-0 pr-10'>
            {Object.entries(navItems2).map(([path, item]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className='items-center transition-all hover:text-lime-700 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2'
                >
                  <item.icon className='w-4 h-4 mr-2' />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
