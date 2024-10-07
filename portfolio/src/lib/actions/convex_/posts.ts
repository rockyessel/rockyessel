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
  const post = await fetchQuery(postsMethod.getProductById, { postId });
  return post;
};

export const createPost = async () => {
  const postId: Id<'posts'> = await fetchMutation(postsMethod.createProduct, {
    title: `Untitled`,
    slug: createSlug('Untitled'),
    isFeatured: false,
    isPublished: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });

  return postId;
};

export const updateProduct = async (post: Doc<'posts'>) => {
  const { _creationTime, ...rest } = post;
  const postId = await fetchMutation(postsMethod.updateProduct, {
    ...rest,
  });
  return postId;
};
