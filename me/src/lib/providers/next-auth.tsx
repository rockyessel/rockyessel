'use client';


import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';



interface Props {
  children:ReactNode
}

/**
 * Component for providing Next.js authentication context.
 * Wrapping the provided child components with the SessionProvider.
 * @SessionProvider The SessionProvider manages the authentication state and provides it to the child components.
 */
//
export const NextAuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
