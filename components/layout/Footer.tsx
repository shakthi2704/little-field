import Link from 'next/link'
import type { SiteSettings } from '@/types'

interface FooterProps {
    settings: SiteSettings
}

function InstagramIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
    )
}

function FacebookIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}

function TikTokIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.79 1.52V6.76a4.85 4.85 0 0 1-1.02-.07Z" />
        </svg>
    )
}

function XIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.836L1.254 2.25H8.08l4.253 5.622 5.911-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}

function LinkedInIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    )
}

const platformIcons: Record<string, React.FC> = {
    instagram: InstagramIcon,
    facebook: FacebookIcon,
    tiktok: TikTokIcon,
    x: XIcon,
    linkedin: LinkedInIcon,
}

export function Footer({ settings }: FooterProps) {
    return (
        <footer className="bg-[#f9f9f9] border-t border-black/8">
            <div className="max-w-7xl mx-auto px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-20">

                    {/* Brand column */}
                    <div>
                        <p className="font-serif text-2xl tracking-[0.28em] uppercase mb-5">
                            Little Field
                        </p>
                        <p className="text-sm text-black/50 leading-relaxed max-w-[240px]">
                            A premium mixed-use destination in the heart of Nuwara Eliya, Sri Lanka.
                        </p>

                        {/* Social icons */}
                        {settings?.socialLinks?.length ? (
                            <div className="flex items-center gap-4 mt-8">
                                {settings.socialLinks.map((link) => {
                                    const Icon = platformIcons[link.platform]

                                    return Icon ? (
                                        <a
                                            key={link.platform}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={link.platform}
                                        >
                                            <Icon />
                                        </a>
                                    ) : null
                                })}
                            </div>
                        ) : null}
                    </div>

                    {/* Explore column */}
                    <div>
                        <h5 className="label-caps text-black/40 mb-5">Explore</h5>
                        <ul className="space-y-3">
                            {[
                                { label: 'Shops & Dining', href: '/explore' },
                                { label: 'Events', href: '/events' },
                                { label: 'Gallery', href: '/gallery' },
                            ].map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-sm text-black/55 hover:text-black transition-colors duration-300">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visit column */}
                    <div>
                        <h5 className="label-caps text-black/40 mb-5">Visit</h5>
                        <ul className="space-y-3">
                            {[
                                { label: 'Plan Your Visit', href: '/visit' },
                                { label: 'Inquire', href: '/visit#inquire' },
                                { label: 'Leasing', href: '/visit#leasing' },
                            ].map((l) => (
                                <li key={l.label}>
                                    <Link href={l.href}>
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal column */}
                    <div>
                        <h5 className="label-caps text-black/40 mb-5">Legal</h5>
                        <ul className="space-y-3">
                            {[
                                { label: 'Privacy Policy', href: '/privacy' },
                                { label: 'Terms of Use', href: '/terms' },
                            ].map((l) => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-sm text-black/55 hover:text-black transition-colors duration-300">
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-black/8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="label-caps text-black/30">
                        © {new Date().getFullYear()} Little Field. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <span className="label-caps text-black/25">Est. 2024</span>
                        <span className="label-caps text-black/25">Nuwara Eliya, LK</span>
                    </div>
                </div>
            </div>
        </footer >
    )
}