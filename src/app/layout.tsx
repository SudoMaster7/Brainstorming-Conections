import type { ReactNode } from 'react'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import '@/styles/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['400', '500', '700'],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const metadata: Metadata = {
  title: 'ELLEVVE — Connections qui élèvent',
  description: 'Connecter des esprits. Avant de connecter des corps. L\'événement de matching intelligent à Nice.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-off-white text-noir">
        {children}
      </body>
    </html>
  )
}
