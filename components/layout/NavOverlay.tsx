'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NavOverlayProps {
    isOpen: boolean
    onClose: () => void
}

const mobileNavLinks = [
    { label: 'Home', href: '/' },
    { label: 'Explore', href: '/explore' },
    { label: 'Events', href: '/events' },
    { label: 'Visit', href: '/visit' },
    { label: 'Inquire', href: '/visit#inquire' },
]

const menuLinks = [
    { label: 'Gallery', href: '/gallery' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Use', href: '/terms' },
]

export function NavOverlay({ isOpen, onClose }: NavOverlayProps) {

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => { document.body.style.overflow = '' }
    }, [isOpen])

    // Close on Escape
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [onClose])

    return (
        // Mobile only — full screen under navbar
        <div
            className={cn(
                'md:hidden fixed inset-0 top-[72px] z-[60] bg-black/95 backdrop-blur-md',
                'transition-all duration-300 ease-in-out',
                isOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
            )}
        >
            {/* Close button */}
            <div className="flex items-center justify-end px-8 py-5 border-b border-white/10">
                <button
                    onClick={onClose}
                    aria-label="Close menu"
                    className="text-white/60 hover:text-white transition-colors text-2xl leading-none"
                >
                    ✕
                </button>
            </div>

            {/* Main nav links */}
            <div className="flex flex-col">
                {mobileNavLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className="px-8 py-5 font-serif text-2xl text-white/80 hover:text-white border-b border-white/10 transition-colors duration-200"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>

            {/* Secondary links */}
            <div className="mt-4">
                {menuLinks.map((link) => (
                    <Link
                        key={link.label}
                        href={link.href}
                        onClick={onClose}
                        className="block px-8 py-4 label-caps text-white/40 hover:text-white/70 border-b border-white/10 transition-colors duration-200"
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}