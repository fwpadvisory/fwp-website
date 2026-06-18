# Sanity CMS

Headless CMS for FWP Advisory — articles, videos, resources, FAQs, and site settings.
The Studio is **embedded in the site** at `/studio` (via `@sanity/astro`).

## Schemas
`sanity/schemaTypes/` — `article`, `video`, `resource`, `faq`, `siteSettings`.

## Going live (when a real project exists)

The site currently runs on a **placeholder** project id, so the build stays green and
`/resources` shows the prototype article stubs. To connect a real project:

1. Create a free project at https://sanity.io (note the **project id** and **dataset**, usually `production`).
2. Set env (locally in `.env`, and in Vercel for deploys):
   ```
   PUBLIC_SANITY_PROJECT_ID="<your-project-id>"
   PUBLIC_SANITY_DATASET="production"
   ```
3. Add the site URL to the project's **CORS origins** (Sanity dashboard → API), and `http://localhost:4321` for local Studio.
4. Visit `/studio` to log in and edit content.

Once the project has published `article` documents, `/resources` and `/resources/[slug]`
switch from the stubs to live CMS content automatically (graceful fallback in `src/lib/sanity.ts`).

## Seed the 3 article stubs

`seed.ndjson` holds the 3 prototype articles (titles + summaries; bodies are TODO).
Import them into the dataset:

```bash
pnpm dlx sanity@latest dataset import sanity/seed.ndjson production --replace
```

(Requires being logged in: `pnpm dlx sanity@latest login`. Project id is read from `sanity.cli.ts` / env.)
