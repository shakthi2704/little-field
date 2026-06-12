'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export function Hero() {
    const bgRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${window.scrollY * 0.3}px) scale(1.1)`
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* Background image */}
            <div
                ref={bgRef}
                className="absolute inset-0 scale-110 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80')`,
                }}
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Center content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

                {/* Eyebrow */}
                <p
                    className="text-white/60 text-xs tracking-[0.35em] uppercase mb-6"
                    style={{ fontFamily: 'var(--font-lato)' }}
                >
                    Nuwara Eliya, Sri Lanka
                </p>

                {/* Main heading */}
                <h1
                    className="text-white text-6xl md:text-8xl lg:text-[7rem] font-light leading-none tracking-wide mb-6"
                    style={{ fontFamily: 'var(--font-cormorant)' }}
                >
                    LITTLE FIELD
                </h1>

                {/* Tagline */}
                <p
                    className="text-white/90 text-sm md:text-base tracking-[0.2em] uppercase mb-12 max-w-sm"
                    style={{ fontFamily: 'var(--font-lato)', fontWeight: 300 }}
                >
                    A premium mixed-use destination in the Central Highlands
                </p>

                {/* CTA */}
                <Link
                    href="/explore"
                    className="text-white border-b border-white/50 pb-0.5 text-xs tracking-[0.3em] uppercase hover:border-white transition-all duration-300"
                    style={{ fontFamily: 'var(--font-lato)' }}
                >
                    Explore ›
                </Link>

            </div>
        </section>
    )
}