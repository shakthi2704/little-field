import { Navbar } from '@/components/layout/Navbar'
// import { HoursBar } from '@/components/layout/HoursBar'
import { Footer } from '@/components/layout/Footer'
import { client } from '@/lib/sanity'
import { SETTINGS_QUERY } from '@/lib/queries'
import type { SiteSettings } from '@/types'
import Link from 'next/link'

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

    const hoursEnabled = settings?.hoursBarEnabled ?? false
    const hoursText = settings?.hoursToday ?? '10AM – 8PM'

    return (
        <>
            {/* Open Today — fixed top right, above everything */}
            <div className="fixed top-0 right-0 z-[70] flex items-center gap-2 px-8 h-[32px]">
                <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                <Link
                    href="/visit"
                    className="text-white/80 hover:text-white transition-colors duration-300 text-[11px] tracking-[0.15em] uppercase whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-lato)' }}
                >
                    Open Today {hoursText}
                </Link>
            </div>

            {/* Push navbar down to sit below the strip */}
            <Navbar topOffset={32} />
            <main
                className="min-h-screen"

            >
                {children}
            </main>
            <Footer settings={settings ?? ({ socialLinks: [] } as unknown as SiteSettings)} />
        </>
    )
}