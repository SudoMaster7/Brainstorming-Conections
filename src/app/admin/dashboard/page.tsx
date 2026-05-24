'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function AdminDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-off-white"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <Link href="/" className="text-3xl font-display font-bold text-noir mb-2 inline-block">
              ELEVVE
            </Link>
            <p className="text-lg font-body text-noir/70">Admin Dashboard</p>
          </div>
          <button className="px-6 py-2 bg-noir text-off-white rounded-sm font-body text-sm hover:bg-gold-matte transition">
            Déconnexion
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Inscrits', value: '0', color: 'gold-matte' },
            { label: 'Présents', value: '0', color: 'gold-matte' },
            { label: 'Dépôts payés', value: '€0', color: 'gold-matte' },
            { label: 'NPS', value: '-', color: 'gold-matte' },
          ].map((kpi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-champagne rounded-lg p-6 border border-beige-deep/20"
            >
              <p className="text-sm font-body text-noir/60 mb-2">{kpi.label}</p>
              <p className={`text-3xl font-display font-bold text-${kpi.color}`}>
                {kpi.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-4 border-b border-beige-deep/20">
          {['Vue d\'ensemble', 'Check-in', 'Matches', 'Mesas', 'Rapport'].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-3 font-body text-sm border-b-2 transition ${
                tab === 'Vue d\'ensemble'
                  ? 'border-gold-matte text-noir font-bold'
                  : 'border-transparent text-noir/60 hover:text-noir'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-champagne rounded-lg p-8 border border-beige-deep/20"
        >
          <h2 className="text-2xl font-display font-bold text-noir mb-6">
            Vue d'ensemble de l'événement
          </h2>

          <div className="space-y-4 text-sm font-body text-noir/70">
            <p>Dashboard de l'admin (implémentation en cours)</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Métriques en temps réel</li>
              <li>Check-in des participants</li>
              <li>Gestion des matches</li>
              <li>Disposition des tables</li>
              <li>Génération du rapport post-événement</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
