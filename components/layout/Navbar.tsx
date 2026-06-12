'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useScrollPosition } from '@/lib/useScrollPosition'
import { NavOverlay } from './NavOverlay'
import { cn } from '@/lib/utils'

const HERO_PAGES = ['/', '/explore', '/events', '/visit']

const leftLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/explore' },
]

const rightLinks = [
    { label: 'Events', href: '/events' },
    { label: 'Visit', href: '/visit' },
]

const desktopMenuLinks = [
    { label: 'Gallery', href: '/gallery' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
]

export function Navbar({ topOffset = 0 }: { topOffset?: number }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()
    const scrolled = useScrollPosition(80)
    const menuRef = useRef<HTMLDivElement>(null)

    const isHeroPage = HERO_PAGES.includes(pathname)
    const isTransparent = isHeroPage && !scrolled && !menuOpen

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false)
            }
        }
        if (menuOpen) document.addEventListener('mousedown', handleClick)
        return () => document.removeEventListener('mousedown', handleClick)
    }, [menuOpen])

    return (
        <>
            <nav
                className={cn(
                    `fixed left-0 w-full z-50 transition-all duration-500 `,
                    isTransparent
                        ? 'bg-transparent'
                        : 'bg-black/20 backdrop-blur-md'
                )} style={{ top: topOffset }}
            >
                <div
                    className={cn(

                        'max-w-7xl mx-auto px-16 grid grid-cols-[1fr_auto_1fr] items-center gap-6 transition-all duration-500',
                        scrolled ? 'py-4' : 'py-6'

                    )}

                >
                    {/* ── LEFT ─────────────────────────────────────────────── */}
                    <div className="flex items-center gap-8">

                        {/* Hamburger + desktop dropdown */}
                        <div className="relative" ref={menuRef}>
                            <button
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Open menu"
                                className="flex flex-col gap-[5px] transition-opacity duration-300 hover:opacity-50"
                            >
                                <span className="block w-5 h-px bg-white" />
                                <span className="block w-5 h-px bg-white" />
                                <span className="block w-3 h-px bg-white" />
                            </button>

                            {/* Desktop dropdown — anchored under hamburger */}
                            {menuOpen && (
                                <div className="hidden md:block absolute top-full left-0 mt-3 w-52 bg-black/70 backdrop-blur-md z-[60]">
                                    {desktopMenuLinks.map((link) => (
                                        <Link
                                            key={link.label}
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="block px-6 py-4 label-caps text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200 border-b border-white/10 last:border-none"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Left nav links — desktop only */}
                        <div className="hidden md:flex items-center gap-8">
                            {leftLinks.map((link) => (
                                <NavLink
                                    key={link.href}
                                    href={link.href}
                                    label={link.label}
                                    active={pathname === link.href}
                                />
                            ))}
                        </div>
                    </div>

                    {/* ── CENTER: Logo ──────────────────────────────────────── */}
                    <Link
                        href="/"
                        className="font-serif text-xl md:text-2xl tracking-[0.25em] uppercase whitespace-nowrap text-white"
                    >
                        Little Field
                    </Link>

                    {/* ── RIGHT ────────────────────────────────────────────── */}
                    <div className="flex items-center justify-end gap-8">

                        {/* Right nav links — desktop only */}
                        <div className="hidden md:flex items-center gap-8">
                            {rightLinks.map((link) => (
                                <NavLink
                                    key={link.href}
                                    href={link.href}
                                    label={link.label}
                                    active={pathname === link.href}
                                />
                            ))}
                        </div>

                        {/* INQUIRE — desktop only */}
                        <Link
                            href="/visit#inquire"
                            className="hidden md:block label-caps px-6 py-3 border border-white/60 text-white hover:bg-white/10 transition-all duration-300"
                        >
                            Inquire
                        </Link>
                    </div>
                    {/* Open Today — 4th column */}

                </div>
            </nav>

            {/* Mobile overlay */}
            <NavOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    )
}

function NavLink({
    href,
    label,
    active,
}: {
    href: string
    label: string
    active: boolean
}) {
    return (
        <Link
            href={href}
            className={cn(
                'label-caps transition-all duration-300 relative pb-0.5 group text-white/80 hover:text-white',
                active && 'text-white'
            )}
        >
            {label}
            <span
                className={cn(
                    'absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-300 bg-white',
                    active && 'w-full'
                )}
            />
        </Link>
    )
}