import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import ProductFormClient from './ProductFormClient'

export default async function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await prisma.product.findUnique({ where: { id: parseInt(id) } })
  if (!product) return notFound()
  return <ProductFormClient product={product} />
}
