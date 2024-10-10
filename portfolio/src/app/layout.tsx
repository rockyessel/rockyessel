import '@/styles/globals.css';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils/helpers';
import { Outfit } from 'next/font/google';
import TurbulenceNoise from '@/components/common/turbulence-noise';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as SonnerToaster } from 'sonner';
import { NavbarProgressProvider } from '@/lib/providers/loader';
import { NextAuthProvider } from '@/lib/providers/next-auth';

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
        <NextAuthProvider>
          <TurbulenceNoise />
          <Toaster />
          <SonnerToaster position='bottom-right' richColors />
          {children}
          <NavbarProgressProvider />
        </NextAuthProvider>
      </body>
    </html>
  );
}
