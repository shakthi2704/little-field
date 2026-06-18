import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-lato',
  display: 'swap',
})
export const metadata: Metadata = {
  title: {
    default: 'Little Field — Nuwara Eliya',
    template: '%s | Little Field',
  },
  description:
    'A premium mixed-use destination in Nuwara Eliya, Sri Lanka. Fine dining, curated retail, modern office spaces, and world-class events.',
  openGraph: {
    title: 'Little Field',
    description: 'Premium mixed-use destination. Nuwara Eliya, Sri Lanka.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${lato.variable} scroll-smooth bg-[#f9f9f9] text-[#1b1b1b] antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
