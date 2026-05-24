'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="w-full py-24 px-6 bg-noir">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold text-off-white mb-6"
        >
          Garantir votre place
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl font-body text-off-white/80 mb-12"
        >
          €8–12 de dépôt de confirmation
          <br />
          <span className="text-sm text-off-white/60">
            (Intégralement converti en crédit bar si vous êtes présent.e)
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/signup"
            className="inline-block px-10 py-4 bg-gold-matte text-noir rounded-sm text-lg font-body font-bold hover:bg-beige-deep transition transform hover:scale-105"
          >
            Rejoindre la liste
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
