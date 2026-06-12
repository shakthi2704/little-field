import { defineType, defineField } from 'sanity'
import { Building2 } from 'lucide-react'

export const floor = defineType({
    name: 'floor',
    title: 'Floors',
    type: 'document',
    icon: Building2,
    fields: [
        defineField({
            name: 'title',
            title: 'Floor Name',
            type: 'string',
            description: 'e.g. Ground Floor',
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'shortCode',
            title: 'Short Code',
            type: 'string',
            options: {
                list: [
                    { title: 'Ground Floor (GF)', value: 'GF' },
                    { title: 'Level 1 (L1)', value: 'L1' },
                    { title: 'Level 2 (L2)', value: 'L2' },
                    { title: 'Level 3 (L3)', value: 'L3' },
                ],
            },
            validation: (R) => R.required(),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            initialValue: 0,
        }),
    ],
    preview: {
        select: { title: 'title', subtitle: 'shortCode' },
    },
})