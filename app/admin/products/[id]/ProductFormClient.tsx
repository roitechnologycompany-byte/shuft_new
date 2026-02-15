'use client'

import ProductForm from '../ProductForm'

export default function ProductFormClient({ product }: { product: Record<string, unknown> }) {
  return <ProductForm initial={product as Parameters<typeof ProductForm>[0]['initial']} />
}
