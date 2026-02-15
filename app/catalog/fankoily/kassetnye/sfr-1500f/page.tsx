import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Shuft SFR-1500F — кассетный фанкойл 10 кВт | Цена 112 000 ₽',
  description: 'SFR-1500F — мощный кассетный фанкойл 10 кВт для торговых залов и open-space 70–100 м². Монтаж в потолок Armstrong. Гарантия 3 года.',
  alternates: {
    canonical: 'https://shuft.online/catalog/fankoily/kassetnye/sfr-1500f/',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Кассетный фанкойл Shuft SFR-1500F',
  brand: { '@type': 'Brand', name: 'Shuft' },
  description: 'Кассетный фанкойл мощностью 10 кВт для помещений 70–100 м². Монтаж в потолок Armstrong 600×600 мм.',
  sku: 'SFR-1500F',
  offers: {
    '@type': 'Offer',
    url: 'https://shuft.online/catalog/fankoily/kassetnye/sfr-1500f/',
    priceCurrency: 'RUB',
    price: '112000',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '11' },
}

const specs = [
  { label: 'Тип', value: 'Кассетный 4-поточный' },
  { label: 'Мощность охлаждения', value: '10 кВт' },
  { label: 'Мощность обогрева', value: '13.5 кВт' },
  { label: 'Расход воздуха', value: '1 800 м³/ч' },
  { label: 'Уровень шума', value: '36 дБА' },
  { label: 'Площадь помещения', value: '70–100 м²' },
  { label: 'Монтажный размер', value: '600 × 600 мм (Armstrong)' },
  { label: 'Количество скоростей', value: '3' },
  { label: 'Управление', value: 'Проводной пульт / термостат' },
  { label: 'Вес', value: '25 кг' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Артикул', value: 'SFR-1500F' },
]

const kit = [
  'Кассетный фанкойл SFR-1500F',
  'Декоративная панель 600×600 мм',
  'Автоматические жалюзи (4 направления)',
  'Проводной пульт управления',
  'Дренажная помпа',
  'Воздушный фильтр',
  'Комплект крепежа',
  'Руководство по эксплуатации',
  'Гарантийный талон (3 года)',
]

export default function SFR1500FPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Каталог', href: '/catalog' },
          { name: 'Фанкойлы', href: '/catalog/fankoily' },
          { name: 'Кассетные', href: '/catalog/fankoily/kassetnye' },
          { name: 'SFR-1500F' },
        ]} />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          <div className="lg:col-span-2">
            <div className="mb-2">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">Кассетный фанкойл</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shuft SFR-1500F</h1>
            <p className="text-gray-600 mb-6">Мощный кассетный фанкойл 10 кВт — для торговых залов и open-space 70–100 м²</p>
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center mb-6 text-gray-400">
              [Фото кассетного фанкойла SFR-1500F]
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {[
                { icon: '❄️', label: 'Охлаждение', value: '10 кВт' },
                { icon: '🔊', label: 'Шум', value: '36 дБА' },
                { icon: '💨', label: 'Воздух', value: '1 800 м³/ч' },
                { icon: '📐', label: 'Плитка', value: '600×600 мм' },
              ].map((s, i) => (
                <div key={i} className="bg-blue-50 rounded-xl p-3 text-center">
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
              <div className="bg-white border-2 border-blue-200 rounded-2xl p-5 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">112 000 ₽</div>
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
                <h3 className="font-bold text-gray-900 mb-3 text-sm">Другие кассетные модели</h3>
                {[
                  { name: 'SFR-950F', power: '5 кВт', price: '72 450 ₽', href: '/catalog/fankoily/kassetnye/sfr-950f' },
                  { name: 'SFR-1200F', power: '7.5 кВт', price: '89 200 ₽', href: '/catalog/fankoily/kassetnye/sfr-1200f' },
                ].map((m, i) => (
                  <Link key={i} href={m.href} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0 hover:text-blue-600 text-sm">
                    <div>
                      <div className="font-medium">{m.name}</div>
                      <div className="text-gray-500 text-xs">{m.power}</div>
                    </div>
                    <div className="font-bold text-blue-600">{m.price}</div>
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
