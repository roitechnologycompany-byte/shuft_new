import type { Metadata } from 'next'
import CompareClient from './CompareClient'

export const metadata: Metadata = {
  title: 'Сравнение фанкойлов Shuft — до 5 моделей | Shuft.Online',
  description: 'Сравните до 5 моделей фанкойлов Shuft в одной таблице по мощности, шуму, площади, цене и другим характеристикам.',
  alternates: { canonical: 'https://shuft.online/catalog/compare/' },
  robots: { index: false },
}

export default function ComparePage() {
  return <CompareClient />
}
