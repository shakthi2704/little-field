import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/lib/sanity'
import { SETTINGS_QUERY } from '@/lib/queries'
import type { SiteSettings } from '@/types'

async function getSettings(): Promise<SiteSettings | null> {
    try {
        return await client.fetch(SETTINGS_QUERY, {}, { next: { tags: ['settings'] } })
    } catch {
        return null
    }
}

export default async function SiteLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const settings = await getSettings()
    const hoursText = settings?.hoursToday ?? '10AM – 8PM'

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer settings={settings ?? ({ socialLinks: [] } as unknown as SiteSettings)} />
        </>
    )
}