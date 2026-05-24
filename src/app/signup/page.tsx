'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import SignupForm from '@/components/forms/SignupForm'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-champagne to-off-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-xl mx-auto px-6 py-12"
      >
        {/* Header */}
        <div className="mb-12 text-center">
          <Link href="/" className="inline-block mb-8">
            <h1 className="text-3xl font-display font-bold text-noir">ELEVVE</h1>
          </Link>
          <h2 className="text-4xl font-display font-bold text-noir mb-3">
            Rejoindre ELEVVE
          </h2>
          <p className="text-lg font-body text-noir/70">
            Commençons votre voyage vers une connexion véritable.
          </p>
        </div>

        {/* Signup Form */}
        <SignupForm />

        {/* Footer */}
        <div className="mt-8 text-center text-sm font-body text-noir/60">
          <p>
            En continuant, vous acceptez nos{' '}
            <Link href="#" className="text-gold-matte hover:text-beige-deep transition">
              conditions
            </Link>
            {' '}et notre{' '}
            <Link href="#" className="text-gold-matte hover:text-beige-deep transition">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </div>
  )
}
