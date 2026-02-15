import type { Metadata } from 'next'
import CatalogSearch from './CatalogSearch'

export const metadata: Metadata = {
  title: 'Поиск фанкойлов Shuft — по мощности, типу, цене | Shuft.Online',
  description: 'Подберите фанкойл Shuft по мощности, типу, площади помещения и цене. Фильтры и сортировка.',
  alternates: { canonical: 'https://shuft.online/catalog/search/' },
}

export default function SearchPage() {
  return <CatalogSearch />
}
