import { defineType, defineField } from 'sanity'
import { Calendar } from 'lucide-react'

export const event = defineType({
    name: 'event',
    title: 'Events',
    type: 'document',
    icon: Calendar,
    groups: [
        { name: 'info', title: 'Information', default: true },
        { name: 'media', title: 'Media' },
        { name: 'settings', title: 'Settings' },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Event Title',
            type: 'string',
            group: 'info',
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'slug',
            title: 'URL Slug',
            type: 'slug',
            group: 'info',
            options: { source: 'title', maxLength: 96 },
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'date',
            title: 'Event Date & Time',
            type: 'datetime',
            group: 'info',
            options: { dateFormat: 'MMMM D, YYYY', timeFormat: 'h:mm A' },
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'endDate',
            title: 'End Date & Time',
            type: 'datetime',
            group: 'info',
            options: { dateFormat: 'MMMM D, YYYY', timeFormat: 'h:mm A' },
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            group: 'info',
            description: 'e.g. Ground Floor Atrium',
        }),
        defineField({
            name: 'body',
            title: 'Event Description',
            type: 'array',
            of: [{ type: 'block' }],
            group: 'info',
        }),
        defineField({
            name: 'relatedTenant',
            title: 'Related Tenant',
            type: 'reference',
            to: [{ type: 'tenant' }],
            group: 'info',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            group: 'media',
            options: { hotspot: true },
            fields: [
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
            ],
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'isFeatured',
            title: 'Featured',
            type: 'boolean',
            group: 'settings',
            description: 'Featured events appear on the home page.',
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
            media: 'heroImage',
        },
        prepare: ({ title, subtitle, media }) => ({
            title,
            subtitle: subtitle
                ? new Date(subtitle).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                })
                : 'No date set',
            media,
        }),
    },
})