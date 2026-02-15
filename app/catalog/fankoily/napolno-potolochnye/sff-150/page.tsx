import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Напольно-потолочный фанкойл Shuft SFF-150 — купить в Москве | 43 930 ₽',
  description: 'SFF-150 — напольно-потолочный фанкойл 1.6 кВт для помещений до 16 м². Два режима монтажа: на полу или на потолке. Гарантия 3 года, монтаж за 1–3 дня.',
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Напольно-потолочный фанкойл Shuft SFF-150',
  brand: { '@type': 'Brand', name: 'Shuft' },
  description: 'Напольно-потолочный фанкойл 1.6 кВт для небольших помещений до 16 м². Гибкий монтаж: на полу или на потолке.',
  sku: 'SFF-150',
  mpn: 'SFF-150',
  offers: {
    '@type': 'Offer',
    url: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-150/',
    priceCurrency: 'RUB',
    price: '43930',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '15',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog' },
    { '@type': 'ListItem', position: 3, name: 'Фанкойлы', item: 'https://shuft.online/catalog/fankoily' },
    { '@type': 'ListItem', position: 4, name: 'Напольно-потолочные', item: 'https://shuft.online/catalog/fankoily/napolno-potolochnye' },
    { '@type': 'ListItem', position: 5, name: 'SFF-150', item: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-150' },
  ],
}

const specs = [
  { label: 'Тип', value: 'Напольно-потолочный фанкойл' },
  { label: 'Мощность охлаждения', value: '1.6 кВт' },
  { label: 'Мощность обогрева', value: '2.4 кВт' },
  { label: 'Расход воздуха', value: '280 м³/ч' },
  { label: 'Уровень шума', value: '24 дБА' },
  { label: 'Площадь помещения', value: 'до 16 м²' },
  { label: 'Режимы монтажа', value: 'Напольный / Потолочный' },
  { label: 'Управление', value: 'ИК-пульт в комплекте' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Производитель', value: 'Shuft (Россия)' },
  { label: 'Артикул', value: 'SFF-150' },
]

const kit = [
  'Напольно-потолочный фанкойл Shuft SFF-150',
  'ИК-пульт управления',
  'Комплект для напольного монтажа',
  'Комплект для потолочного монтажа',
  'Дренажный шланг (1.5 м)',
  'Воздушный фильтр',
  'Руководство по эксплуатации (рус.)',
  'Гарантийный талон (3 года)',
]

const faqs = [
  { q: 'В чём преимущество напольно-потолочного фанкойла?', a: 'Гибкость монтажа: один и тот же агрегат можно установить на полу у стены или на потолке. Идеально для помещений с панорамным остеклением — напольный монтаж создаёт тепловую завесу у окна.' },
  { q: 'Насколько тихо работает SFF-150?', a: 'Уровень шума 24 дБА — это очень тихо, сравнимо с тихой библиотекой. Подходит для спален и детских.' },
  { q: 'Можно ли переставить с пола на потолок?', a: 'Да, в комплекте идут оба вида крепежа. Перемонтаж занимает 2–4 часа.' },
  { q: 'Для каких помещений подходит?', a: 'SFF-150 — самая компактная модель серии, для небольших комнат 10–16 м²: спальни, кабинеты, небольшие офисы.' },
  { q: 'Работает ли только на охлаждение?', a: 'Нет, фанкойл работает и на охлаждение (летом), и на обогрев (зимой). Всё зависит от подключённого чиллера или котла.' },
]

const reviews = [
  { author: 'Марина Ф.', city: 'Москва', date: 'Февраль 2026', rating: 5, text: 'Поставила в спальню на пол. Очень тихий! Даже не слышу его ночью. Охлаждение отличное.' },
  { author: 'Евгений Т.', city: 'Пушкино', date: 'Январь 2026', rating: 4, text: 'Компактный и мощный для 14 м². Монтаж простой. Рекомендую для небольших комнат.' },
  { author: 'Ксения В.', city: 'Москва', date: 'Декабрь 2025', rating: 5, text: 'Отличный выбор для детской! Тихо, эффективно, красиво выглядит у стены.' },
]

export default function SFF150Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Каталог', href: '/catalog' },
          { name: 'Фанкойлы', href: '/catalog/fankoily' },
          { name: 'Напольно-потолочные', href: '/catalog/fankoily/napolno-potolochnye' },
          { name: 'SFF-150' },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="text-8xl mb-4">❄️</div>
                <div className="font-bold text-2xl text-gray-700">Shuft SFF-150</div>
                <div className="text-gray-500">Напольно-потолочный фанкойл</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['Напольный монтаж', 'Потолочный монтаж', 'Схема подключения'].map((view, i) => (
                <div key={i} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-xs text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors text-center px-1">
                  {view}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 5 ? 'text-yellow-400 text-xl' : 'text-yellow-200 text-xl'}>★</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">4.7/5 (15 отзывов)</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Напольно-потолочный фанкойл Shuft SFF-150 — купить в Москве</h1>
            <div className="text-gray-500 text-sm mb-6">Артикул: SFF-150 | Производитель: Shuft (Россия)</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-blue-600">43 930 ₽</div>
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
                { label: 'Охлаждение', value: '1.6 кВт' },
                { label: 'Шум', value: '24 дБА' },
                { label: 'Площадь', value: 'до 16 м²' },
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
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Описание</h2>
              <p className="text-gray-700 mb-4">
                Напольно-потолочный фанкойл Shuft SFF-150 — компактное и универсальное решение для небольших
                помещений площадью до 16 м². Главное преимущество — два варианта монтажа: напольный у стены
                или потолочный, что даёт максимальную гибкость при обустройстве пространства.
              </p>
              <p className="text-gray-700 mb-4">
                Напольная установка у панорамных окон создаёт тепловую завесу, предотвращая запотевание
                стёкол и обеспечивая равномерный обогрев зимой. Уровень шума 24 дБА — самый тихий в серии.
              </p>
              <h3 className="font-bold text-gray-900 mb-3">Применение:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Спальни и детские (10–16 м²)', 'Кабинеты и небольшие офисы', 'Гостиничные номера', 'Помещения с панорамным остеклением', 'Серверные комнаты', 'Небольшие магазины'].map((app, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-blue-500">•</span> {app}
                  </li>
                ))}
              </ul>
            </div>

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
                  { name: 'SFF-300', power: '2.8 кВт', price: '51 200 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-300' },
                  { name: 'SFF-400', power: '3.5 кВт', price: '58 200 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-400' },
                  { name: 'SFF-300G50 (канальный)', power: '2.2 кВт', price: '42 180 ₽', href: '/catalog/fankoily/kanalnye/sff-300g50' },
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
