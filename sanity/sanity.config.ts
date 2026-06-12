import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
    name: 'littlefield',
    title: 'Little Field CMS',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
    basePath: '/studio',
    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        S.listItem()
                            .title('Site Settings')
                            .child(
                                S.document()
                                    .schemaType('siteSettings')
                                    .documentId('siteSettings')
                            ),
                        S.divider(),
                        S.documentTypeListItem('category').title('Categories'),
                        S.documentTypeListItem('floor').title('Floors'),
                        S.divider(),
                        S.documentTypeListItem('tenant').title('Tenants'),
                        S.divider(),
                        S.documentTypeListItem('event').title('Events'),
                        S.divider(),
                        S.documentTypeListItem('review').title('Reviews'),
                    ]),
        }),
        visionTool(),
    ],
    schema: {
        types: schemaTypes,
    },
})