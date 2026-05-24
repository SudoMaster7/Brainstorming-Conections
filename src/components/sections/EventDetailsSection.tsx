'use client'

import { motion } from 'framer-motion'

export default function EventDetailsSection() {
  return (
    <section id="event" className="w-full py-24 px-6 bg-champagne">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold text-noir mb-12"
        >
          Où & Quand
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="p-12 bg-off-white/50 rounded-lg border border-beige-deep/30">
            <p className="text-lg font-body text-noir/70 mb-4">
              <span className="font-bold text-noir">📍 Lieu:</span> Vieille-Ville ou Le Port, Nice
              <br />
              <em className="text-sm text-noir/60">(L'adresse exacte sera révélée après inscription)</em>
            </p>
            <p className="text-lg font-body text-noir/70 mb-4">
              <span className="font-bold text-noir">📅 Date:</span> À definir
            </p>
            <p className="text-lg font-body text-noir/70">
              <span className="font-bold text-noir">👥 Capacité:</span> 30–40 esprits sélectionnés
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
