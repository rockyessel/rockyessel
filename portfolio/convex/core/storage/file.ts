import { v } from 'convex/values';
import { FileSchema } from '../../types';
import { mutation, query } from '../../_generated/server';

export const createFile = mutation({
  args: { ...FileSchema },
  handler: async (ctx, args) => {
    const fileId = await ctx.db.insert('files', { ...args });
    const file = await ctx.db.get(fileId);
    if (!file) return undefined;
    return {
      ...file,
      fileUrl: String(await ctx.storage.getUrl(file?.storageId)),
    };
  },
});

export const bulkTakeAndReturnFiles = query({
  args: { storageIds: v.array(v.id('_storage')) },
  handler: async (ctx, args) => {
    const { storageIds } = args;
    const files = await Promise.all(
      storageIds.map(async (id) => {
        return { url: await ctx.storage.getUrl(id) };
      })
    );
    return files;
  },
});

export const getAllFiles = query({
  args: {},
  handler: async (ctx) => {
    const files = await ctx.db.query('files').collect();
    return files;
  },
});

export const deleteFileById = mutation({
  args: { fileId: v.id('files') },
  handler: async (ctx, args) => {
    const { fileId } = args;
    const file = await ctx.db.get(fileId);

    if (!file) return null;

    await ctx.db.delete(fileId);
    return await ctx.storage.delete(file.storageId);
  },
});

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
