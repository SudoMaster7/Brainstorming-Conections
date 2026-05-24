'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    icon: '🧠',
    title: 'Matching Intelligent',
    description: 'Notre SUDO Engine analyse 4 dimensions de votre personnalité pour trouver des affinités réelles, pas superficielles.',
  },
  {
    icon: '🔐',
    title: 'Intimité Protégée',
    description: 'Zéro photo. Vos données sensibles sont séparées. Vous êtes un profil cérébral, pas un produit.',
  },
  {
    icon: '✨',
    title: 'Une Expérience Luxe',
    description: 'Du Passeport de Connexion au menu conversationnel, chaque détail crée un moment mémorable.',
  },
  {
    icon: '🌟',
    title: 'Communauté Sélective',
    description: '30–40 esprits rares réunis. Pas d\'anonymes. Pas de scrolling infini. Juste des connexions sincères.',
  },
]

export default function BenefitsSection() {
  return (
    <section className="w-full py-24 px-6 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-noir mb-6">
            Pourquoi ELLEVVE?
          </h2>
          <p className="text-xl font-body text-noir/70 max-w-3xl mx-auto">
            Nous cassons les codes des apps de rencontre. Les vraies connexions ne commencent pas par une photo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="p-8 bg-champagne rounded-lg border border-beige-deep/30 hover:border-gold-matte/50 hover:shadow-lg transition group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition transform">{benefit.icon}</div>
              <h3 className="text-2xl font-display font-bold text-noir mb-3">
                {benefit.title}
              </h3>
              <p className="text-lg font-body text-noir/70 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
