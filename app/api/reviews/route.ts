import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { name, company, city, model, rating, text } = data

  if (!name || !text || !rating) {
    return NextResponse.json({ error: 'Имя, текст и оценка обязательны' }, { status: 400 })
  }

  const ratingNum = parseInt(String(rating), 10)
  if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
    return NextResponse.json({ error: 'Оценка должна быть от 1 до 5' }, { status: 400 })
  }

  if (text.length < 30) {
    return NextResponse.json({ error: 'Текст отзыва слишком короткий (минимум 30 символов)' }, { status: 400 })
  }

  // Store model name in company field if company is empty, otherwise in the review text prefix
  // The schema has: name, company, city, rating, text, productId, isApproved
  const fullText = model ? `Модель: ${model.trim()}\n\n${text.trim()}` : text.trim()

  await prisma.review.create({
    data: {
      name: name.trim(),
      company: company?.trim() || null,
      city: city?.trim() || null,
      rating: ratingNum,
      text: fullText,
      isApproved: false, // Ожидает модерации
    },
  })

  return NextResponse.json({ ok: true }, { status: 201 })
}
