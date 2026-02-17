import type { Metadata } from 'next'
import CalcFankoilClient from './CalcFankoilClient'

export const metadata: Metadata = {
  title: 'Калькулятор подбора фанкойла Shuft — расчёт мощности онлайн',
  description: 'Бесплатный онлайн-калькулятор подбора фанкойла Shuft по площади и типу помещения. Введите параметры — получите рекомендации по моделям с ценами.',
  alternates: { canonical: 'https://shuft.online/calc/fankoil/' },
  openGraph: {
    title: 'Калькулятор подбора фанкойла Shuft',
    description: 'Подберите фанкойл Shuft по площади помещения онлайн. Бесплатно, за 30 секунд.',
    url: 'https://shuft.online/calc/fankoil/',
    type: 'website',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Калькуляторы', item: 'https://shuft.online/calc/' },
    { '@type': 'ListItem', position: 3, name: 'Калькулятор фанкойла', item: 'https://shuft.online/calc/fankoil/' },
  ],
}

export default function CalcFankoilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CalcFankoilClient />
    </>
  )
}
