import { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tone, boldness, weirdness, chaos } = req.body

  const prompt = `
    Generate brand copy in a ${tone} tone.
    Boldness: ${boldness}/100.
    Weirdness: ${weirdness}/100.
    Chaos Level: ${chaos}/100.
  `

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-4',
      temperature: chaos / 100,
    })

    res.status(200).json({ result: completion.choices[0].message.content })
  } catch (err: any) {
    res.status(500).json({ error: err.message })
  }
}
