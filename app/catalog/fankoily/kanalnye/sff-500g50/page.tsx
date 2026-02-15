import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Канальный фанкойл Shuft SFF-500G50 — купить в Москве | 64 000 ₽',
  description: 'SFF-500G50 — канальный фанкойл 5 кВт для помещений 40–50 м². Скрытый монтаж, тихая работа 30 дБА. Официальный дилер Shuft. Гарантия 3 года.',
  alternates: {
    canonical: 'https://shuft.online/catalog/fankoily/kanalnye/sff-500g50/',
  },
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Канальный фанкойл Shuft SFF-500G50',
  brand: { '@type': 'Brand', name: 'Shuft' },
  description: 'Канальный фанкойл 5 кВт для скрытого монтажа в помещениях 40–50 м². Уровень шума 30 дБА. Статическое давление 50 Па.',
  sku: 'SFF-500G50',
  mpn: 'SFF-500G50',
  offers: {
    '@type': 'Offer',
    url: 'https://shuft.online/catalog/fankoily/kanalnye/sff-500g50/',
    priceCurrency: 'RUB',
    price: '64000',
    priceValidUntil: '2026-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '11' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog' },
    { '@type': 'ListItem', position: 3, name: 'Фанкойлы', item: 'https://shuft.online/catalog/fankoily' },
    { '@type': 'ListItem', position: 4, name: 'Канальные', item: 'https://shuft.online/catalog/fankoily/kanalnye' },
    { '@type': 'ListItem', position: 5, name: 'SFF-500G50', item: 'https://shuft.online/catalog/fankoily/kanalnye/sff-500g50' },
  ],
}

