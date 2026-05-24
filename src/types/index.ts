// User Types
export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  codeName: string
  eventId: string
  depositStatus: 'pending' | 'paid' | 'converted' | 'retained'
  stripePaymentIntentId: string | null
  checkedIn: boolean
  createdAt: string
  updatedAt: string
}

// Brain Profile (Anonymous, NLP vectors)
export interface BrainProfile {
  anonymousId: string
  eventId: string
  embeddingVector: number[] // 1536-dimensional vector from OpenAI
  dim2Mode: 'livres' | 'pratique' | 'debats' | 'observation'
  dim3Initiator: number // 0-1 slider
  dim3Listener: 'explorateur' | 'narrateur' | 'les_deux'
  dim3Order: number // 0-1 slider
  createdAt: string
}

// Onboarding Responses
export interface OnboardingResponses {
  anonymousId: string
  eventId: string
  // Dimension 1
  dim1A: string // Valeur défendue
  dim1B: string // Comportements qui déconnectent
  dim1C: string // Utilisation du temps si pas de contrainte financière
  // Dimension 2
  dim2A: string // Paradoxe à débattre
  dim2B: 'livres' | 'pratique' | 'debats' | 'observation' // Consommation de connaissance
  dim2C: string // Opinion étrange/provocatrice
  // Dimension 3
  dim3A: number // 0=j'initie, 1=je préfère être approché
  dim3B: 'explorateur' | 'narrateur' | 'les_deux'
  dim3C: number // 0=chaos créatif, 1=ordre structuré
  // Dimension 4
  dim4A: string // Échec dont on est fier
  dim4B: string // Chose qui rappelle que la vie vaut la peine
  dim4C: string // Qui resteriez-vous sans profession/lieu
  createdAt: string
}

// Match Result
export interface Match {
  id: string
  eventId: string
  participantAId: string
  participantBId: string
  score: number
  serendipityBonus: number
  clue1: string
  clue2: string
  clue3: string
  clue4?: string // Extra clue revealed on demand
  tableTheme: 'exploration' | 'stoicism' | 'creatives' | 'economie'
  confirmed: boolean
  createdAt: string
}

// Event
export interface Event {
  id: string
  city: string
  venueName: string
  venueAddress: string | null // Revealed after signup
  eventDate: string
  capacity: number
  status: 'draft' | 'open' | 'matching' | 'live' | 'closed'
  createdAt: string
  updatedAt: string
}

// Admin Dashboard Data
export interface EventStats {
  totalRegistered: number
  totalCheckedIn: number
  depositPaid: number
  depositRetained: number
  avgBarConsumption: number
  npsScore: number
}
