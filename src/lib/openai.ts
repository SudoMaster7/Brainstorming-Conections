import OpenAI from 'openai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
    encoding_format: 'float',
  })

  return response.data[0].embedding
}

export async function generateClue(
  matchVector: number[],
  responseContext: string
): Promise<string> {
  const message = await openai.messages.create({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 150,
    messages: [
      {
        role: 'user',
        content: `Based on this context, generate a mysterious yet revealing clue about someone:
        
Context: ${responseContext}

Clue should be:
- Poetic and intriguing
- Reveal something meaningful without identifying the person
- In French
- Maximum 15 words
- Format: "Votre match [clue]"

Generate only the clue, nothing else.`,
      },
    ],
  })

  const content = message.content[0]
  return content.type === 'text' ? content.text : 'Une âme curieuse vous attend.'
}