const specs = [
  { label: 'Тип', value: 'Канальный фанкойл (скрытый монтаж)' },
  { label: 'Мощность охлаждения', value: '5.0 кВт' },
  { label: 'Мощность обогрева', value: '6.5 кВт' },
  { label: 'Расход воздуха', value: '900 м³/ч' },
  { label: 'Уровень шума', value: '30 дБА' },
  { label: 'Площадь помещения', value: '40–50 м²' },
  { label: 'Статическое давление', value: '50 Па' },
  { label: 'Количество скоростей', value: '3' },
  { label: 'Управление', value: 'Проводной термостат' },
  { label: 'Габариты (Ш×В×Г)', value: '990 × 200 × 600 мм' },
  { label: 'Вес', value: '16 кг' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Производитель', value: 'Shuft (Россия)' },
  { label: 'Артикул', value: 'SFF-500G50' },
]

const kit = [
  'Канальный фанкойл SFF-500G50',
  'Проводной термостат',
  'Комплект монтажных кронштейнов',
  'Дренажный поддон',
  'Воздушный фильтр G4',
  'Виброизолирующие прокладки',
  'Руководство по эксплуатации (рус.)',
  'Гарантийный талон (3 года)',
]

const faqs = [
  { q: 'Какие помещения охлаждает SFF-500G50?', a: 'Оптимален для офисных кабинетов, квартир, медицинских учреждений и гостиничных номеров площадью 40–50 м². Часто используется в многозональных системах для загородных домов.' },
  { q: 'Есть ли разница между SFF-300 и SFF-500?', a: 'SFF-500G50 мощнее на 67% (5 кВт vs 3 кВт), предназначен для помещений до 50 м² вместо 30 м². Расход воздуха — 900 м³/ч против 600 м³/ч. Уровень шума незначительно выше: 30 vs 28 дБА.' },
  { q: 'Сколько воздуховодов нужно?', a: 'SFF-500G50 обычно подключают к 2–4 воздуховодам с решётками. Оптимальная длина канала — до 5 м. При необходимости раздать воздух на большее расстояние используется SFF-800G50 с давлением 50 Па.' },
  { q: 'Нужен ли конденсатоотвод?', a: 'Да, фанкойл образует конденсат при охлаждении. В комплекте поддон. Дренаж организуется самотёком (уклон 1°) или через помпу, если самотёк невозможен.' },
  { q: 'С чем монтируется в систему?', a: 'Монтируется в систему чиллер-фанкойл. Один чиллер 6–8 кВт может питать 1–2 канальных фанкойла SFF-500G50. Для точного расчёта звоните нашим инженерам.' },
]

const reviews = [
  { author: 'Елена П.', city: 'Москва', date: 'Февраль 2026', rating: 5, text: 'Купили SFF-500G50 для загородного дома, установили в техническом пространстве над спальней. Тишина абсолютная, ощущения как от центрального кондиционирования.' },
  { author: 'Вадим С.', city: 'Балашиха', date: 'Декабрь 2025', rating: 5, text: 'Отличная модель для офиса. Раздаём воздух через 3 решётки на 45 м². Равномерно, тихо, комфортно. Брали с монтажом у Shuft.Online — всё сделали быстро.' },
  { author: 'Нина Р.', city: 'Москва', date: 'Октябрь 2025', rating: 4, text: 'Работает второй год. Фильтр меняем раз в сезон. Мощности хватает даже в 35° жару.' },
]

export default function SFF500G50Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Каталог', href: '/catalog' },
          { name: 'Фанкойлы', href: '/catalog/fankoily' },
          { name: 'Канальные', href: '/catalog/fankoily/kanalnye' },
          { name: 'SFF-500G50' },
        ]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl aspect-square flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="text-8xl mb-4">🔲</div>
                <div className="font-bold text-2xl text-gray-700">Shuft SFF-500G50</div>
                <div className="text-gray-500">Канальный фанкойл</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {['Корпус', 'Подключение', 'Монтаж'].map((view, i) => (
                <div key={i} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center text-xs text-gray-500 cursor-pointer hover:bg-gray-200 transition-colors">
                  {view}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Скрытый монтаж</span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < 5 ? 'text-yellow-400 text-xl' : 'text-gray-200 text-xl'}>★</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">4.8/5 (11 отзывов)</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Канальный фанкойл Shuft SFF-500G50 — купить в Москве</h1>
            <div className="text-gray-500 text-sm mb-6">Артикул: SFF-500G50 | Производитель: Shuft (Россия)</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl font-bold text-green-600">64 000 ₽</div>
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
                { label: 'Площадь', value: '40–50 м²' },
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

            <div className="bg-green-50 border border-green-100 rounded-xl p-4 text-sm text-gray-700">
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
                Канальный фанкойл Shuft SFF-500G50 — решение для скрытого климат-контроля в помещениях
                40–50 м². Устанавливается за подвесным потолком: оборудование полностью спрятано, а воздух подаётся
                через аккуратные вентиляционные решётки в потолке или стенах.
              </p>
              <p className="text-gray-700 mb-4">
                Уровень шума 30 дБА обеспечивает комфортную работу в жилых и офисных помещениях.
                Мощность охлаждения 5 кВт позволяет эффективно обслуживать офисы, квартиры и медицинские кабинеты
                площадью до 50 м².
              </p>
              <h3 className="font-bold text-gray-900 mb-3">Применение:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {['Квартиры и частные дома (зональное охлаждение)', 'Офисные кабинеты и open space', 'Медицинские и стоматологические кабинеты', 'Гостиничные номера', 'Переговорные и кабинеты руководителей', 'Помещения без права прямой видимости блока'].map((app, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-green-500">•</span> {app}
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
                    <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-gray-900 hover:text-green-600">
                      <span>{faq.q}</span>
                      <span className="text-green-600 group-open:rotate-180 transition-transform ml-2">▼</span>
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
            <div className="bg-green-600 text-white rounded-2xl p-6 sticky top-20">
              <h3 className="font-bold text-xl mb-4">Официальный дилер Shuft</h3>
              <ul className="space-y-3 text-sm mb-6">
                {['Сертификаты от производителя', 'Прямые поставки с завода', 'Гарантия 3 года', 'Техподдержка 24/7', 'Склад в Москве', 'Монтаж за 1–3 дня'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-300">✓</span> {item}
                  </li>
                ))}
              </ul>
              <a href="tel:+74951203375" className="block text-center bg-white text-green-600 font-bold py-3 rounded-xl hover:bg-green-50 transition-colors mb-3">
                +7 (495) 120-33-75
              </a>
              <Link href="/contacts#form" className="block text-center bg-orange-500 text-white font-bold py-3 rounded-xl hover:bg-orange-600 transition-colors">
                Оставить заявку
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Другие канальные модели</h3>
              <div className="space-y-3">
                {[
                  { name: 'SFF-300G50', power: '3.0 кВт', price: '52 000 ₽', href: '/catalog/fankoily/kanalnye/sff-300g50' },
                  { name: 'SFF-800G50', power: '8.0 кВт', price: '89 000 ₽', href: '/catalog/fankoily/kanalnye/sff-800g50' },
                  { name: 'SFF-1400G50', power: '14.0 кВт', price: '145 000 ₽', href: '/catalog/fankoily/kanalnye/sff-1400g50' },
                ].map((m, i) => (
                  <Link key={i} href={m.href} className="flex items-center justify-between p-3 bg-white rounded-xl hover:shadow-md transition-shadow">
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{m.name}</div>
                      <div className="text-gray-500 text-xs">{m.power}</div>
                    </div>
                    <div className="text-green-600 font-semibold text-sm">{m.price}</div>
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
