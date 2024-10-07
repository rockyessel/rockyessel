import { v } from 'convex/values';

export const PostSchema = {
  title: v.optional(v.string()),
  slug: v.optional(v.string()),
  updatedAt: v.optional(v.string()),
  createdAt: v.optional(v.string()),
  publishedAt: v.optional(v.string()),
  postType: v.optional(v.string()),
  isFeatured: v.optional(v.boolean()),
  isPublished: v.optional(v.boolean()),
  readTime: v.optional(v.string()),
  image: v.optional(v.string()),
  content: v.optional(v.string()),
  tags: v.optional(v.array(v.string())),
  seoTitle: v.optional(v.string()),
  description: v.optional(v.string()),
  seoDescription: v.optional(v.string()),
  seoOgImage: v.optional(v.string()),
  seoKeywords: v.optional(v.array(v.string())),
  authorId: v.optional(v.array(v.string())),
  category: v.optional(v.array(v.string())),
};
