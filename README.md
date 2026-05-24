# ELLEVVE MVP — Connections qui élèvent

> A sophisticated matchmaking platform for meaningful intellectual connections in Nice, Côte d'Azur.

## 🎯 Project Overview

ELEVVE is an MVP platform that validates a three-pillar approach to event-based matchmaking:

1. **SUDO Engine** — Semantic profiling via conversational onboarding
2. **Participant Experience** — From signup through to in-person event
3. **Operational Dashboard** — Real-time admin control during the event

## 🏗️ Tech Stack

- **Frontend**: Next.js 14 (App Router), Tailwind CSS, Framer Motion
- **Backend**: Next.js API Routes, Node.js
- **Database**: PostgreSQL (Supabase with pgvector for embeddings)
- **NLP/Vectors**: OpenAI Embeddings API
- **Payments**: Stripe (commitment deposit)
- **Email/SMS**: Resend + Twilio
- **PDF**: React-PDF / @react-pdf/renderer
- **Hosting**: Vercel (frontend) + Supabase (database)

## 📁 Project Structure

```
elevve-mvp/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── auth/
│   │   │   ├── onboarding/
│   │   │   ├── admin/
│   │   │   ├── event/
│   │   │   ├── passeport/
│   │   │   └── webhooks/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Landing page
│   │   ├── signup/           # Signup flow
│   │   ├── onboarding/       # Onboarding conversation
│   │   └── admin/            # Admin dashboard
│   ├── components/
│   │   ├── layouts/          # Header, Footer
│   │   ├── sections/         # Landing page sections
│   │   ├── forms/            # Form components
│   │   └── ParticleBackground.tsx
│   ├── lib/
│   │   ├── supabase.ts       # Supabase client
│   │   ├── stripe.ts         # Stripe utilities
│   │   └── openai.ts         # OpenAI utilities
│   ├── types/
│   │   └── index.ts          # TypeScript types
│   └── styles/
│       └── globals.css       # Global styles
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
└── .env.local.example
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Stripe account
- OpenAI API key
- Resend account

### Installation

1. **Clone & Install**
   ```bash
   cd elevve-mvp
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your API keys
   ```

3. **Database Setup**
   - Create a Supabase project
   - Run SQL schema (see `database/schema.sql`)
   - Enable pgvector extension

4. **Run Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000)

## 📋 Features (MVP Scope)

- ✅ Landing page with brand-aligned design
- ✅ Signup flow with Stripe deposit
- ⏳ 12-question conversational onboarding (4 dimensions)
- ⏳ NLP vectorization via OpenAI Embeddings
- ⏳ Cosine similarity + serendipity matching algorithm
- ⏳ Passeport de Connexion PDF generation
- ⏳ Admin dashboard for event day
- ⏳ Check-in system with bar credit activation
- ⏳ GDPR-compliant data separation

## 🔑 Key Modules

### 1. Landing Page
- Hero with champagne aesthetic
- Manifesto section
- "How it works" (3 steps)
- Ritual cards (4 elements)
- Event details + CTA

### 2. Onboarding Flow
- 12 sequential questions across 4 dimensions:
  - **D1**: Values & Principles
  - **D2**: Intellectual Curiosity
  - **D3**: Social Dynamics
  - **D4**: Vulnerability & Humanity
- Text inputs, sliders, multiple choice
- NLP embedding after completion

### 3. Matching Algorithm
- Cosine similarity between profile vectors (80%)
- Serendipity bonus for complementary traits (20%)
- Table theme assignment via D2 clustering
- Clue generation via LLM

### 4. Passeport de Connexion
- A6 PDF (10.5 × 14.8 cm)
- 3 clues for finding your match
- "Menu du soir" (conversation starters)
- Blank notes section

### 5. Admin Dashboard
- Real-time check-in
- Table layout visualization
- Match management
- Event metrics (NPS, bar consumption, etc.)

## 🔐 Security & GDPR

- ✅ Strict PII/embedding separation
- ✅ Magic link authentication (no passwords)
- ✅ Criptografía en repouso
- ✅ Stripe handles all payment data
- ✅ Right to be forgotten endpoint
- ✅ 12-month data retention policy

## 📊 KPI Targets (MVP)

- **Early Adopters**: 100 profiles captured
- **Onboarding Completion**: ≥75%
- **Event Attendance**: ≥90%
- **NPS**: ≥70
- **Positive Matches**: ≥60%
- **No-show Rate**: ≤10%

## 🛣️ Roadmap

### Phase 1 (Weeks 1-4): Foundation
- Landing page
- Signup + Stripe integration
- Onboarding conversational flow

### Phase 2 (Weeks 5-8): SUDO Engine
- OpenAI embeddings integration
- Matching algorithm
- Passeport generation
- Admin dashboard v1

### Phase 3 (Weeks 9-12): Pilot Event
- QA & GDPR compliance
- Event simulation
- **Beta pilot with 30-40 participants**
- Post-event analysis

## 🔗 API Documentation

See `/src/app/api/` for all endpoint stubs. Each route includes:
- Purpose and parameters
- TODO comments for implementation
- Expected response structure

## 📚 Additional Resources

- [ELEVVE MVP Specification](../ELEVVE_MVP_Spec.md)
- [Supabase Documentation](https://supabase.com/docs)
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)
- [Next.js 14 Docs](https://nextjs.org/docs)

## 🤝 Contributing

This is an internal MVP project. For questions or contributions, reach out to the core team.

## 📄 License

Proprietary — ELEVVE × SUDO Intelligence, 2025

---

**Made with ✨ in Nice, Côte d'Azur**

© 2025 ELLEVVE × SUDO Intelligence
