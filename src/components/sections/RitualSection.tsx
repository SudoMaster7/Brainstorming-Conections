'use client'

import { motion } from 'framer-motion'

const rituals = [
  {
    icon: '🔒',
    title: 'Lacre Digital',
    description: 'Vos réponses sont chiffrées et séparées de votre identité.',
  },
  {
    icon: '🎨',
    title: 'White Canvas',
    description: 'Aucune photo de profil. Juste des esprits.',
  },
  {
    icon: '✨',
    title: 'Golden Hour',
    description: 'Une soirée pensée pour les vraies conversations.',
  },
  {
    icon: '📖',
    title: 'Passeport',
    description: 'Un document élégant, tangible, memorable.',
  },
]

export default function RitualSection() {
  return (
    <section id="ritual" className="w-full py-24 px-6 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold text-noir mb-16 text-center"
        >
          Le Rituel
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {rituals.map((ritual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-champagne rounded-lg border border-beige-deep/30 hover:border-gold-matte/50 transition"
            >
              <div className="text-4xl mb-4">{ritual.icon}</div>
              <h3 className="text-2xl font-display font-bold text-noir mb-3">
                {ritual.title}
              </h3>
              <p className="text-lg font-body text-noir/70">
                {ritual.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
