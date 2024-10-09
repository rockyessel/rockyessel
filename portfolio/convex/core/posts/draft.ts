import { v } from 'convex/values';
import { mutation, query } from '../../_generated/server';
import { PostDraftSchema } from '../../types';

export const createPostDraft = mutation({
  args: { ...PostDraftSchema },
  handler: async (ctx, args) => {
    return await ctx.db.insert('posts_draft', { ...args });
  },
});

export const updatePostDraft = mutation({
  args: { _id: v.id('posts_draft'), ...PostDraftSchema },
  handler: async (ctx, args) => {
    const { _id, ...rest } = args;
    await ctx.db.patch(_id, { ...rest });
    return _id;
  },
});

export const getPostDraftById = query({
  args: { draftId: v.string() },
  handler: async (ctx, { draftId }) => {
    const draft = await ctx.db
      .query('posts_draft')
      .filter((q) => q.eq(q.field('_id'), draftId))
      .first();

    return draft;
  },
});

export const getPostDrafts = query({
  args: {},
  handler: async (ctx) => {
    const drafts = await ctx.db.query('posts_draft').order('asc').take(100);
    return drafts ?? [];
  },
});

export const publishDraftPost = mutation({
  args: { draftId: v.id('posts_draft') },
  handler: async (ctx, args) => {
    const { draftId } = args;

    const draft = await ctx.db
      .query('posts_draft')
      .filter((q) => q.eq(q.field('_id'), draftId))
      .first();

    console.log('draft: ', draft);

    if (!draft) return null;

    const { postId, _creationTime, _id, ...rest } = draft;

    // updating
    if (postId) {
      // @ts-ignore
      await ctx.db.patch(postId, { ...rest, isPublished: true });
      return postId;
    }

    // @ts-ignore
    const newPostId = await ctx.db.insert('posts', {
      ...rest,
      isPublished: true,
      isFeatured: false,
    });

    await ctx.db.patch(draftId, {
      ...rest,
      isPublished: false,
      postId: newPostId,
    });

    return newPostId;
  },
});
