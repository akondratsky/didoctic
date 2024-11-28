import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

const moduleType = v.union(v.literal('Markdown'), v.literal('Question'));

const markdownBlockType = v.object({
  content: v.string(),
});

const moduleDataType = v.union(markdownBlockType);

export default defineSchema({
  lessons: defineTable({
    title: v.string(),
    modules: v.array(v.id('modules')),
  }),

  courses: defineTable({
    title: v.string(),
    description: v.string(),
    lessons: v.array(v.id('lessons')),
  }),

  modules: defineTable({
    type: moduleType,
    data: moduleDataType,
  }),
});
