'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import ParticleBackground from '@/components/ParticleBackground'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-champagne via-off-white to-champagne flex items-center justify-center overflow-hidden pt-24 pb-12">
      <ParticleBackground />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 inline-block"
        >
          <p className="text-sm font-body tracking-widest text-gold-matte uppercase">
            ✦ L'événement du matching intelligent ✦
          </p>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-noir mb-8 leading-tight"
        >
          Vous n'êtes pas<br />
          <span className="italic font-light">cherché</span>
          <span className="font-bold">.</span>
          <br />
          <span className="text-gold-matte italic font-light">Vous êtes attendu</span>
          <span className="font-bold">.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-body text-noir/75 mb-6 max-w-3xl mx-auto"
        >
          Des esprits rares se reconnaissent. ELLEVVE facilite cette rencontre au-delà de la surface.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl font-body text-noir/60 mb-12 italic"
        >
          Un événement exclusif. Une soirée mémorable. Une connexion réelle.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/signup"
            className="group px-10 py-4 bg-noir text-off-white rounded-sm text-lg font-body font-bold hover:bg-gold-matte hover:text-noir transition transform hover:scale-105 duration-300 shadow-lg"
          >
            Réserver ma place
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <Link
            href="#details"
            className="px-10 py-4 border-2 border-noir text-noir rounded-sm text-lg font-body font-bold hover:bg-noir hover:text-off-white transition"
          >
            En savoir plus
          </Link>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-sm font-body text-noir/60"
        >
          <p className="mb-3">👥 30–40 participants sélectionnés</p>
          <p>💎 €8–12 de dépôt (converti en crédit bar si présent)</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <p className="text-sm font-body text-noir/40">Découvrez plus</p>
        <p className="text-2xl mt-2">↓</p>
      </motion.div>
    </section>
  )
}
