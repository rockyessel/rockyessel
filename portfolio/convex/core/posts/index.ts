import { v } from 'convex/values';
import { mutation, query } from '../../_generated/server';
import { PostSchema } from '../../types';

export const createProduct = mutation({
  args: { ...PostSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('posts', { ...args });
  },
});

export const updateProduct = mutation({
  args: { _id: v.id('posts'), ...PostSchema },
  handler: async (ctx, args) => {
    const { _id, ...rest } = args;
    console.log(await ctx.db.get(_id));
    await ctx.db.patch(_id, { ...rest });

    return _id;
  },
});

export const getPosts = query({
  args: {},
  handler: async (ctx, args) => {
    const posts = await ctx.db.query('posts').order('asc').take(100);
    return posts ?? [];
  },
});

export const getPublishedPosts = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db
      .query('posts')
      .filter((q) => q.eq(q.field('isPublished'), true))
      .collect();

    return posts ?? [];
  },
});

export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    const post = await ctx.db
      .query('posts')
      .filter((q) => q.eq(q.field('slug'), slug))
      .filter((q) => q.eq(q.field('isPublished'), true))
      .first();

    return post;
  },
});

export const getProductById = query({
  args: { postId: v.string() },
  handler: async (ctx, { postId }) => {
    const post = await ctx.db
      .query('posts')
      .filter((q) => q.eq(q.field('_id'), postId))
      .first();

    return post;
  },
});
