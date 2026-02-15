import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')
  const format = searchParams.get('format') // csv
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')

  const where: Record<string, unknown> = {}
  if (status) where.status = status

  const [applications, total] = await Promise.all([
    prisma.application.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      skip: (page - 1) * limit,
      take: limit,
    }),
    prisma.application.count({ where }),
  ])

  // CSV export
  if (format === 'csv') {
    const all = await prisma.application.findMany({ where, orderBy: { createdAt: 'desc' } })
    const headers = ['ID', 'Имя', 'Телефон', 'Email', 'Адрес', 'Тип помещения', 'Площадь', 'Сообщение', 'Источник', 'Статус', 'Дата']
    const rows = all.map(a => [
      a.id, a.name, a.phone, a.email || '', a.address || '', a.roomType || '', a.area || '', a.message || '', a.source, a.status, new Date(a.createdAt).toLocaleString('ru-RU')
    ])
    const csv = [headers, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n')
    return new NextResponse(csv, { headers: { 'Content-Type': 'text/csv; charset=utf-8', 'Content-Disposition': 'attachment; filename=applications.csv' } })
  }

  return NextResponse.json({ applications, total, page, limit })
}
