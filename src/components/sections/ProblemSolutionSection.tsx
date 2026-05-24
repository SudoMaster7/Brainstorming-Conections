'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    problem: '🙈 Apps de dating superficielles',
    solution: 'Nous connectons les esprits, pas les corps.',
  },
  {
    problem: '⏰ Swipe infinit & burnout',
    solution: 'Un événement. Une soirée. Des connexions réelles.',
  },
  {
    problem: '📸 Obsession de l\'apparence',
    description: 'Aucune photo. Zéro jugement sur le physique.',
    solution: 'Découvrez quelqu\'un pour son intellect.',
  },
  {
    problem: '🤖 Algorithmes qui vous enferment',
    solution: 'Notre SUDO Engine crée de la serendipité intelligente.',
  },
]

export default function ProblemSolutionSection() {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-champagne to-off-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-display font-bold text-noir text-center mb-16"
        >
          Le problème avec les autres…
        </motion.h2>

        <div className="space-y-6">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 bg-off-white rounded-lg border-2 border-beige-deep/30 hover:border-gold-matte/50 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <p className="text-2xl font-display font-bold text-noir mb-2">
                    {item.problem}
                  </p>
                  {item.description && (
                    <p className="text-lg font-body text-noir/60 mb-3">
                      {item.description}
                    </p>
                  )}
                </div>
                <div className="flex-1 pl-6 border-l-4 border-gold-matte">
                  <p className="text-xl font-body text-gold-matte font-bold leading-relaxed">
                    ✓ {item.solution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
