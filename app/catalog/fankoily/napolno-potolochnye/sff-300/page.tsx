import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Напольно-потолочный фанкойл Shuft SFF-300 — купить в Москве | 51 200 ₽',
  description: 'SFF-300 — напольно-потолочный фанкойл 2.8 кВт для помещений до 28 м². Хит продаж! Два варианта монтажа. Гарантия 3 года, монтаж за 1–3 дня.',
  alternates: { canonical: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-300/' },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Напольно-потолочный фанкойл Shuft SFF-300',
  brand: { '@type': 'Brand', name: 'Shuft' },
  description: 'Напольно-потолочный фанкойл 2.8 кВт для помещений до 28 м². Два варианта монтажа: напольный или потолочный.',
  sku: 'SFF-300',
  mpn: 'SFF-300',
  offers: {
    '@type': 'Offer',
    url: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-300/',
    priceCurrency: 'RUB',
    price: '51200',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '28',
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
    { '@type': 'ListItem', position: 5, name: 'SFF-300', item: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-300' },
  ],
}

const specs = [
  { label: 'Тип', value: 'Напольно-потолочный фанкойл' },
  { label: 'Мощность охлаждения', value: '2.8 кВт' },
  { label: 'Мощность обогрева', value: '4.2 кВт' },
  { label: 'Расход воздуха', value: '500 м³/ч' },
  { label: 'Уровень шума', value: '26 дБА' },
  { label: 'Площадь помещения', value: 'до 28 м²' },
  { label: 'Режимы монтажа', value: 'Напольный / Потолочный' },
  { label: 'Управление', value: 'ИК-пульт в комплекте' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Производитель', value: 'Shuft (Россия)' },
  { label: 'Артикул', value: 'SFF-300' },
]

const kit = [
  'Напольно-потолочный фанкойл Shuft SFF-300',
  'ИК-пульт управления',
  'Комплект для напольного монтажа',
  'Комплект для потолочного монтажа',
  'Дренажный шланг (1.5 м)',
  'Воздушный фильтр',
  'Руководство по эксплуатации (рус.)',
  'Гарантийный талон (3 года)',
]

const faqs = [
  { q: 'Почему SFF-300 — хит продаж?', a: 'Оптимальное сочетание мощности (2.8 кВт), тишины (26 дБА) и универсальности монтажа для помещений 18–28 м². Более 28 покупателей поставили оценку 4.9/5.' },
  { q: 'Чем напольный монтаж отличается от потолочного?', a: 'При напольном монтаже фанкойл стоит у стены и создаёт тепловую завесу у окон. При потолочном — подвешивается к потолку и равномерно распределяет воздух по всему помещению.' },
  { q: 'Подходит ли для помещений с высокими потолками?', a: 'При потолочном монтаже рекомендуется высота потолков до 3.5 м. При большей высоте нужна более мощная модель.' },
  { q: 'Можно ли использовать совместно с тёплым полом?', a: 'Да, фанкойл и тёплый пол отлично дополняют друг друга: тёплый пол — базовый обогрев, фанкойл — быстрый нагрев/охлаждение воздуха.' },
  { q: 'Как часто обслуживать?', a: 'Рекомендуется чистка фильтра каждые 3–6 месяцев, техническое обслуживание — раз в год. Выполняем по договору обслуживания.' },
]

const reviews = [
  { author: 'Артём К.', city: 'Москва', date: 'Февраль 2026', rating: 5, text: 'Хит продаж заслуженно! Тихий, мощный, универсальный. Поставил на потолок в гостиную — отлично работает.' },
  { author: 'Юлия Н.', city: 'Красногорск', date: 'Январь 2026', rating: 5, text: 'Очень довольна покупкой. Напольный монтаж у панорамных окон — тепло не уходит и конденсат не образуется.' },
  { author: 'Вадим О.', city: 'Москва', date: 'Декабрь 2025', rating: 4, text: 'Отличный фанкойл для офиса 25 м². Работает тихо, охлаждает быстро.' },
]

export default function SFF300Page() {
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
          { name: 'SFF-300' },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl aspect-square flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="text-8xl mb-4">❄️</div>
                <div className="font-bold text-2xl text-gray-700">Shuft SFF-300</div>
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
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Хит</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">4.9/5 (28 отзывов)</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Напольно-потолочный фанкойл Shuft SFF-300 — купить в Москве</h1>
            <div className="text-gray-500 text-sm mb-6">Артикул: SFF-300 | Производитель: Shuft (Россия)</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-blue-600">51 200 ₽</div>
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
                { label: 'Охлаждение', value: '2.8 кВт' },
                { label: 'Шум', value: '26 дБА' },
                { label: 'Площадь', value: 'до 28 м²' },
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
                Напольно-потолочный фанкойл Shuft SFF-300 — самая популярная модель серии. Мощность 2.8 кВт
                оптимальна для жилых и офисных помещений площадью до 28 м². Универсальный корпус позволяет
                установить агрегат в двух положениях: напольном или потолочном.
              </p>
              <p className="text-gray-700 mb-4">
                Напольный монтаж у внешних стен и окон обеспечивает тепловую завесу в зимнее время —
                холодный воздух не проникает в помещение, стёкла не запотевают. Уровень шума 26 дБА
                позволяет использовать в жилых помещениях без ущерба для комфорта.
              </p>
              <h3 className="font-bold text-gray-900 mb-3">Применение:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Гостиные и спальни (18–28 м²)', 'Офисы и кабинеты', 'Гостиничные номера', 'Помещения с панорамным остеклением', 'Магазины и шоурумы', 'Медицинские кабинеты'].map((app, i) => (
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
                  { name: 'SFF-150', power: '1.6 кВт', price: '43 930 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-150' },
                  { name: 'SFF-400', power: '3.5 кВт', price: '58 200 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-400' },
                  { name: 'SFF-600', power: '5.5 кВт', price: '71 800 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-600' },
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
