import { defineCliConfig } from 'sanity/cli';

// Used by the Sanity CLI (e.g. `sanity dataset import`). Reads the project from
// env so it matches the site/studio config.
export default defineCliConfig({
  api: {
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_STUDIO_PROJECT_ID || '',
    dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  },
});
