import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('lessons').collect();
  },
});

export const getById = query({
  args: {
    id: v.id('lessons'),
  },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id);
  },
});

export const createLesson = mutation({
  args: {
    title: v.string(),
  },
  handler: async (ctx, { title }) => {
    return await ctx.db.insert('lessons', {
      title,
      modules: [],
    });
  },
});

export const deleteLesson = mutation({
  args: {
    id: v.id('lessons'),
  },
  handler: async (ctx, { id }) => {
    return await ctx.db.delete(id);
  },
});
