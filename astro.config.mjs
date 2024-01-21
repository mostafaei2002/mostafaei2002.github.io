import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    redirects: {
        "/projects": "/projects/1",
    },
    site: "https://mostafaei2002.github.io",
});
