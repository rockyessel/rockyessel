'use client';

import { ReactNode } from 'react';
import Profile from '../common/profile';
import { cn } from '@/lib/utils/helpers';

interface Props {
  children: ReactNode;
  className?: string;
}

const ProfileLayout = ({ children, className }: Props) => {
  return (
    <section className={cn(className, 'w-full h-full flex items-start gap-1')}>
      <Profile />
      {children}
    </section>
  );
};

export default ProfileLayout;
