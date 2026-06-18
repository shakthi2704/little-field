'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SlideData {
    title: string
    tagline: string
    href: string
    image: string
}

// Placeholder data — replace with Sanity data once CMS is populated
const SLIDES: SlideData[] = [
    {
        title: 'Dining',
        tagline: 'Culinary Experiences',
        href: '/explore?category=dining',
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80',
    },
    {
        title: 'Retail',
        tagline: 'Curated Collections',
        href: '/explore?category=retail',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=80',
    },
    {
        title: 'Offices',
        tagline: 'Premium Workspaces',
        href: '/explore?category=offices',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80',
    },
    {
        title: 'Wellness',
        tagline: 'Restore & Rejuvenate',
        href: '/explore?category=wellness',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1800&q=80',
    },
]

const AUTO_PLAY_MS = 6000

export function CategorySlider() {
    const [current, setCurrent] = useState(0)
    const [animating, setAnimating] = useState(false)

    const goTo = useCallback(
        (index: number) => {
            if (animating) return
            setAnimating(true)
            setCurrent(index)
            setTimeout(() => setAnimating(false), 700)
        },
        [animating]
    )

    const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)
    const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])

    // Auto-play
    useEffect(() => {
        const timer = setInterval(next, AUTO_PLAY_MS)
        return () => clearInterval(timer)
    }, [next])

    const slide = SLIDES[current]

    return (
        <section className="relative w-full h-[80vh] min-h-[560px] overflow-hidden bg-black">

            {/* Slides */}
            {SLIDES.map((s, i) => (
                <div
                    key={s.title}
                    className={cn(
                        'absolute inset-0 transition-opacity duration-700',
                        i === current ? 'opacity-100' : 'opacity-0'
                    )}
                >
                    <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        className="object-cover"
                        priority={i === 0}
                        sizes="100vw"
                    />
                </div>
            ))}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                {/* Eyebrow label */}
                <p
                    className="text-white/60 text-[11px] tracking-[0.35em] uppercase mb-6 transition-opacity duration-500"
                    style={{ fontFamily: 'var(--font-lato)' }}
                >
                    {slide.tagline}
                </p>

                {/* Category name */}
                <h2
                    key={slide.title}
                    className="text-white font-light leading-none tracking-wide mb-8"
                    style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: 'clamp(4rem, 10vw, 9rem)',
                    }}
                >
                    {slide.title}
                </h2>

                {/* CTA */}
                <Link
                    href={slide.href}
                    className="text-white border-b border-white/50 pb-0.5 text-[11px] tracking-[0.3em] uppercase hover:border-white transition-all duration-300"
                    style={{ fontFamily: 'var(--font-lato)' }}
                >
                    Explore ›
                </Link>
            </div>

            {/* Prev arrow */}
            <button
                onClick={prev}
                aria-label="Previous category"
                className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors duration-300"
            >
                <ChevronLeft size={32} strokeWidth={1} />
            </button>

            {/* Next arrow */}
            <button
                onClick={next}
                aria-label="Next category"
                className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 text-white/60 hover:text-white transition-colors duration-300"
            >
                <ChevronRight size={32} strokeWidth={1} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={cn(
                            'h-px transition-all duration-500',
                            i === current
                                ? 'w-8 bg-white'
                                : 'w-4 bg-white/40 hover:bg-white/70'
                        )}
                    />
                ))}
            </div>
        </section>
    )
}