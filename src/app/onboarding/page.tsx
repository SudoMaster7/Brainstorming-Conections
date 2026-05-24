'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function OnboardingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-off-white"
    >
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-3xl font-display font-bold text-noir mb-8 inline-block">
            ELEVVE
          </Link>
          <h1 className="text-4xl font-display font-bold text-noir mb-3">
            Bonsoir.
          </h1>
          <p className="text-xl font-body text-noir/70">
            Ce n'est pas un formulaire. C'est une conversation.
          </p>
        </div>

        {/* Onboarding Flow Stub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-champagne rounded-lg p-12 border border-beige-deep/20"
        >
          <h2 className="text-3xl font-display font-bold text-noir mb-6">
            Dimension 1: Valeurs & Principes
          </h2>

          <div className="space-y-8">
            {/* Question 1 */}
            <div className="space-y-4">
              <label className="block text-lg font-body font-bold text-noir">
                Quelle cause, idée ou valeur défendriez-vous jusqu'au bout, même si le reste du monde était en désaccord ?
              </label>
              <textarea
                placeholder="Votre réponse ici..."
                maxLength={200}
                className="w-full px-4 py-3 bg-off-white border border-beige-deep rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-matte font-body text-noir min-h-24"
              />
              <p className="text-xs text-noir/60">Maximum 200 caractères</p>
            </div>

            {/* Progress Bar */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-body text-noir/60">Progression</p>
                <p className="text-sm font-body font-bold text-gold-matte">1 / 12</p>
              </div>
              <div className="w-full h-2 bg-beige-deep/30 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '8.33%' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="h-full bg-gold-matte"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-4 mt-8">
              <button className="flex-1 py-3 border border-gold-matte text-gold-matte rounded-sm font-body font-bold hover:bg-champagne transition disabled:opacity-50">
                ← Retour
              </button>
              <button className="flex-1 py-3 bg-gold-matte text-off-white rounded-sm font-body font-bold hover:bg-beige-deep transition">
                Suivant →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 p-6 bg-noir/5 border border-noir/10 rounded-lg"
        >
          <p className="text-sm font-body text-noir/70">
            💡 <strong>Conseil:</strong> Soyez honnête. Ou surprenez-vous. Vos réponses vont entraîner notre SUDO Engine à trouver quelqu'un qui résonne vraiment avec vous.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}
