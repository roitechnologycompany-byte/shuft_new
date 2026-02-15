import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import bcrypt from 'bcryptjs'

export async function GET() {
  const session = await getSession()
  if (!session || session.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  const users = await prisma.user.findMany({ select: { id: true, email: true, name: true, role: true, createdAt: true } })
  return NextResponse.json(users)
}

export async function POST(req: NextRequest) {
  const session = await getSession()
  if (!session || session.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  const { email, password, name, role } = await req.json()
  const hash = await bcrypt.hash(password, 12)
  const user = await prisma.user.create({ data: { email, password: hash, name, role } })
  return NextResponse.json({ id: user.id, email: user.email, name: user.name, role: user.role }, { status: 201 })
}
