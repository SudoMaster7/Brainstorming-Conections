'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FinalCTASection() {
  return (
    <section className="w-full py-32 px-6 bg-gradient-to-br from-noir via-noir to-beige-deep relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-matte opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-matte opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold text-off-white mb-6"
        >
          Réservez votre place<br />
          <span className="text-gold-matte italic">avant qu'il ne soit trop tard</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl font-body text-off-white/80 mb-12 max-w-2xl mx-auto"
        >
          30–40 places seulement. L'événement ELLEVVE est une expérience rare, pensée pour des esprits rares.
        </motion.p>



        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            href="/signup"
            className="group px-12 py-5 bg-gold-matte text-noir rounded-sm text-xl font-display font-bold hover:bg-beige-deep transition transform hover:scale-110 duration-300 shadow-2xl"
          >
            S'inscrire maintenant
            <span className="inline-block ml-3 group-hover:translate-x-2 transition-transform">→</span>
          </Link>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-sm font-body text-off-white/60 space-y-2"
        >
          <p>🔒 Vos données sont protégées et conformes au RGPD</p>
          <p>✓ Paiement sécurisé via Stripe</p>
          <p>📍 Événement confirmé à Nice, Côte d'Azur</p>
        </motion.div>
      </div>
    </section>
  )
}
