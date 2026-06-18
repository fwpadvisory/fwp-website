import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'faq',
  title: 'FAQ',
  type: 'document',
  fields: [
    defineField({ name: 'question', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'answer', type: 'text', rows: 4, validation: (r) => r.required() }),
    defineField({
      name: 'page',
      title: 'Shown on page',
      type: 'string',
      options: {
        list: ['home', 'services', 'about', 'process', 'resources', 'contact', 'general'],
      },
      initialValue: 'home',
    }),
    defineField({ name: 'order', type: 'number' }),
  ],
  preview: { select: { title: 'question', subtitle: 'page' } },
});
