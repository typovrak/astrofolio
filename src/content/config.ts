import { defineCollection, z } from "astro:content";

const parcours = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    location: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    keywords: z.array(z.string()),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

const projet = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    keywords: z.array(z.string()),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    repoFrontUrl: z.string().optional(),
    repoApiUrl: z.string().optional(),
  }),
});

const legale = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    date: z.coerce.date(),
  }),
});

export const collections = { parcours, blog, projet, legale };
