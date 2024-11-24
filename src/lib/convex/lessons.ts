import { query } from './_generated/server';

export const getAllLessons = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('lessons').collect();
  },
});
