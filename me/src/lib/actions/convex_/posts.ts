'use server';

import { postsMethod } from '../../convex';
import { createSlug } from '@/lib/utils/helpers';
import { fetchMutation, fetchQuery } from 'convex/nextjs';
import { Id, Doc } from '../../../../convex/_generated/dataModel';

export const getPosts = async () => {
  const posts = await fetchQuery(postsMethod.getPosts);
  return posts;
};

export const getPublishedPosts = async () => {
  const posts = await fetchQuery(postsMethod.getPublishedPosts);
  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const post = await fetchQuery(postsMethod.getPostBySlug, { slug });
  return post;
};

export const getPostById = async (postId: string) => {
  const post = await fetchQuery(postsMethod.getPostById, { postId });
  return post;
};

export const updatePost = async (post: Doc<'posts'>) => {
  const { _creationTime, ...rest } = post;
  const postId = await fetchMutation(postsMethod.updatePost, {
    ...rest,
  });
  return postId;
};

export const publishPost = async (post: Doc<'posts'>) => {
  const { _creationTime, ...rest } = post;
  const postId = await fetchMutation(postsMethod.publishPost, {
    ...rest,
  });
  return postId;
};
