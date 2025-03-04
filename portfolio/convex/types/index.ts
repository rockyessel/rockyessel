import { v } from 'convex/values';

export const newsletterSchema = {
  email: v.string(),
};
export const PostSchema = {
  title: v.string(),
  slug: v.string(),
  updatedAt: v.string(),
  createdAt: v.string(),
  publishedAt: v.string(),
  postType: v.string(),
  isFeatured: v.boolean(),
  isPublished: v.boolean(),
  category: v.string(),
  subCategory: v.string(),
  description: v.string(),
  content: v.array(v.any()),
  tags: v.array(v.string()),

  // OPtional
  seoTitle: v.optional(v.string()),
  seoDescription: v.optional(v.string()),
  image: v.optional(v.string()),
  seoOgImage: v.optional(v.string()),
  seoMetaRobot: v.optional(v.string()),
  seoKeywords: v.optional(v.array(v.string())),
  authorId: v.optional(v.array(v.string())),
  rePublishedOn: v.optional(v.array(v.string())),
};

export const PostDraftSchema = {
  title: v.optional(v.string()),
  slug: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  publishedAt: v.optional(v.string()),
  postType: v.optional(v.string()),
  isFeatured: v.optional(v.boolean()),
  isPublished: v.optional(v.boolean()),
  image: v.optional(v.string()),
  content: v.optional(v.array(v.any())),
  tags: v.optional(v.array(v.string())),
  seoTitle: v.optional(v.string()),
  description: v.optional(v.string()),
  seoDescription: v.optional(v.string()),
  seoOgImage: v.optional(v.string()),
  seoMetaRobot: v.optional(v.string()),
  seoKeywords: v.optional(v.array(v.string())),
  authorId: v.optional(v.array(v.string())),
  category: v.optional(v.string()),
  subCategory: v.optional(v.string()),
  rePublishedOn: v.optional(v.array(v.string())),
  postId: v.optional(v.id('posts')),
};

export const FileSchema = {
  postId: v.optional(v.id('posts_draft')),
  storageId: v.id('_storage'),
  mimeType: v.string(),
  fileUrl: v.optional(v.string()),
};

export const PublicationSchema = {
  name: v.optional(v.string()),
  title: v.optional(v.string()),
  pubId: v.optional(v.id('publications')),
  slug: v.optional(v.string()),
  url: v.string(),
  logo: v.optional(v.string()),
  description: v.optional(v.string()),
  keywords: v.optional(v.array(v.string())),
};
