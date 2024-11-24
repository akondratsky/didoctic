import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  lessons: defineTable({
    id: v.number(),
    title: v.string(),
  }),
});
