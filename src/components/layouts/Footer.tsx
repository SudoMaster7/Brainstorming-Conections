'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-noir text-off-white py-12 mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-display text-lg mb-4">ELLEVVE</h3>
            <p className="text-sm font-body text-off-white/70">
              Connections qui élèvent.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm mb-4">Liens</h4>
            <ul className="space-y-2 text-sm font-body text-off-white/70">
              <li><Link href="/" className="hover:text-gold-matte transition">Accueil</Link></li>
              <li><Link href="#" className="hover:text-gold-matte transition">À propos</Link></li>
              <li><Link href="#" className="hover:text-gold-matte transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm mb-4">Légal</h4>
            <ul className="space-y-2 text-sm font-body text-off-white/70">
              <li><Link href="#" className="hover:text-gold-matte transition">Confidentialité</Link></li>
              <li><Link href="#" className="hover:text-gold-matte transition">Conditions</Link></li>
              <li><Link href="#" className="hover:text-gold-matte transition">RGPD</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm mb-4">Langues</h4>
            <ul className="space-y-2 text-sm font-body text-off-white/70">
              <li><button className="hover:text-gold-matte transition">Français</button></li>
              <li><button className="hover:text-gold-matte transition">English</button></li>
              <li><button className="hover:text-gold-matte transition">Português</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-off-white/20 pt-8 text-center text-sm text-off-white/50">
          <p>© 2025 ELLEVVE × SUDO Intelligence. Nice, Côte d'Azur.</p>
        </div>
      </div>
    </footer>
  )
}
