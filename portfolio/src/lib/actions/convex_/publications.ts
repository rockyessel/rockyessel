'use server';

import { publicationsMethod } from '../../convex';
import { fetchMutation, fetchQuery } from 'convex/nextjs';
import { PublicationType } from '@/types';

export const createPublication = async (publication_: PublicationType) => {
  console.log('publication_: ', publication_);

  



  const publication = await fetchMutation(
    publicationsMethod.createPublication,
    { ...publication_ }
  );
  return publication;
};

export const getPublications = async () => {
  const publications = await fetchQuery(publicationsMethod.getPublications);
  return publications;
};

export const getPublicationSlug = async (slug: string) => {
  const publication = await fetchQuery(
    publicationsMethod.getPublicationBySlug,
    {
      slug,
    }
  );
  return publication;
};

export const getPublicationById = async (publicationId: string) => {
  const publication = await fetchQuery(publicationsMethod.getPublicationById, {
    publicationId,
  });
  return publication;
};

export const updatePublication = async (publication: PublicationType) => {
  const { _creationTime, ...rest } = publication;
  const updatedPublication = await fetchMutation(
    publicationsMethod.updatePublication,
    {
      ...rest,
    }
  );
  return updatedPublication;
};
