'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function SignupForm() {
  const [step, setStep] = useState<'email' | 'details' | 'confirmation'>('email')
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // TODO: Validate email and check if exists
      setStep('details')
    } catch (err) {
      setError('Failed to validate email')
    } finally {
      setLoading(false)
    }
  }

  const handleDetailsSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // TODO: Submit registration to API
      // This should create Stripe Payment Intent
      setStep('confirmation')
    } catch (err) {
      setError('Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-off-white rounded-lg p-8 shadow-lg border border-beige-deep/20"
    >
      {/* Step 1: Email */}
      {step === 'email' && (
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-body font-bold text-noir mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-champagne border border-beige-deep rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-matte font-body text-noir"
              required
            />
            <p className="text-xs text-noir/60 mt-2">
              Nous vérifierons que vous existez — ensuite, on commence la vraie conversa.
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm font-body">
              {error}
            </div>
          )}

          <button
            onClick={handleEmailSubmit}
            disabled={loading || !email}
            className="w-full py-3 bg-gold-matte text-off-white rounded-sm font-body font-bold hover:bg-beige-deep disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            {loading ? 'Vérification...' : 'Continuer'}
          </button>
        </div>
      )}

      {/* Step 2: Details */}
      {step === 'details' && (
        <div className="space-y-6">
          <h3 className="text-2xl font-display font-bold text-noir mb-6">
            Qui êtes-vous ?
          </h3>

          <div>
            <label htmlFor="firstName" className="block text-sm font-body font-bold text-noir mb-2">
              Prénom
            </label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Jean"
              className="w-full px-4 py-3 bg-champagne border border-beige-deep rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-matte font-body text-noir"
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-body font-bold text-noir mb-2">
              Nom
            </label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Dupont"
              className="w-full px-4 py-3 bg-champagne border border-beige-deep rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-matte font-body text-noir"
              required
            />
          </div>

          <div className="p-4 bg-champagne border border-beige-deep/50 rounded text-sm font-body text-noir/70">
            <strong>Note:</strong> Votre nom vrai n'apparaîtra jamais dans l'algorithme. Vous serez identifié par un codinome.
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm font-body">
              {error}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => {
                setStep('email')
                setError('')
              }}
              className="flex-1 py-3 border border-gold-matte text-gold-matte rounded-sm font-body font-bold hover:bg-champagne transition"
            >
              Retour
            </button>
            <button
              onClick={handleDetailsSubmit}
              disabled={loading || !firstName || !lastName}
              className="flex-1 py-3 bg-gold-matte text-off-white rounded-sm font-body font-bold hover:bg-beige-deep disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? 'Traitement...' : 'Confirmer'}
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 'confirmation' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center space-y-6"
        >
          <div className="text-6xl mb-4">✓</div>
          <h3 className="text-2xl font-display font-bold text-noir">
            Merci !
          </h3>
          <p className="text-lg font-body text-noir/70">
            Vous êtes maintenant sur la liste. Le reste du voyage commence maintenant — préparez-vous pour l'onboarding conversationnel.
          </p>
          <button className="w-full py-3 bg-gold-matte text-off-white rounded-sm font-body font-bold hover:bg-beige-deep transition">
            Continuer vers l'onboarding
          </button>
        </motion.div>
      )}
    </motion.form>
  )
}
