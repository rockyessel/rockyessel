import { authOptions } from '@/lib/auth/options';
import { getServerSession, Session } from 'next-auth';

export const getServerUser = async (): Promise<Session | null> => {
  const session = await getServerSession(authOptions);

  if (session) return session;
  return null;
};
