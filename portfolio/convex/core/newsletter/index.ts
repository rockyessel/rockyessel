import { v } from 'convex/values';
import { mutation } from '../../_generated/server';

export const saveEmail = mutation({
  args: { email: v.optional(v.string()) },
  handler: async (ctx, args) => {
    if (!args.email) return false;
    const { email } = args;
    const existingEmail = await ctx.db
      .query('newsletters')
      .filter((q) => q.eq(q.field('email'), email))
      .first();
    if (existingEmail) return true;
    const emailId = await ctx.db.insert('newsletters', { email });
    if (!emailId) return false;
    return true;
  },
});
