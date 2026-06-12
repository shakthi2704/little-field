'use client'

import { useState, useEffect } from 'react'

export function useScrollPosition(threshold = 80) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > threshold)
        }

        // Set initial state
        handleScroll()

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [threshold])

    return scrolled
}