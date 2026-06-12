'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface HoursBarProps {
    hoursText: string
    enabled: boolean
}

export function HoursBar({ hoursText, enabled }: HoursBarProps) {
    const [dismissed, setDismissed] = useState(false)

    if (!enabled || dismissed) return null

    return (
        <div className="fixed top-0 left-0 w-full z-[60] bg-black text-white">
            <div className="relative flex items-center justify-center px-10 py-2.5">
                <Link
                    href="/visit"
                    className="text-[11px] tracking-[0.18em] uppercase font-medium hover:opacity-70 transition-opacity duration-300"
                >
                    Open Today&nbsp;
                    <span className="opacity-70">{hoursText}</span>
                    <span className="ml-3 opacity-50">— Visit ›</span>
                </Link>

                <button
                    onClick={() => setDismissed(true)}
                    aria-label="Dismiss hours bar"
                    className="absolute right-4 p-1 opacity-40 hover:opacity-100 transition-opacity duration-200"
                >
                    <X size={12} strokeWidth={1.5} />
                </button>
            </div>
        </div>
    )
}
