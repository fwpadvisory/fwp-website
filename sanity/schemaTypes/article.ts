import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          'Asset Protection',
          'Family Protection Trusts',
          'Succession Planning',
          'General',
        ],
      },
    }),
    defineField({ name: 'excerpt', title: 'Excerpt / summary', type: 'text', rows: 3 }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'Shown in the byline under the article. Defaults to the firm name if left blank.',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'coverImage', title: 'Featured image', type: 'image', options: { hotspot: true } }),
    defineField({
      name: 'disclaimer',
      title: 'Disclaimer',
      type: 'text',
      rows: 3,
      description: 'General-information disclaimer shown at the foot of the article.',
    }),
    defineField({
      name: 'sourceNote',
      title: 'Source note',
      type: 'text',
      rows: 3,
      description: 'Optional source / case reference note.',
    }),
    defineField({ name: 'seoTitle', title: 'SEO title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO description', type: 'text', rows: 2 }),
    defineField({ name: 'publishedAt', title: 'Publication date', type: 'datetime' }),
  ],
  preview: { select: { title: 'title', subtitle: 'category' } },
});
