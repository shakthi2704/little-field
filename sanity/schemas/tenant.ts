import { defineType, defineField } from 'sanity'
import { Store } from 'lucide-react'

export const tenant = defineType({
    name: 'tenant',
    title: 'Tenants',
    type: 'document',
    icon: Store,
    groups: [
        { name: 'info', title: 'Information', default: true },
        { name: 'media', title: 'Media' },
        { name: 'contact', title: 'Contact & Hours' },
        { name: 'settings', title: 'Settings' },
    ],
    fields: [
        defineField({
            name: 'name',
            title: 'Tenant Name',
            type: 'string',
            group: 'info',
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            group: 'info',
            options: { source: 'name', maxLength: 96 },
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            group: 'info',
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'floor',
            title: 'Floor',
            type: 'reference',
            to: [{ type: 'floor' }],
            group: 'info',
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            rows: 3,
            group: 'info',
            description: 'Shown on the Explore grid card. Keep under 120 characters.',
            validation: (R) => R.max(200),
        }),
        defineField({
            name: 'longDescription',
            title: 'Full Description',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'info',
            description: 'Shown on the shop detail page. Supports rich text.',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero / Cover Image',
            type: 'image',
            group: 'media',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                }),
            ],
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            group: 'media',
            fields: [
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            ],
        }),
        defineField({
            name: 'galleryImages',
            title: 'Gallery Images',
            type: 'array',
            group: 'media',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            group: 'contact',
        }),
        defineField({
            name: 'website',
            title: 'Website URL',
            type: 'url',
            group: 'contact',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram URL',
            type: 'url',
            group: 'contact',
        }),
        defineField({
            name: 'hours',
            title: 'Opening Hours',
            type: 'string',
            group: 'contact',
            description: 'e.g. Mon–Fri 9AM–9PM, Weekends 10AM–10PM',
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured',
            type: 'boolean',
            group: 'settings',
            description: 'Featured tenants appear in the home page category slider.',
            initialValue: false,
        }),
        defineField({
            name: 'isActive',
            title: 'Published',
            type: 'boolean',
            group: 'settings',
            description: 'Unpublished tenants are hidden from the website.',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'category.title',
            media: 'heroImage',
        },
    },
})