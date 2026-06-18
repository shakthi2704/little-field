import { Hero } from '@/components/home/Hero'
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

export default async function HomePage() {
  const settings = await getSettings()
  const hoursText = settings?.hoursToday ?? '10AM – 8PM'

  return (
    <>
      <Hero hoursText={hoursText} />
    </>
  )
}