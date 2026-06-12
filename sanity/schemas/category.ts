import { defineType, defineField } from 'sanity'
import { Tag } from 'lucide-react'

export const category = defineType({
    name: 'category',
    title: 'Categories',
    type: 'document',
    icon: Tag,
    fields: [
        defineField({
            name: 'title',
            title: 'Category Name',
            type: 'string',
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            description: 'Full-bleed image used in the home page category slider.',
            options: { hotspot: true },
            fields: [
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            ],
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            description: 'Subtitle shown in the category slider. e.g. Culinary Cravings',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first.',
            initialValue: 0,
        }),
    ],
    preview: {
        select: { title: 'title', subtitle: 'tagline', media: 'heroImage' },
    },
})