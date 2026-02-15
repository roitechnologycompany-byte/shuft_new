import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Кассетный фанкойл Shuft SFR-950F — купить в Москве | 72 450 ₽',
  description: 'SFR-950F — кассетный фанкойл 5 кВт для офисов до 50 м². Встраивается в потолок, 4-сторонняя подача воздуха. Гарантия 3 года, монтаж за 1–3 дня.',
  alternates: { canonical: 'https://shuft.online/catalog/fankoily/kassetnye/sfr-950f/' },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Кассетный фанкойл Shuft SFR-950F',
  brand: { '@type': 'Brand', name: 'Shuft' },
  description: 'Кассетный фанкойл мощностью 5.0 кВт для офисов и помещений до 50 м². 4-сторонняя подача воздуха, встраивается в подвесной потолок.',
  sku: 'SFR-950F',
  mpn: 'SFR-950F',
  offers: {
    '@type': 'Offer',
    url: 'https://shuft.online/catalog/fankoily/kassetnye/sfr-950f/',
    priceCurrency: 'RUB',
    price: '72450',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '24',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog' },
    { '@type': 'ListItem', position: 3, name: 'Фанкойлы', item: 'https://shuft.online/catalog/fankoily' },
    { '@type': 'ListItem', position: 4, name: 'Кассетные', item: 'https://shuft.online/catalog/fankoily/kassetnye' },
    { '@type': 'ListItem', position: 5, name: 'SFR-950F', item: 'https://shuft.online/catalog/fankoily/kassetnye/sfr-950f' },
  ],
}

