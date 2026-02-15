import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'

export async function GET() {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const reviews = await prisma.review.findMany({ orderBy: { createdAt: 'desc' }, include: { product: { select: { name: true } } } })
  return NextResponse.json(reviews)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const data = await req.json()
  const review = await prisma.review.create({ data })
  return NextResponse.json(review, { status: 201 })
}
