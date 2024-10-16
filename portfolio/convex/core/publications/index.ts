import { v } from 'convex/values';
import { mutation, query } from '../../_generated/server';
import { PublicationSchema } from '../../types';

export const createPublication = mutation({
  args: { ...PublicationSchema },
  handler: async (ctx, args) => {
    const existingPub = await ctx.db
      .query('publications')
      .filter((q) => q.eq(q.field('url'), args.url))
      .first();

    if (existingPub) {
      return await updatePublication(ctx, { ...existingPub, ...args });
    }
    const publicationId = await ctx.db.insert('publications', { ...args });

    return await ctx.db.get(publicationId);
  },
});

export const updatePublication = mutation({
  args: { _id: v.id('publications'), ...PublicationSchema },
  handler: async (ctx, args) => {
    const { _id, ...rest } = args;
    await ctx.db.patch(_id, { ...rest });

    return await ctx.db.get(_id);
  },
});

export const getPublications = query({
  args: {},
  handler: async (ctx, args) => {
    const publications = await ctx.db
      .query('publications')
      .order('asc')
      .take(100);
    return publications ?? [];
  },
});

export const getPublicationBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, { slug }) => {
    const publication = await ctx.db
      .query('publications')
      .filter((q) => q.eq(q.field('slug'), slug))
      .first();
    return publication;
  },
});

export const getPublicationById = query({
  args: { publicationId: v.string() },
  handler: async (ctx, { publicationId }) => {
    const publication = await ctx.db
      .query('publications')
      .filter((q) => q.eq(q.field('_id'), publicationId))
      .first();

    return publication;
  },
});

// Article's Publication

export const createPubArticle = mutation({
  args: { ...PublicationSchema },
  handler: async (ctx, args) => {
    const existingPubArticle = await ctx.db
      .query('pub_articles')
      .filter((q) => q.eq(q.field('url'), args.url))
      .first();

    if (existingPubArticle) {
      return await updatePubArticle(ctx, { ...existingPubArticle, ...args });
    }
    const articleId = await ctx.db.insert('pub_articles', { ...args });

    return await ctx.db.get(articleId);
  },
});

export const updatePubArticle = mutation({
  args: { _id: v.id('pub_articles'), ...PublicationSchema },
  handler: async (ctx, args) => {
    const { _id, ...rest } = args;
    await ctx.db.patch(_id, { ...rest });

    return await ctx.db.get(_id);
  },
});

export const getArticleByPubId = query({
  args: { pubId: v.id('publications') },
  handler: async (ctx, { pubId }) => {
    const articles = await ctx.db
      .query('pub_articles')
      .filter((q) => q.eq(q.field('pubId'), pubId))
      .collect();

    return articles;
  },
});

export const getPubsNArticles = query({
  args: {},
  handler: async (ctx) => {
    const pubs = await ctx.db.query('publications').collect();

    const data = pubs.map(async (pub) => {
      const articles = await ctx.db
        .query('pub_articles')
        .filter((q) => q.eq(q.field('pubId'), pub._id))
        .collect();

      return {
        ...pub,
        articles,
      };
    });

    return await Promise.all(data);
  },
});
