import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const format = searchParams.get('format')

  const subscribers = await prisma.subscriber.findMany({
    where: { isActive: true },
    orderBy: { createdAt: 'desc' },
  })

  if (format === 'csv') {
    const csv = ['Email,Имя,Дата', ...subscribers.map(s =>
      `"${s.email}","${s.name || ''}","${new Date(s.createdAt).toLocaleDateString('ru-RU')}"`
    )].join('\n')
    return new NextResponse(csv, {
      headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename=subscribers.csv' }
    })
  }

  return NextResponse.json({ subscribers, total: subscribers.length })
}

export async function DELETE(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await req.json()
  await prisma.subscriber.update({ where: { id }, data: { isActive: false } })
  return NextResponse.json({ ok: true })
}
