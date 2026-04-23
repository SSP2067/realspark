import { defineCollection, z } from 'astro:content';

const sparks = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['youtube', 'books', 'research', 'products', 'ai']),
    creator: z.string(),          // matches slug in /content/creators/
    readTime: z.number(),
    tags: z.array(z.string()),    // 2-4 tags, lowercase hyphenated
    sourceTitle: z.string(),
    sourceUrl: z.string().url(),
    publishDate: z.date(),
    description: z.string().optional(), // 1–2 sentence SEO/OG description
    deepSpark: z.string().optional(),
    status: z.enum(['draft', 'published']),
  }),
});

const deep = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    readTime: z.number(),
    tags: z.array(z.string()),
    contributingSparks: z.array(z.string()), // slugs of Daily Sparks
    lastUpdated: z.date(),
    status: z.enum(['draft', 'published']),
  }),
});

const creators = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    platform: z.enum(['youtube', 'author', 'researcher']),
    bio: z.string(),
    externalUrl: z.string().url(),
    avatar: z.string().optional(), // relative path to image in /public/
  }),
});

export const collections = { sparks, deep, creators };
