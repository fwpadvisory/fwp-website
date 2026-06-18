import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'description', type: 'text', rows: 3 }),
    defineField({
      name: 'provider',
      type: 'string',
      options: { list: ['youtube', 'vimeo', 'other'] },
      initialValue: 'youtube',
    }),
    defineField({ name: 'url', title: 'URL', type: 'url' }),
    defineField({ name: 'embedId', title: 'Embed ID', type: 'string' }),
    defineField({ name: 'thumbnail', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', type: 'datetime' }),
  ],
  preview: { select: { title: 'title', subtitle: 'provider' } },
});
