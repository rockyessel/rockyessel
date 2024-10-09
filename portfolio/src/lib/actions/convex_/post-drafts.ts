'use server';

import { postDraftsMethod } from '../../convex';
import { createSlug } from '@/lib/utils/helpers';
import { fetchMutation, fetchQuery } from 'convex/nextjs';
import { Id, Doc } from '../../../../convex/_generated/dataModel';

export const getPostDrafts = async () => {
  const draft = await fetchQuery(postDraftsMethod.getPostDrafts);
  return draft;
};

export const getPostDraftById = async (draftId: string) => {
  const draft = await fetchQuery(postDraftsMethod.getPostDraftById, {
    draftId,
  });
  return draft;
};

export const createPostDraft = async () => {
  const init = {
    title: `Untitled`,
    slug: createSlug('Untitled'),
    isFeatured: false,
    isPublished: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const draft: Id<'posts_draft'> = await fetchMutation(
    postDraftsMethod.createPostDraft,
    { ...init }
  );

  return draft;
};

export const updatePostDraft = async (post: Doc<'posts_draft'>) => {
  const { _creationTime, ...rest } = post;
  const draftId = await fetchMutation(postDraftsMethod.updatePostDraft, {
    ...rest,
  });
  return draftId;
};

export const publishDraft = async (draftId: Id<'posts_draft'>) => {
  const postId = await fetchMutation(postDraftsMethod.publishDraftPost, {
    draftId,
  });
  return postId;
};
