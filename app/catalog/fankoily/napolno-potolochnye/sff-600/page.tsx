import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Напольно-потолочный фанкойл Shuft SFF-600 — купить в Москве | 85 000 ₽',
  description:
    'SFF-600 — мощный напольно-потолочный фанкойл 6 кВт для помещений до 60 м². Монтаж на пол или потолок, шум 35 дБА. Официальный дилер Shuft. Гарантия 3 года.',
  alternates: {
    canonical: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-600/',
  },
}

const specs = [
  { label: 'Тип', value: 'Напольно-потолочный' },
  { label: 'Охлаждение', value: '6.0 кВт' },
  { label: 'Обогрев', value: '8.0 кВт' },
  { label: 'Воздух', value: '1300 м³/ч' },
  { label: 'Шум', value: '35 дБА' },
  { label: 'Площадь', value: 'до 60 м²' },
  { label: 'Монтаж', value: 'Напольный / Потолочный' },
  { label: 'Скоростей', value: '3' },
  { label: 'Управление', value: 'ИК-пульт в комплекте' },
  { label: 'Потребление', value: '100–200 Вт' },
  { label: 'Вес', value: '22 кг' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Артикул', value: 'SFF-600' },
]

const kit = [
  'Фанкойл SFF-600',
  'ИК-пульт управления',
  'Кронштейны для напольной установки',
  'Кронштейны для потолочной установки',
  'Дренажный поддон',
  'Воздушный фильтр G3',
  'Руководство (рус.)',
  'Гарантийный талон (3 года)',
]

const faqs = [
  {
    q: 'Чем SFF-600 лучше SFF-400?',
    a: 'Мощнее на 50% (6 кВт vs 4 кВт). Покрывает помещения до 60 м² вместо 40 м². Воздухообмен 1300 м³/ч vs 900 м³/ч. Если площадь 45–60 м² — однозначно SFF-600.',
  },
  {
    q: 'Как монтируется к потолку без отверстий?',
    a: 'При потолочном монтаже используются кронштейны из комплекта. Фиксируются анкерами к перекрытию, несущим балкам или специальной монтажной шине. Никаких отверстий в потолке — только крепление к его поверхности.',
  },
  {
    q: 'Громкий ли на максимальной скорости?',
    a: '35 дБА на максимуме — это тихий кабинет или библиотека. На первой скорости — 28–30 дБА. Для большинства офисов третья скорость нужна только при быстром охлаждении в жаркий день, в штатном режиме — первая-вторая.',
  },
  {
    q: 'Какой тип трубопровода?',
    a: 'Двухтрубная система: подача и обратка ½ дюйма (DN15). Подключается к любому чиллеру с соответствующим коллектором. Гибкие подводки включены в комплект монтажа.',
  },
  {
    q: 'Есть ли таймер и ночной режим?',
    a: 'Управление через ИК-пульт поддерживает таймер включения/выключения, ночной тихий режим (автоматически снижает скорость). Для расширенного управления подключается Wi-Fi термостат Shuft.',
  },
]

const reviews = [
  {
    author: 'Алина Г.',
    city: 'Москва',
    date: 'Февраль 2026',
    rating: 5,
    text: 'Купили SFF-600 в офис 55 м² (open space). Отлично справляется даже когда все сотрудники на месте. Монтаж потолочный — красиво и не мешает.',
  },
  {
    author: 'Николай Ч.',
    city: 'Одинцово',
    date: 'Ноябрь 2025',
    rating: 5,
    text: 'Для загородного дома — просто отлично. Напольная установка в гостиной. Работает тихо, греет зимой и охлаждает летом. Брал с монтажом, сделали всё быстро.',
  },
  {
    author: 'Юлия С.',
    city: 'Москва',
    date: 'Октябрь 2025',
    rating: 4,
    text: 'Хорошая мощная модель. На третьей скорости немного слышно, но терпимо. На первых двух — полная тишина.',
  },
]

const similarModels = [
  { name: 'SFF-300', power: '3.0 кВт', price: '56 000 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-300' },
  { name: 'SFF-400', power: '4.0 кВт', price: '68 000 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-400' },
  { name: 'SFR-1200F кассетный', power: '7.5 кВт', price: '89 200 ₽', href: '/catalog/fankoily/kassetnye/sfr-1200f' },
]

const applications = [
  'Офисы открытой планировки (open space)',
  'Торговые залы и шоурумы',
  'Спортивные залы и студии',
  'Рестораны без потолочных конструкций',
  'Частные дома и коттеджи',
  'Административные здания',
]

const schemaProduct = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Напольно-потолочный фанкойл Shuft SFF-600',
  sku: 'SFF-600',
  mpn: 'SFF-600',
  brand: { '@type': 'Brand', name: 'Shuft' },
  offers: {
    '@type': 'Offer',
    price: '85000',
    priceCurrency: 'RUB',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Shuft Online' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '7',
  },
}

const schemaBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog/' },
    { '@type': 'ListItem', position: 3, name: 'Фанкойлы', item: 'https://shuft.online/catalog/fankoily/' },
    { '@type': 'ListItem', position: 4, name: 'Напольно-потолочные', item: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/' },
    { '@type': 'ListItem', position: 5, name: 'SFF-600', item: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-600/' },
  ],
}

