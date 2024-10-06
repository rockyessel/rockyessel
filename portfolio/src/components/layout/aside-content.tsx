'use client';

import { ReactNode } from 'react';
import Profile from '../common/profile';
import { cn } from '@/lib/utils/helpers';
import WritingAside from '../common/writing-aside';

interface Props {
  children: ReactNode;
  className?: string;
  isWriting?: boolean;
}

const AsideContentLayout = ({ children, className, isWriting }: Props) => {
  return (
    <section className={cn(className, 'w-full h-full flex items-start gap-4')}>
      <Profile />
      {children}
      {isWriting  && <WritingAside />}
    </section>
  );
};

export default AsideContentLayout;
