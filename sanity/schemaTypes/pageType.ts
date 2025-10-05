import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Page Slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Page Description',
      description: 'Brief description of the page for SEO and previews',
      rows: 3,
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        }),
      ],
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
      title: 'Page Content',
    }),
    defineField({
      name: 'isHomePage',
      type: 'boolean',
      title: 'Is Home Page?',
      description: 'Mark this page as the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'showInNavigation',
      type: 'boolean',
      title: 'Show in Navigation',
      description: 'Display this page in the main navigation menu',
      initialValue: true,
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
      media: 'backgroundImage',
      isHomePage: 'isHomePage',
    },
    prepare(selection) {
      const { title, description, isHomePage } = selection;
      return {
        title: title,
        subtitle: isHomePage ? 'Homepage' : description,
        media: selection.media,
      };
    },
  },
});
