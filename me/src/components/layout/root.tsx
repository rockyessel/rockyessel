import { ReactNode } from 'react';
import Navbar from '@/components/common/navbar';

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
