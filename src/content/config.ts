import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string(),
    repository: z.string(),
    demo: z.string().optional(),
    tags: z.array(z.string()),
    description: z.string(),
    score: z.number(),
    publish: z.boolean(),
  }),
});

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    created_at: z.date(),
    updated_at: z.date(),
    summary: z.string(),
    publish: z.boolean(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
