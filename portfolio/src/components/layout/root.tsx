import { Outfit } from 'next/font/google';
import Navbar from '@/components/common/navbar';
import TurbulenceNoise from '@/components/common/turbulence-noise';
import { Fragment, ReactNode } from 'react';

const outFit = Outfit({ subsets: ['latin'] });

interface Props {
  children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <main className='max-w-[1400px] mx-auto md:py-10 px-4 min-h-[calc(100vh-50px-100px)] mb-10'>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
