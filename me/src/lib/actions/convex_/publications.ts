'use server';

import { publicationsMethod } from '../../convex';
import { fetchMutation, fetchQuery } from 'convex/nextjs';
import { ArticleType, PublicationType } from '@/types';
import { Id } from '../../../../convex/_generated/dataModel';

export const createPublication = async (publication_: PublicationType) => {
  console.log('publication_: ', publication_);

  const publication = await fetchMutation(
    publicationsMethod.createPublication,
    { ...publication_ }
  );
  return publication;
};

export const createPubArticle = async (article: ArticleType) => {
  console.log('article: ', article);

  const article_ = await fetchMutation(publicationsMethod.createPubArticle, {
    ...article,
  });
  return article_;
};

export const getArticleByPubId = async (pubId: Id<'publications'>) => {
  const articles = await fetchQuery(publicationsMethod.getArticleByPubId, {
    pubId,
  });
  return articles;
};

export const getPubsNArticles = async () => {
  const pubs_articles = await fetchQuery(publicationsMethod.getPubsNArticles);
  return pubs_articles;
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

export const getPublicationById = async (publicationId: Id<'publications'>) => {
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
