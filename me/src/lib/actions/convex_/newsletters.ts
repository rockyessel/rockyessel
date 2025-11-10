import { newslettersMethod } from '@/lib/convex';
import { fetchMutation } from 'convex/nextjs';

export const saveEmailToNewsletter = async (email: string) => {
  const isSaved = await fetchMutation(newslettersMethod.saveEmail, { email });
  return isSaved;
};
