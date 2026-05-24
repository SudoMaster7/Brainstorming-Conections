'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const faqs = [
  {
    q: 'Comment ça marche vraiment?',
    a: 'Vous répondez à 12 questions qui révèlent vos vraies dimensions (valeurs, curiosité, énergie, vulnérabilité). Notre SUDO Engine utilise l\'IA pour calculer les affinités sémantiques entre vous et les autres participants. 48h avant l\'événement, vous recevez votre Passeport avec 3 indices pour trouver votre match.',
  },
  {
    q: 'Mes données sont-elles sécurisées?',
    a: 'Absolument. Vos données personnelles et vos réponses NLP sont complètement séparées. Vous êtes identifié par un codinome. Aucune photo n\'est stockée. Nous respectons le RGPD à 100%.',
  },
  {
    q: 'C\'est gratuit?',
    a: 'L\'inscription coûte €8–12 (dépôt de confirmation). Ce montant est entièrement converti en crédit bar si vous êtes présent à l\'événement. Si vous ne venez pas, c\'est retenu par ELLEVVE.',
  },
  {
    q: 'Qui peut s\'inscrire?',
    a: '30–40 personnes sélectionnées. Nous cherchons des esprits rares : curieux, honnêtes, ouverts à la vulnérabilité. Pas de limite d\'âge stricte, mais une mentalité critique requise.',
  },
  {
    q: 'Que se passe-t-il après l\'événement?',
    a: 'Après la soirée, vos données sont archivées pendant 12 mois. Vous pouvez demander la suppression complète à tout moment (droit à l\'oubli). Si vous avez une connexion, c\'est à vous de continuer!',
  },
  {
    q: 'Comment est-ce différent des apps traditionnelles?',
    a: 'Pas d\'algorithme de captation. Pas de scrolling infini. Pas de notifications addictives. Juste un événement physique exclusif, une soirée riche en conversations profondes, et des matches basés sur l\'intellect, pas sur la morphologie.',
  },
]

export default function FAQSection() {
  const [expanded, setExpanded] = React.useState<number | null>(null)

  return (
    <section className="w-full py-24 px-6 bg-champagne">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-display font-bold text-noir text-center mb-16"
        >
          Questions Fréquentes
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-off-white rounded-lg border border-beige-deep/30 overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-champagne/50 transition"
              >
                <h3 className="text-lg md:text-xl font-display font-bold text-noir text-left">
                  {faq.q}
                </h3>
                <span className="text-2xl font-bold text-gold-matte flex-shrink-0 ml-4">
                  {expanded === index ? '−' : '+'}
                </span>
              </button>

              {expanded === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 border-t border-beige-deep/20 bg-champagne/20"
                >
                  <p className="text-lg font-body text-noir/75 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-gradient-to-r from-noir to-noir/90 rounded-lg text-center text-off-white"
        >
          <p className="text-lg font-body mb-4">Vous avez d'autres questions?</p>
          <Link href="mailto:hello@ellevve.com" className="text-gold-matte hover:text-beige-deep font-bold transition">
            Contactez-nous →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

import React from 'react'
