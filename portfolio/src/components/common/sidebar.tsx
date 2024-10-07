'use client';

import { cn } from '@/lib/utils/helpers';
import React from 'react';
import { FolderKanban, House, PenLine, File, Package2 } from 'lucide-react';
import Link from 'next/link';

interface Props {
  className?: string;
}

const Sidebar = ({ className }: Props) => {
  const sideItems = {
    '/dashboard': {
      name: 'overview',
      icon: House,
    },
    '/dashboard/projects': {
      name: 'projects',
      icon: PenLine,
    },
    '/dashboard/publications': {
      name: 'publications',
      icon: FolderKanban,
    },
    '/dashboard/writings': {
      name: 'writings',
      icon: File,
    },
    '/dashboard/links': {
      name: 'links',
      icon: Package2,
    },
  };

  return (
    <div className={cn(className, ' sticky top-16')}>
      <div className='flex flex-col gap-2.5'>
        {Object.entries(sideItems).map(([path, item]) => {
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
    </div>
  );
};

export default Sidebar;
