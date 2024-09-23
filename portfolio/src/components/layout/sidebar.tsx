'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils/helpers';
import Sidebar from '../common/sidebar';

interface Props {
  children: ReactNode;
  className?: string;
}

const DashboardSidebarLayout = ({ children, className }: Props) => {
  return (
    <section className={cn(className, 'w-full h-full flex items-start gap-4')}>
      <Sidebar />
      {children}
    </section>
  );
};

export default DashboardSidebarLayout;
