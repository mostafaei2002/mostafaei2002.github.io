import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        date: z.date(),
        image: z.string(),
        repository: z.string(),
        demo: z.string(),
        tags: z.array(z.string()),
        description: z.string(),
        publish: z.boolean(),
    }),
});

export const collections = {
    projects: projectsCollection,
};
