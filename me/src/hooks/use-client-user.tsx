'use client';

import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';

const GetClientUser = (): Session | null => {
  const { data: session } = useSession();
  if (session === null) return null;
  return session;
};

export { GetClientUser as getClientUser };