const specs = [
  { label: 'Тип', value: 'Кассетный фанкойл (4-сторонняя раздача)' },
  { label: 'Мощность охлаждения', value: '5.0 кВт' },
  { label: 'Мощность обогрева', value: '7.5 кВт' },
  { label: 'Расход воздуха', value: '950 м³/ч' },
  { label: 'Уровень шума', value: '30 дБА' },
  { label: 'Площадь помещения', value: 'до 50 м²' },
  { label: 'Управление', value: 'ИК-пульт в комплекте' },
  { label: 'Габариты (Ш×В×Г)', value: '570 × 570 × 280 мм' },
  { label: 'Вес', value: '19 кг' },
  { label: 'Монтаж', value: 'Встраивается в подвесной потолок' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Производитель', value: 'Shuft (Россия)' },
  { label: 'Артикул', value: 'SFR-950F' },
]

const kit = [
  'Фанкойл Shuft SFR-950F (внутренний блок)',
  'Декоративная панель 4-стороннего выдува',
  'ИК-пульт управления',
  'Комплект крепежа',
  'Дренажный шланг (1.5 м)',
  'Воздушный фильтр',
  'Руководство по эксплуатации (рус.)',
  'Гарантийный талон (3 года)',
]

const faqs = [
  { q: 'Какой тип потолка подходит для монтажа?', a: 'Фанкойл SFR-950F монтируется в любой подвесной потолок: Armstrong, гипсокартон, натяжной. Стандартный монтажный проём 570×570 мм.' },
  { q: 'Как работает 4-сторонняя раздача воздуха?', a: 'Декоративная панель равномерно распределяет воздушный поток на 4 стороны, обеспечивая равномерный микроклимат без застойных зон.' },
  { q: 'Нужен ли отдельный дренажный насос?', a: 'При монтаже выше уровня дренажной трассы рекомендуется дренажный насос. В противном случае дренаж организуется самотёком.' },
  { q: 'Какой чиллер нужен?', a: 'Подходит любой чиллер от 6 кВт. Рекомендуем комплектные решения Shuft — подберём оптимальный вариант.' },
  { q: 'Можно ли управлять с телефона?', a: 'Базовое управление через пульт. Для управления со смартфона используйте термостаты Shuft серии Smart с Wi-Fi модулем.' },
]

const reviews = [
  { author: 'Дмитрий С.', city: 'Москва', date: 'Январь 2026', rating: 5, text: 'Установили в торговом зале 48 м². Воздух распределяется равномерно, шума почти нет. Отличная покупка!' },
  { author: 'Наталья К.', city: 'Подмосковье', date: 'Декабрь 2025', rating: 5, text: 'Кассетник в переговорную — идеальное решение. Незаметен в потолке, работает тихо.' },
  { author: 'Сергей Р.', city: 'Москва', date: 'Ноябрь 2025', rating: 4, text: 'Хороший фанкойл. Монтаж занял полдня. Уже год работает без нареканий.' },
]

export default function SFR950FPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Каталог', href: '/catalog' },
          { name: 'Фанкойлы', href: '/catalog/fankoily' },
          { name: 'Кассетные', href: '/catalog/fankoily/kassetnye' },
          { name: 'SFR-950F' },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Gallery */}
          <div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="text-8xl mb-4">❄️</div>
                <div className="font-bold text-2xl text-gray-700">Shuft SFR-950F</div>
                <div className="text-gray-500">Кассетный фанкойл</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['Вид снизу', 'Панель выдува', 'Монтаж'].map((view, i) => (
                <div key={i} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-xs text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors">
                  {view}
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Хит продаж</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 5 ? 'text-yellow-400 text-xl' : 'text-yellow-200 text-xl'}>★</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">4.8/5 (24 отзыва)</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Кассетный фанкойл Shuft SFR-950F — купить в Москве</h1>
            <div className="text-gray-500 text-sm mb-6">Артикул: SFR-950F | Производитель: Shuft (Россия)</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-blue-600">72 450 ₽</div>
              <div className="text-gray-400 text-sm">включая НДС</div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-2 rounded-lg font-medium">
                <span>✓</span> В наличии
              </span>
              <span className="text-gray-500 text-sm">Доставка за 24 часа</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { label: 'Охлаждение', value: '5.0 кВт' },
                { label: 'Шум', value: '30 дБА' },
                { label: 'Площадь', value: 'до 50 м²' },
                { label: 'Гарантия', value: '3 года' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4">
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</div>
                  <div className="font-bold text-gray-900 text-lg">{s.value}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-6">
              <a href="tel:+74951203375" className="btn-accent w-full justify-center text-lg py-4">
                Заказать консультацию
              </a>
              <Link href="/contacts#form" className="btn-secondary w-full justify-center py-3">
                Оставить заявку
              </Link>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 text-sm text-gray-700">
              <div className="font-semibold text-gray-900 mb-2">Гарантии покупки:</div>
              <ul className="space-y-1">
                <li>✓ Официальный дилер Shuft — оригинальное оборудование</li>
                <li>✓ Гарантия производителя 3 года</li>
                <li>✓ Монтаж лицензированными специалистами за 1–3 дня</li>
                <li>✓ Техподдержка 24/7</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Описание</h2>
              <p className="text-gray-700 mb-4">
                Кассетный фанкойл Shuft SFR-950F — профессиональное климатическое решение для офисов,
                торговых залов и помещений площадью до 50 м². Монтируется в стандартный подвесной потолок,
                занимая минимум пространства и не нарушая интерьер.
              </p>
              <p className="text-gray-700 mb-4">
                Четырёхсторонняя раздача воздуха обеспечивает равномерный микроклимат без застойных зон.
                Фанкойл работает совместно с чиллером, обеспечивая эффективное охлаждение летом и обогрев зимой.
              </p>
              <h3 className="font-bold text-gray-900 mb-3">Применение:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Офисы и коворкинги (до 50 м²)', 'Торговые залы и магазины', 'Переговорные комнаты', 'Гостиницы и отели', 'Рестораны и кафе', 'Медицинские учреждения'].map((app, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">•</span> {app}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Технические характеристики</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map((spec, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="py-3 px-4 text-gray-500 font-medium w-1/2">{spec.label}</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Kit */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Комплектация</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kit.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <span className="text-green-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Частые вопросы по модели</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <details key={i} className="border border-gray-200 rounded-xl group">
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-900 hover:text-blue-600">
                      <span>{faq.q}</span>
                      <span className="text-blue-600 group-open:rotate-180 transition-transform ml-2">▼</span>
                    </summary>
                    <div className="px-4 pb-4 text-gray-600">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Отзывы покупателей</h2>
              <div className="space-y-4">
                {reviews.map((r, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold text-gray-900">{r.author}</span>
                        <span className="text-gray-400 text-sm ml-2">— {r.city}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(r.rating)].map((_, si) => (
                            <span key={si} className="text-yellow-400">★</span>
                          ))}
                        </div>
                        <span className="text-gray-400 text-sm">{r.date}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-blue-600 text-white rounded-2xl p-6 sticky top-20">
              <h3 className="font-bold text-xl mb-4">Официальный дилер Shuft</h3>
              <ul className="space-y-3 text-sm mb-6">
                {['Сертификаты от производителя', 'Прямые поставки с завода', 'Гарантия 3 года', 'Техподдержка 24/7', 'Склад в Москве', 'Монтаж за 1–3 дня'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-300">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="tel:+74951203375" className="block text-center bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors mb-3">
                +7 (495) 120-33-75
              </a>
              <Link href="/contacts#form" className="block text-center bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors">
                Оставить заявку
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Похожие модели</h3>
              <div className="space-y-3">
                {[
                  { name: 'SFR-1200F', power: '7.5 кВт', price: '89 900 ₽', href: '/catalog/fankoily/kassetnye/sfr-1200f' },
                  { name: 'SFR-1500F', power: '10.0 кВт', price: '118 500 ₽', href: '/catalog/fankoily/kassetnye/sfr-1500f' },
                  { name: 'SFH-500 V3 (настенный)', power: '4.51 кВт', price: '56 960 ₽', href: '/catalog/fankoily/nastennye/sfh-500-v3' },
                ].map((m, i) => (
                  <Link key={i} href={m.href} className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-shadow">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{m.name}</div>
                      <div className="text-gray-500 text-xs">{m.power}</div>
                    </div>
                    <div className="text-blue-600 font-semibold text-sm">{m.price}</div>
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
