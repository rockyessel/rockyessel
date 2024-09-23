'use client';

import { cn } from '@/lib/utils/helpers';
import React from 'react';

interface Props {
  className?: string;
}

const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn(className, ' sticky top-16')}>
      <div className='flex flex-col gap-3'>
        <p>Overview</p>
        <p>Projects</p>
        <p>Publications</p>
        <p>Articles</p>
        <p>Links</p>
      </div>
    </div>
  );
};

export default Sidebar;
