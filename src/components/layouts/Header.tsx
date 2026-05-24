'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-off-white/95 backdrop-blur-sm border-b border-beige-deep/20"
    >
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-display text-noir tracking-widest">
          ELLEVVE
        </Link>
        <div className="hidden md:flex gap-8">
          <Link href="#manifesto" className="text-sm font-body hover:text-gold-matte transition">
            Manifeste
          </Link>
          <Link href="#ritual" className="text-sm font-body hover:text-gold-matte transition">
            Le Rituel
          </Link>
          <Link href="#event" className="text-sm font-body hover:text-gold-matte transition">
            Événement
          </Link>
        </div>
        <Link
          href="/signup"
          className="px-6 py-2 bg-gold-matte text-off-white rounded-sm text-sm font-body hover:bg-beige-deep transition"
        >
          Rejoindre
        </Link>
      </nav>
    </motion.header>
  )
}
