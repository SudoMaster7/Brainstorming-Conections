'use client'

import { motion } from 'framer-motion'

export default function ManifestoSection() {
  return (
    <section id="manifesto" className="w-full py-24 px-6 bg-off-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-display font-bold text-noir">Le Manifeste</h2>

          <p className="text-lg font-body text-noir/80 leading-relaxed">
            Les applications de rencontre nous ont promis la connexion. Elles nous ont livré de la distraction. Chaque profil est une vitrine, chaque conversation un jeu de séduction. L'algorithme nous présente des corps avant des esprits.
          </p>

          <p className="text-lg font-body text-noir/80 leading-relaxed">
            ELEVVE rompt avec ce modèle. Nous croyons que les vraies connexions naissent de la compréhension mutuelle — pas de la première impression. Le SUDO Engine cartographie votre cerveau, pas votre apparence. Vos idées, pas vos photos.
          </p>

          <p className="text-lg font-body text-noir/80 leading-relaxed">
            Un événement, une soirée, une rencontre. Pas une plateforme. Pas de profil persistant. Juste des esprits qui se reconnaissent, face à face, pour la première fois.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
