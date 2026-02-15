import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getSession } from '@/lib/auth'
import bcrypt from 'bcryptjs'

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session || session.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  const { id } = await params
  const { name, role, password } = await req.json()
  const updateData: Record<string, string> = { name, role }
  if (password) updateData.password = await bcrypt.hash(password, 12)
  const user = await prisma.user.update({ where: { id: parseInt(id) }, data: updateData })
  return NextResponse.json({ id: user.id, email: user.email, name: user.name, role: user.role })
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()
  if (!session || session.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  const { id } = await params
  await prisma.user.delete({ where: { id: parseInt(id) } })
  return NextResponse.json({ ok: true })
}