export default function SFF600Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProduct) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-1">
            <li><Link href="/" className="hover:text-gray-700">Главная</Link></li>
            <li className="mx-1">/</li>
            <li><Link href="/catalog" className="hover:text-gray-700">Каталог</Link></li>
            <li className="mx-1">/</li>
            <li><Link href="/catalog/fankoily" className="hover:text-gray-700">Фанкойлы</Link></li>
            <li className="mx-1">/</li>
            <li><Link href="/catalog/fankoily/napolno-potolochnye" className="hover:text-gray-700">Напольно-потолочные</Link></li>
            <li className="mx-1">/</li>
            <li className="text-gray-900 font-medium">SFF-600</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Gallery */}
          <div className="bg-gray-50 rounded-2xl flex flex-col items-center justify-center p-10 min-h-[360px] border border-gray-200">
            <div className="text-7xl mb-4">↕️</div>
            <p className="text-xl font-bold text-gray-800">Shuft SFF-600</p>
            <p className="text-gray-500 mt-1">Напольно-потолочный фанкойл</p>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Мощная модель
              </span>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                В наличии
              </span>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Напольно-потолочный фанкойл Shuft SFF-600 — купить в Москве
            </h1>

            <p className="text-3xl font-extrabold text-gray-900">85 000 ₽</p>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Охлаждение', value: '6.0 кВт' },
                { label: 'Шум', value: '35 дБА' },
                { label: 'Площадь', value: 'до 60 м²' },
                { label: 'Гарантия', value: '3 года' },
              ].map((stat) => (
                <div key={stat.label} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <p className="text-xs text-gray-500 mb-0.5">{stat.label}</p>
                  <p className="text-base font-bold text-gray-900">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a
                href="tel:+74951234567"
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-center py-3 px-6 rounded-xl transition-colors"
              >
                Позвонить
              </a>
              <a
                href="#order"
                className="flex-1 border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold text-center py-3 px-6 rounded-xl transition-colors"
              >
                Оставить заявку
              </a>
            </div>
          </div>
        </section>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-2 flex flex-col gap-10">
            {/* Description */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Описание</h2>
              <div className="prose prose-gray max-w-none space-y-4 text-gray-700 leading-relaxed">
                <p>
                  SFF-600 — самая мощная модель в линейке напольно-потолочных фанкойлов Shuft. Мощность 6 кВт покрывает просторные помещения до 60 м² без потери в комфорте. Два варианта монтажа: напольный вдоль стены или горизонтальная подвеска к потолку.
                </p>
                <p>
                  Воздухообмен 1300 м³/ч обеспечивает быструю реакцию на изменение условий: за 10–15 минут достигается заданная температура даже при полной тепловой нагрузке. Идеален для офисов открытой планировки и торговых залов без подвесного потолка.
                </p>
              </div>

              {/* Applications */}
              <div className="mt-6">
                <h3 className="text-base font-semibold text-gray-800 mb-3">Области применения</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {applications.map((app) => (
                    <li key={app} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-purple-500 mt-0.5">&#10003;</span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Specs Table */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Технические характеристики</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <tbody>
                    {specs.map((row, i) => (
                      <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-3 px-4 text-gray-500 font-medium w-1/2 border-b border-gray-100">{row.label}</td>
                        <td className="py-3 px-4 text-gray-900 font-semibold border-b border-gray-100">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Kit */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Комплектация</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {kit.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-4 py-2.5 border border-gray-100">
                    <span className="text-purple-500 mt-0.5 shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Отзывы покупателей{' '}
                <span className="text-base text-gray-400 font-normal">(7 отзывов, рейтинг 4.8)</span>
              </h2>
              <div className="space-y-4">
                {reviews.map((review, i) => (
                  <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold text-gray-900 text-sm">{review.author}</span>
                        <span className="text-gray-400 text-xs ml-2">{review.city} · {review.date}</span>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <span key={s} className={s < review.rating ? 'text-yellow-400' : 'text-gray-200'}>
                            &#9733;
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="flex flex-col gap-6">
            {/* Sticky CTA */}
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 flex flex-col gap-4">
                <p className="text-2xl font-extrabold text-gray-900">85 000 ₽</p>
                <p className="text-sm text-green-600 font-semibold">В наличии — отгрузка 1–2 дня</p>
                <a
                  href="tel:+74951234567"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-center py-3 px-4 rounded-xl transition-colors text-sm"
                >
                  Позвонить: +7 (495) 123-45-67
                </a>
                <a
                  href="#order"
                  className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-bold text-center py-3 px-4 rounded-xl transition-colors text-sm"
                >
                  Оставить заявку
                </a>
                <ul className="text-xs text-gray-500 space-y-1 pt-2 border-t border-gray-100">
                  <li>&#10003; Официальный дилер Shuft</li>
                  <li>&#10003; Гарантия 3 года</li>
                  <li>&#10003; Монтаж по Москве и МО</li>
                  <li>&#10003; Бесплатный выезд инженера</li>
                </ul>
              </div>

              {/* Similar Models */}
              <div className="mt-6 bg-white rounded-2xl border border-gray-200 shadow-sm p-5">
                <h3 className="text-base font-bold text-gray-900 mb-4">Похожие модели</h3>
                <div className="flex flex-col gap-3">
                  {similarModels.map((model) => (
                    <Link
                      key={model.name}
                      href={model.href}
                      className="flex items-center justify-between bg-gray-50 hover:bg-purple-50 rounded-xl px-4 py-3 border border-gray-100 hover:border-purple-200 transition-colors group"
                    >
                      <div>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-purple-700">{model.name}</p>
                        <p className="text-xs text-gray-500">{model.power}</p>
                      </div>
                      <p className="text-sm font-bold text-purple-600">{model.price}</p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  )
}
