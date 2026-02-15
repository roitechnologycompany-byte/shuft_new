import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const { email, name } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Введите корректный email' }, { status: 400 })
  }

  try {
    await prisma.subscriber.upsert({
      where: { email },
      update: { isActive: true, name: name || undefined },
      create: { email, name: name || null },
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Ошибка. Попробуйте позже.' }, { status: 500 })
  }
}
