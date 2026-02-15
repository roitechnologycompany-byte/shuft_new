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

export default function CalcFankoilPage() {
  return <CalcFankoilClient />
}
