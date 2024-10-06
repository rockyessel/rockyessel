'use client';

import Navbar from '../common/navbar';
import Sidebar from '../common/sidebar';
import { cn } from '@/lib/utils/helpers';
import { ReactNode, Fragment } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  allowNavbar?: boolean;
}

const DashboardSidebarLayout = ({ ...props }: Props) => {
  const { children, className, allowNavbar = false } = props;

  return (
    <section
      className={cn(
        className,
        allowNavbar ? 'flex-col' : 'gap-10',
        'w-full max-w-[1400px] mx-auto md:py-10 px-4 min-h-[calc(100vh-50px-100px)] mb-10 flex items-start gap-4'
      )}
    >
      {allowNavbar ? (
        <Fragment>
          <Navbar className='w-full' />
          <div className='w-full flex items-start gap-10'>
            <Sidebar />
            {children}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <Sidebar />
          {children}
        </Fragment>
      )}
    </section>
  );
};

export default DashboardSidebarLayout;
