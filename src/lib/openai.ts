import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateEmbedding(text: string): Promise<number[]> {
  // TODO: Implement OpenAI embeddings when API key is available
  // For MVP, return dummy embedding vector
  return Array(1536).fill(0).map(() => Math.random())
}

export async function generateClue(
  matchVector: number[],
  responseContext: string
): Promise<string> {
  // TODO: Implement Claude clue generation when API key is available
  // For MVP, return sample clue
  const clues = [
    'Votre match aime les conversations profondes sous les étoiles',
    'Votre match rêve de voyages en solo et de découvertes',
    'Votre match croit aux connexions authentiques',
    'Votre match cherche des âmes curiosity-driven',
  ]
  return clues[Math.floor(Math.random() * clues.length)]
}
