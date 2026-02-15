import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Shuft SFF-600 — напольно-потолочный фанкойл 6 кВт | Цена 89 000 ₽',
  description: 'SFF-600 — напольно-потолочный фанкойл 6 кВт для помещений до 60 м². Монтаж на пол или потолок, уровень шума 34 дБА. Официальный дилер Shuft в Москве. Монтаж за 1–3 дня.',
  alternates: { canonical: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-600' },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Напольно-потолочный фанкойл Shuft SFF-600',
  brand: { '@type': 'Brand', name: 'Shuft' },
  description: 'Напольно-потолочный фанкойл мощностью 6.0 кВт для помещений до 60 м². Универсальная установка: на пол или потолок. Уровень шума 34 дБА.',
  sku: 'SFF-600',
  mpn: 'SFF-600',
  offers: {
    '@type': 'Offer',
    url: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-600/',
    priceCurrency: 'RUB',
    price: '89000',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '6' },
}

const specs = [
  { label: 'Тип', value: 'Напольно-потолочный' },
  { label: 'Мощность охлаждения', value: '6.0 кВт' },
  { label: 'Мощность обогрева', value: '8.2 кВт' },
  { label: 'Расход воздуха', value: '1 200 м³/ч' },
  { label: 'Уровень шума', value: '34 дБА' },
  { label: 'Площадь помещения', value: 'до 60 м²' },
  { label: 'Вариант монтажа', value: 'Напольный / Потолочный' },
  { label: 'Количество скоростей', value: '3' },
  { label: 'Управление', value: 'ИК-пульт в комплекте' },
  { label: 'Потребление электроэнергии', value: '100–200 Вт' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Производитель', value: 'Shuft (Россия)' },
  { label: 'Артикул', value: 'SFF-600' },
]

const kit = [
  'Фанкойл Shuft SFF-600 (внутренний блок)',
  'ИК-пульт управления',
  'Кронштейны для напольной установки',
  'Кронштейны для потолочной установки',
  'Комплект крепежа',
  'Дренажный шланг (1.5 м)',
  'Воздушный фильтр',
  'Руководство по эксплуатации (рус.)',
  'Гарантийный талон (3 года)',
]

export default function SFF600Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Каталог', href: '/catalog' },
          { name: 'Фанкойлы', href: '/catalog/fankoily' },
          { name: 'Напольно-потолочные', href: '/catalog/fankoily/napolno-potolochnye' },
          { name: 'SFF-600' },
        ]} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2">
            <div className="mb-2">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">Напольно-потолочный фанкойл</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shuft SFF-600</h1>
            <p className="text-gray-600 mb-6">Напольно-потолочный фанкойл 6.0 кВт — флагманская модель для офисов, торговых залов и больших помещений до 60 м²</p>
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center mb-6 text-gray-400 text-lg">
              [Фото напольно-потолочного фанкойла SFF-600]
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
              <div className="font-semibold text-green-800 mb-1">Универсальный монтаж</div>
              <p className="text-sm text-green-700">SFF-600 устанавливается как на пол, так и на потолок — без дополнительных затрат. Оба комплекта кронштейнов входят в поставку.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { icon: '❄️', label: 'Охлаждение', value: '6.0 кВт' },
                { icon: '🔇', label: 'Шум', value: '34 дБА' },
                { icon: '💨', label: 'Воздух', value: '1 200 м³/ч' },
                { icon: '📐', label: 'Площадь', value: 'до 60 м²' },
              ].map((s, i) => (
                <div key={i} className="bg-green-50 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                  <div className="font-bold text-gray-900 text-sm">{s.value}</div>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Технические характеристики</h2>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <tbody>
                  {specs.map((s, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 border border-gray-200 font-medium text-gray-700 w-1/2">{s.label}</td>
                      <td className="p-3 border border-gray-200 text-gray-900">{s.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Комплект поставки</h2>
            <ul className="space-y-2 mb-8">
              {kit.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500">✓</span> {item}
                </li>
              ))}
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
              <h3 className="font-bold text-gray-900 mb-3">Сравнение напольно-потолочных моделей SFF</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-green-600 text-white">
                      <th className="p-2 text-left">Модель</th>
                      <th className="p-2 text-left">Мощность</th>
                      <th className="p-2 text-left">Площадь</th>
                      <th className="p-2 text-left">Шум</th>
                      <th className="p-2 text-left">Цена</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'SFF-300', power: '3.0 кВт', area: 'до 30 м²', noise: '30 дБА', price: '58 200 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-300', current: false },
                      { name: 'SFF-400', power: '4.0 кВт', area: 'до 40 м²', noise: '32 дБА', price: '68 000 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-400', current: false },
                      { name: 'SFF-600', power: '6.0 кВт', area: 'до 60 м²', noise: '34 дБА', price: '89 000 ₽', href: '#', current: true },
                    ].map((m, i) => (
                      <tr key={i} className={m.current ? 'bg-green-100 font-bold' : i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-2 border border-gray-200">{m.current ? m.name + ' ★' : <Link href={m.href} className="text-green-700 hover:underline">{m.name}</Link>}</td>
                        <td className="p-2 border border-gray-200">{m.power}</td>
                        <td className="p-2 border border-gray-200">{m.area}</td>
                        <td className="p-2 border border-gray-200">{m.noise}</td>
                        <td className="p-2 border border-gray-200 text-green-700 font-bold">{m.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white border-2 border-green-200 rounded-2xl p-5 shadow-sm">
                <div className="text-3xl font-bold text-green-700 mb-1">89 000 ₽</div>
                <div className="text-green-600 text-sm font-medium mb-4">✓ В наличии на складе</div>
                <a href="tel:+74951203375" className="btn-primary w-full text-center block mb-3">📞 +7 (495) 120-33-75</a>
                <Link href="/contacts#form" className="btn-secondary w-full text-center block">Оставить заявку</Link>
                <div className="mt-4 pt-4 border-t space-y-2 text-xs text-gray-500">
                  <div>✓ Гарантия 3 года</div>
                  <div>✓ Монтаж за 1–3 дня</div>
                  <div>✓ Официальный дилер Shuft</div>
                  <div>✓ Бесплатный подбор инженером</div>
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 text-sm">
                <div className="font-bold text-gray-900 mb-2">Нужна помощь с подбором?</div>
                <p className="text-gray-700 text-xs mb-3">Инженер подберёт модель под вашу площадь и бюджет бесплатно.</p>
                <Link href="/calc/fankoil" className="text-green-700 font-medium hover:underline">Калькулятор подбора →</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
