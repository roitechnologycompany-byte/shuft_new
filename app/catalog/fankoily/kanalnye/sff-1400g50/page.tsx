import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Shuft SFF-1400G50 — канальный фанкойл 14 кВт | Цена 145 000 ₽',
  description: 'SFF-1400G50 — высоконапорный канальный фанкойл 14 кВт для скрытого монтажа в помещениях 100–140 м². Расход воздуха 2 500 м³/ч. Гарантия 3 года.',
  alternates: {
    canonical: 'https://shuft.online/catalog/fankoily/kanalnye/sff-1400g50/',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Канальный фанкойл Shuft SFF-1400G50',
  brand: { '@type': 'Brand', name: 'Shuft' },
  description: 'Высоконапорный канальный фанкойл мощностью 14 кВт для скрытого монтажа в помещениях 100–140 м². Расход воздуха 2 500 м³/ч.',
  sku: 'SFF-1400G50',
  offers: {
    '@type': 'Offer',
    url: 'https://shuft.online/catalog/fankoily/kanalnye/sff-1400g50/',
    priceCurrency: 'RUB',
    price: '145000',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '8' },
}

const specs = [
  { label: 'Тип', value: 'Канальный высоконапорный (скрытый монтаж)' },
  { label: 'Мощность охлаждения', value: '14.0 кВт' },
  { label: 'Мощность обогрева', value: '18.0 кВт' },
  { label: 'Расход воздуха', value: '2 500 м³/ч' },
  { label: 'Уровень шума', value: '36 дБА' },
  { label: 'Площадь помещения', value: '100–140 м²' },
  { label: 'Количество скоростей', value: '3' },
  { label: 'Подключение воды', value: '2-трубная / 4-трубная система' },
  { label: 'Управление', value: 'Проводной пульт / термостат' },
  { label: 'Вес', value: '32 кг' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Артикул', value: 'SFF-1400G50' },
]

const kit = [
  'Канальный фанкойл SFF-1400G50',
  'Монтажные кронштейны',
  'Проводной пульт управления',
  'Воздушный фильтр',
  'Руководство по эксплуатации',
  'Гарантийный талон (3 года)',
]

export default function SFF1400G50Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Каталог', href: '/catalog' },
          { name: 'Фанкойлы', href: '/catalog/fankoily' },
          { name: 'Канальные', href: '/catalog/fankoily/kanalnye' },
          { name: 'SFF-1400G50' },
        ]} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2">
            <div className="mb-2">
              <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">Канальный высоконапорный фанкойл</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shuft SFF-1400G50</h1>
            <p className="text-gray-600 mb-6">Высоконапорный канальный фанкойл 14 кВт со скрытым монтажом — флагманское решение для крупных торговых, офисных и производственных помещений 100–140 м²</p>
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center mb-6 text-gray-400">
              [Фото канального фанкойла SFF-1400G50]
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { icon: '❄️', label: 'Охлаждение', value: '14.0 кВт' },
                { icon: '🔊', label: 'Шум', value: '36 дБА' },
                { icon: '💨', label: 'Воздух', value: '2 500 м³/ч' },
                { icon: '📏', label: 'Площадь', value: '100–140 м²' },
              ].map((s, i) => (
                <div key={i} className="bg-green-50 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">{s.icon}</div>
                  <div className="text-xs text-gray-500">{s.label}</div>
                  <div className="font-bold text-gray-900 text-sm">{s.value}</div>
                </div>
              ))}
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Характеристики</h2>
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
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white border-2 border-green-200 rounded-2xl p-5 shadow-sm">
                <div className="text-3xl font-bold text-green-600 mb-1">145 000 ₽</div>
                <div className="text-green-600 text-sm font-medium mb-4">✓ В наличии на складе</div>
                <a href="tel:+74951203375" className="btn-primary w-full text-center block mb-3">📞 +7 (495) 120-33-75</a>
                <Link href="/contacts#form" className="btn-secondary w-full text-center block">Оставить заявку</Link>
                <div className="mt-4 pt-4 border-t space-y-2 text-xs text-gray-500">
                  <div>✓ Гарантия 3 года</div>
                  <div>✓ Монтаж за 1–3 дня</div>
                  <div>✓ Официальный дилер Shuft</div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Другие канальные модели</h3>
                {[
                  { name: 'SFF-800G50', power: '8 кВт', price: '89 000 ₽', href: '/catalog/fankoily/kanalnye/sff-800g50' },
                  { name: 'SFF-500G50', power: '5 кВт', price: '64 000 ₽', href: '/catalog/fankoily/kanalnye/sff-500g50' },
                ].map((m, i) => (
                  <Link key={i} href={m.href} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0 hover:text-green-600 text-sm">
                    <div>
                      <div className="font-medium">{m.name}</div>
                      <div className="text-gray-500 text-xs">{m.power}</div>
                    </div>
                    <div className="font-bold text-green-600">{m.price}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
