import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import BlogFormClient from './BlogFormClient'

export default async function EditBlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await prisma.blogPost.findUnique({ where: { id: parseInt(id) } })
  if (!post) return notFound()
  return <BlogFormClient post={post} />
}
