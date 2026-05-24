# ELEVVE MVP Development Guide

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repo-url>
cd elevve-mvp
npm install
```

### 2. Configure Environment Variables
```bash
cp .env.local.example .env.local
```

Fill in the following:
- **Supabase**: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Stripe**: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` and `STRIPE_SECRET_KEY`
- **OpenAI**: `OPENAI_API_KEY`
- **Resend**: `RESEND_API_KEY`
- **App URL**: `NEXT_PUBLIC_APP_URL`

### 3. Database Setup

#### Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to SQL Editor and run the schema from `database/schema.sql`
4. Enable pgvector extension:
   ```sql
   CREATE EXTENSION IF NOT EXISTS "vector";
   ```

#### Verify Tables
```bash
# In Supabase dashboard, verify:
✓ events
✓ participants
✓ brain_profiles
✓ onboarding_responses
✓ matches
✓ passeports
```

### 4. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000`

## Development Workflow

### File Structure Rules
- **Components**: Use `.tsx` (not `.jsx`)
- **Styles**: Tailwind only (no separate CSS files except globals.css)
- **Types**: Export from `src/types/index.ts`
- **Lib utilities**: Keep in `src/lib/`

### Component Patterns

#### Example: Form Component
```typescript
'use client'

import { motion } from 'framer-motion'

export default function MyForm() {
  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Form content */}
    </motion.form>
  )
}
```

#### Example: API Route
```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  try {
    // Implementation
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error message' },
      { status: 500 }
    )
  }
}
```

### Design System

#### Colors
```css
Champagne: #F5EFE0
Off-white: #FAFAF7
Noir: #111111
Gold Matte: #C9A84C
Beige Deep: #D4C5A9
```

#### Typography
- **Display**: Cormorant Garamond (italic/bold)
- **Body**: DM Sans (light/regular)

#### Spacing
- Use Tailwind's default scale (p-4, m-6, etc.)
- Use custom `gutter` for page margins

### Building Features

#### 1. Signup Module
**Files to implement:**
- `src/app/signup/page.tsx` — Signup page flow
- `src/components/forms/SignupForm.tsx` — Multi-step form
- `src/app/api/auth/register/route.ts` — Registration API

**Tasks:**
- [ ] Implement email validation
- [ ] Create Stripe Payment Intent on form submission
- [ ] Store participant in Supabase
- [ ] Generate codename (e.g., "Mercure 07")
- [ ] Send confirmation email via Resend

#### 2. Onboarding Module
**Files to implement:**
- `src/app/onboarding/page.tsx` — Onboarding flow
- `src/components/forms/OnboardingForm.tsx` — 12-question form
- `src/app/api/onboarding/submit/route.ts` — Submit responses

**Tasks:**
- [ ] Build 12-question sequential form
- [ ] Concatenate text responses
- [ ] Call OpenAI Embeddings API
- [ ] Store vectors in pgvector
- [ ] Store discrete metadata

#### 3. Matching Module
**Files to implement:**
- `src/app/api/admin/matching/route.ts` — Matching algorithm

**Tasks:**
- [ ] Implement cosine similarity calculation
- [ ] Apply serendipity bonus logic
- [ ] Cluster by D2 for table themes
- [ ] Generate clues via Claude API
- [ ] Create Match records

#### 4. Passeport Module
**Files to implement:**
- `src/components/Passeport.tsx` — PDF template
- `src/app/api/passeport/generate-all/route.ts` — Generate all PDFs

**Tasks:**
- [ ] Design A6 PDF layout
- [ ] Embed match clues
- [ ] Generate QR codes for check-in
- [ ] Send via email (Resend)

#### 5. Admin Dashboard
**Files to implement:**
- `src/app/admin/dashboard/page.tsx` — Dashboard main page
- `src/components/admin/CheckinPanel.tsx` — Check-in interface
- `src/components/admin/TableLayout.tsx` — Visual table management

**Tasks:**
- [ ] Real-time check-in system
- [ ] Table layout visualization
- [ ] Match management interface
- [ ] Event metrics display

## Testing

### Manual Testing Checklist
- [ ] Landing page loads correctly
- [ ] Signup form validates email
- [ ] Stripe Payment Intent created
- [ ] Onboarding form submits
- [ ] OpenAI embedding generated
- [ ] Matching algorithm runs
- [ ] Passeport PDF generated
- [ ] Admin check-in works
- [ ] GDPR delete endpoint works

### Database Testing
```sql
-- Check participant count
SELECT COUNT(*) FROM public.participants;

-- Check embeddings
SELECT COUNT(*) FROM public.brain_profiles;

-- Check matches
SELECT COUNT(*) FROM public.matches;
```

## Deployment

### Vercel (Frontend)
```bash
vercel link
vercel deploy
```

### Environment Variables on Vercel
Add all `.env.local` variables to Vercel dashboard

### Database Backups
Enable automatic backups in Supabase dashboard

## GDPR Compliance Checklist

- [ ] PII/Embedding separation implemented
- [ ] Delete endpoint (`DELETE /api/participant/:id`)
- [ ] Encryption at rest enabled
- [ ] Data retention policy (12 months)
- [ ] DPA signed with all vendors
- [ ] Audit logging implemented
- [ ] User consent flow in signup

## Troubleshooting

### OpenAI API Errors
```
Error: "API key not found"
→ Check OPENAI_API_KEY in .env.local
```

### Supabase Connection Issues
```
Error: "Could not connect to database"
→ Verify NEXT_PUBLIC_SUPABASE_URL and keys in .env.local
```

### Stripe Payment Issues
```
Error: "Invalid publishable key"
→ Check NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY (not secret key)
```

## Resources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Stripe API Docs](https://stripe.com/docs/api)
- [OpenAI Embeddings](https://platform.openai.com/docs/guides/embeddings)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

**Happy coding! 🚀**
