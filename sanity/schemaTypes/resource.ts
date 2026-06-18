import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'type',
      type: 'string',
      options: { list: ['article', 'video', 'pdf'] },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({
      name: 'file',
      title: 'File (for PDFs)',
      type: 'file',
      hidden: ({ parent }) => parent?.type !== 'pdf',
    }),
    defineField({
      name: 'linkedArticle',
      type: 'reference',
      to: [{ type: 'article' }],
      hidden: ({ parent }) => parent?.type !== 'article',
    }),
    defineField({
      name: 'linkedVideo',
      type: 'reference',
      to: [{ type: 'video' }],
      hidden: ({ parent }) => parent?.type !== 'video',
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'type' } },
});
