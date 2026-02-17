import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Термостаты для фанкойлов Shuft — цены 2026 | Купить в Москве',
  description: 'Проводные и беспроводные термостаты для управления фанкойлами Shuft. Сенсорные, умный дом, Wi-Fi. Официальный дилер в Москве.',
  alternates: { canonical: 'https://shuft.online/catalog/aksessuary/termostaty/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog/' },
    { '@type': 'ListItem', position: 3, name: 'Аксессуары', item: 'https://shuft.online/catalog/aksessuary/' },
    { '@type': 'ListItem', position: 4, name: 'Термостаты', item: 'https://shuft.online/catalog/aksessuary/termostaty/' },
  ],
}

const products = [
  {
    name: 'Термостат Shuft TC-100',
    type: 'Проводной базовый',
    display: 'Цифровой LCD',
    control: 'Кнопочный',
    wifi: false,
    compatible: 'Все модели Shuft',
    price: '3 200 ₽',
    inStock: true,
  },
  {
    name: 'Термостат Shuft TC-200T',
    type: 'Проводной сенсорный',
    display: 'Цветной TFT 3.5"',
    control: 'Сенсорный экран',
    wifi: false,
    compatible: 'Все модели Shuft',
    price: '5 800 ₽',
    inStock: true,
  },
  {
    name: 'Термостат Shuft TC-300W',
    type: 'Wi-Fi сенсорный',
    display: 'Цветной TFT 4"',
    control: 'Сенсорный + приложение',
    wifi: true,
    compatible: 'Все модели Shuft',
    price: '8 900 ₽',
    inStock: true,
  },
  {
    name: 'Термостат Shuft TC-400BMS',
    type: 'BMS / Умный дом',
    display: 'Сенсорный 5"',
    control: 'Modbus / BACnet + приложение',
    wifi: true,
    compatible: 'Все модели Shuft',
    price: '14 500 ₽',
    inStock: false,
  },
]

export default function TermostatyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[
        { name: 'Главная', href: '/' },
        { name: 'Каталог', href: '/catalog' },
        { name: 'Аксессуары', href: '/catalog/aksessuary' },
        { name: 'Термостаты' },
      ]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Термостаты для фанкойлов Shuft</h1>
      <p className="text-gray-600 text-lg mb-10 max-w-3xl">
        Проводные и беспроводные термостаты для управления фанкойлами Shuft. От базовых моделей
        с LCD-дисплеем до Wi-Fi термостатов с управлением со смартфона и интеграцией в умный дом.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-gray-500 bg-opacity-50 text-xs px-2 py-1 rounded-full">{p.type}</span>
                <div className="flex items-center gap-2">
                  {p.wifi && <span className="text-blue-300 text-xs">Wi-Fi</span>}
                  {p.inStock
                    ? <span className="text-green-300 text-xs">В наличии</span>
                    : <span className="text-yellow-300 text-xs">Под заказ</span>}
                </div>
              </div>
              <h2 className="font-bold text-xl">{p.name}</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[
                  { label: 'Дисплей', value: p.display },
                  { label: 'Управление', value: p.control },
                  { label: 'Wi-Fi', value: p.wifi ? 'Есть' : 'Нет' },
                  { label: 'Совместимость', value: p.compatible },
                ].map((spec, j) => (
                  <div key={j} className="bg-gray-50 rounded-lg p-3">
                    <div className="text-xs text-gray-500">{spec.label}</div>
                    <div className="font-medium text-gray-900 text-sm">{spec.value}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between border-t pt-4">
                <div className="text-2xl font-bold text-gray-700">{p.price}</div>
                <Link href="/contacts#form" className="bg-gray-700 text-white px-5 py-2 rounded-xl font-medium hover:bg-gray-800 transition-colors text-sm">
                  Заказать
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-12">
        <h2 className="font-bold text-xl text-gray-900 mb-4">Как выбрать термостат</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 pr-4 text-gray-600">Модель</th>
                <th className="text-left py-3 pr-4 text-gray-600">Подходит для</th>
                <th className="text-left py-3 text-gray-600">Особенность</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { model: 'TC-100', for: 'Жилые и офисные помещения', feat: 'Простота, надёжность' },
                { model: 'TC-200T', for: 'Офисы, рестораны', feat: 'Удобный сенсорный экран' },
                { model: 'TC-300W', for: 'Частные дома, апартаменты', feat: 'Управление со смартфона' },
                { model: 'TC-400BMS', for: 'БЦ, гостиницы, умный дом', feat: 'Интеграция Modbus/BACnet' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="py-3 pr-4 font-medium text-gray-900">{row.model}</td>
                  <td className="py-3 pr-4 text-gray-700">{row.for}</td>
                  <td className="py-3 text-gray-700">{row.feat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-gray-800 rounded-3xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Подберём термостат к вашему фанкойлу</h2>
        <p className="text-gray-300 mb-6">Уточните модель фанкойла и способ управления</p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="tel:+74951203375" className="bg-white text-gray-800 font-bold px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors">
            +7 (495) 120-33-75
          </a>
          <Link href="/contacts#form" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl hover:bg-orange-600 transition-colors">
            Оформить заказ
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}
