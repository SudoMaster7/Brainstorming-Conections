'use client'

import { motion } from 'framer-motion'
import Header from '@/components/layouts/Header'
import HeroSection from '@/components/sections/HeroSection'
import ProblemSolutionSection from '@/components/sections/ProblemSolutionSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import JourneySection from '@/components/sections/JourneySection'
import RitualSection from '@/components/sections/RitualSection'
import FAQSection from '@/components/sections/FAQSection'
import FinalCTASection from '@/components/sections/FinalCTASection'
import EventDetailsSection from '@/components/sections/EventDetailsSection'
import Footer from '@/components/layouts/Footer'

export default function LandingPage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-off-white"
    >
      <Header />
      <HeroSection />
      <ProblemSolutionSection />
      <BenefitsSection />
      <JourneySection />
      <RitualSection />
      <EventDetailsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </motion.main>
  )
}
