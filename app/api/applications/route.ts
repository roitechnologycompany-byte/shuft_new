import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const { name, phone, email, address, roomType, area, message, source } = data

  if (!name || !phone) {
    return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 })
  }

  const app = await prisma.application.create({
    data: { name, phone, email, address, roomType, area, message, source: source || 'contact_form' },
  })

  return NextResponse.json({ ok: true, id: app.id }, { status: 201 })
}
