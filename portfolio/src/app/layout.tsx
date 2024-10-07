import '@/styles/globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils/helpers';
import { Outfit } from 'next/font/google';
import Navbar from '@/components/common/navbar';
import TurbulenceNoise from '@/components/common/turbulence-noise';
import { Toaster } from '@/components/ui/toaster';

const outFit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          outFit.className,
          'w-full h-full text-zinc-300 bg-neutral-900'
        )}
      >
        <TurbulenceNoise />
         <Toaster  />
          {children}
       
      </body>
    </html>
  );
}
