import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import ProjectFormClient from './ProjectFormClient'

export default async function EditProject({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const project = await prisma.project.findUnique({ where: { id: parseInt(id) } })
  if (!project) return notFound()
  return <ProjectFormClient project={project} />
}
