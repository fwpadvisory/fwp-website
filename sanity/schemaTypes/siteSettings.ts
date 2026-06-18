import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'companyName', type: 'string' }),
    defineField({ name: 'abn', title: 'ABN', type: 'string' }),
    defineField({ name: 'email', type: 'string' }),
    defineField({ name: 'phone', type: 'string' }),
    defineField({ name: 'address', type: 'text', rows: 2 }),
    defineField({ name: 'bookingUrl', title: 'Booking URL', type: 'url' }),
    defineField({ name: 'freeGuidePdf', title: 'Free guide PDF', type: 'file' }),
    defineField({
      name: 'social',
      title: 'Social links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'platform', type: 'string' },
            { name: 'url', type: 'url' },
          ],
        },
      ],
    }),
    defineField({ name: 'complianceNote', type: 'text', rows: 2 }),
  ],
  preview: { prepare: () => ({ title: 'Site Settings' }) },
});
