import { defineCollection, z } from 'astro:content';

// Each file in src/content/pages/ is one full page (the doc format you send:
// URL, Lang, GEO, Brand, Game, Provider, Primary Keyword, Search Intent,
// Meta Title, Meta Description, then the H1 + body).
// The filename's slug maps directly to the URL path (index.md -> "/").
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    lang: z.string().default('fr'),
    geo: z.string().optional(),
    brand: z.string().optional(),
    game: z.string().optional(),
    provider: z.string().optional(),
    primaryKeyword: z.string().optional(),
    searchIntent: z.string().optional(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    h1: z.string(),
    publishDate: z.date().default(() => new Date()),
  }),
});

export const collections = { pages };

