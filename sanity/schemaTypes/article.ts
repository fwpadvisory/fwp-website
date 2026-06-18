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
      name: 'body',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'seoTitle', title: 'SEO title', type: 'string' }),
    defineField({ name: 'seoDescription', title: 'SEO description', type: 'text', rows: 2 }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
  ],
  preview: { select: { title: 'title', subtitle: 'category' } },
});
