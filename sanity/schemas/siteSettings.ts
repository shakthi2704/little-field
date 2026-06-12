import { defineType, defineField } from 'sanity'
import { Settings } from 'lucide-react'

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    icon: Settings,
    fields: [
        defineField({
            name: 'hoursBarEnabled',
            title: 'Show Hours Bar',
            type: 'boolean',
            description: 'Toggle the "Open Today" strip at the top of the site.',
            initialValue: true,
        }),
        defineField({
            name: 'hoursToday',
            title: "Today's Hours",
            type: 'string',
            description: 'e.g. 10AM – 8PM',
        }),
        defineField({
            name: 'inquireEmail',
            title: 'Inquiry Email',
            type: 'string',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'Facebook', value: 'facebook' },
                                    { title: 'TikTok', value: 'tiktok' },
                                    { title: 'X (Twitter)', value: 'x' },
                                    { title: 'LinkedIn', value: 'linkedin' },
                                ],
                            },
                        }),
                        defineField({
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                        }),
                    ],
                    preview: {
                        select: { title: 'platform', subtitle: 'url' },
                    },
                },
            ],
        }),
    ],
    preview: {
        prepare: () => ({ title: 'Site Settings' }),
    },
})