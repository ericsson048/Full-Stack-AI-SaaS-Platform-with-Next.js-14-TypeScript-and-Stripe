import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  const { prompt } = await req.json()

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    })

    return NextResponse.json({ text: response.choices[0].message.content })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}