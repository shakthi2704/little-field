import { defineType, defineField } from 'sanity'
import { Star } from 'lucide-react'

export const review = defineType({
    name: 'review',
    title: 'Reviews',
    type: 'document',
    icon: Star,
    fields: [
        defineField({
            name: 'author',
            title: 'Author Name',
            type: 'string',
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role / Company',
            type: 'string',
            description: 'e.g. Retail Partner or Event Guest',
        }),
        defineField({
            name: 'rating',
            title: 'Rating',
            type: 'number',
            options: {
                list: [
                    { title: '5 stars', value: 5 },
                    { title: '4 stars', value: 4 },
                    { title: '3 stars', value: 3 },
                ],
                layout: 'dropdown',
            },
            initialValue: 5,
            validation: (R) => R.required().min(3).max(5),
        }),
        defineField({
            name: 'body',
            title: 'Review Text',
            type: 'text',
            rows: 4,
            validation: (R) => R.required().min(20).max(400),
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date',
            options: { dateFormat: 'MMMM YYYY' },
        }),
        defineField({
            name: 'isPublished',
            title: 'Published',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: { title: 'author', subtitle: 'body' },
        prepare: ({ title, subtitle }) => ({
            title,
            subtitle: subtitle?.slice(0, 80) + '…',
        }),
    },
})