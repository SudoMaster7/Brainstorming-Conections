'use client'

import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Vous répondez.',
    description: 'Perguntas que revelam quem você é de verdade.',
  },
  {
    number: '02',
    title: 'Nous calculons.',
    description: 'O SUDO Engine mapeia seu perfil cerebral.',
  },
  {
    number: '03',
    title: 'Vous trouvez.',
    description: 'Um rosto desconhecido com uma mente familiar.',
  },
]

export default function HowItWorksSection() {
  return (
    <section className="w-full py-24 px-6 bg-champagne">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-display font-bold text-noir mb-16 text-center"
        >
          Comment ça marche
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-6xl font-display font-bold text-gold-matte mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-display font-bold text-noir mb-3">
                {step.title}
              </h3>
              <p className="text-lg font-body text-noir/70">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
