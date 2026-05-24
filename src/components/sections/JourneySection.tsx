'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Vous répondez',
    duration: '~10 min',
    description: '12 questions qui révèlent qui vous êtes vraiment. Pas un formulaire — une conversation.',
  },
  {
    number: '02',
    title: 'Nous analysons',
    duration: '48h avant',
    description: 'Notre SUDO Engine cartographie votre profil cérébral. 4 dimensions : valeurs, curiosité, énergie, vulnérabilité.',
  },
  {
    number: '03',
    title: 'Vous découvrez',
    duration: 'Jour J',
    description: 'Votre Passeport de Connexion arrive avec 3 indices mystérieux pour trouver votre match intellectuel.',
  },
  {
    number: '04',
    title: 'Vous connectez',
    duration: 'Toute la soirée',
    description: 'Une table d\'affinité thématique. Un menu conversationnel. Des regards qui se croisent pour la première fois.',
  },
]

export default function JourneySection() {
  return (
    <section id="journey" className="w-full py-24 px-6 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-noir mb-6">
            Votre Journey ELLEVVE
          </h2>
          <p className="text-xl font-body text-noir/70 max-w-3xl mx-auto">
            De l'inscription au moment de la connexion — chaque étape est pensée pour l'authenticité.
          </p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-12 top-24 w-1 h-16 bg-gradient-to-b from-gold-matte to-beige-deep/30"></div>
              )}

              <div className="flex gap-8 md:gap-12">
                {/* Number circle */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-noir text-off-white flex items-center justify-center">
                    <span className="text-3xl font-display font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 py-4 md:py-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-3xl md:text-4xl font-display font-bold text-noir mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm font-body text-gold-matte font-bold uppercase tracking-widest">
                        {step.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg font-body text-noir/70 leading-relaxed max-w-2xl">
                    {step.description}
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
