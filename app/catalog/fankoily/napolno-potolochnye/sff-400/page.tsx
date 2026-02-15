import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Напольно-потолочный фанкойл Shuft SFF-400 — купить в Москве | 68 000 ₽',
  description:
    'SFF-400 — напольно-потолочный фанкойл 4 кВт для помещений до 40 м². Монтаж на пол или потолок, шум 32 дБА. Официальный дилер Shuft. Гарантия 3 года.',
  alternates: {
    canonical: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-400/',
  },
}

const specs = [
  { label: 'Тип', value: 'Напольно-потолочный' },
  { label: 'Охлаждение', value: '4.0 кВт' },
  { label: 'Обогрев', value: '5.5 кВт' },
  { label: 'Воздух', value: '900 м³/ч' },
  { label: 'Шум', value: '32 дБА' },
  { label: 'Площадь', value: 'до 40 м²' },
  { label: 'Монтаж', value: 'Напольный / Потолочный' },
  { label: 'Скоростей', value: '3' },
  { label: 'Управление', value: 'ИК-пульт в комплекте' },
  { label: 'Потребление', value: '70–140 Вт' },
  { label: 'Вес', value: '17 кг' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Артикул', value: 'SFF-400' },
]

const kit = [
  'Фанкойл SFF-400',
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
    q: 'Чем отличается напольная установка от потолочной?',
    a: 'При напольной установке фанкойл ставится вертикально вдоль стены — воздух подаётся снизу вверх. При потолочной — горизонтально вдоль потолка, воздух подаётся вниз. В обоих случаях используется одно и то же устройство с разными кронштейнами из комплекта.',
  },
  {
    q: 'Нужен ли специальный потолок?',
    a: 'Нет. В отличие от кассетных фанкойлов, SFF-400 монтируется без встраивания в потолок. При потолочном монтаже крепится к перекрытию через кронштейны из комплекта.',
  },
  {
    q: 'Подходит ли для жилых помещений?',
    a: 'Да. Уровень шума 32 дБА — комфортный для жилья. На первой скорости шум снижается до 27 дБА. Многие устанавливают SFF-400 в загородных домах и апартаментах.',
  },
  {
    q: 'С какой системой работает?',
    a: 'Фанкойл работает в составе системы чиллер-фанкойл. Требуется чиллер от 5 кВт и двухтрубная система подачи воды. Совместим со всеми чиллерами Shuft.',
  },
  {
    q: 'Сколько времени занимает монтаж?',
    a: 'Монтаж одного фанкойла — 3–5 часов. Если уже есть готовая трубная разводка, достаточно 1–2 часов. Работаем по Москве и МО.',
  },
]

const reviews = [
  {
    author: 'Борис В.',
    city: 'Москва',
    date: 'Январь 2026',
    rating: 5,
    text: 'Поставили потолочно в серверной. Отлично охлаждает, не занимает места на полу. Монтаж за полдня, всё аккуратно.',
  },
  {
    author: 'Ирина К.',
    city: 'Красногорск',
    date: 'Ноябрь 2025',
    rating: 5,
    text: 'Взяли для студии. Нет подвесного потолка — выбор пал на напольно-потолочный. Работает тихо, внешний вид приятный. Пульт удобный.',
  },
  {
    author: 'Тимур А.',
    city: 'Москва',
    date: 'Октябрь 2025',
    rating: 4,
    text: 'Хороший фанкойл. Единственное — для 40 м² лучше брать на вырост SFF-600. Но со своей задачей (35 м²) справляется отлично.',
  },
]

const similarModels = [
  { name: 'SFF-150', power: '1.5 кВт', price: '42 000 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-150' },
  { name: 'SFF-300', power: '3.0 кВт', price: '56 000 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-300' },
  { name: 'SFF-600', power: '6.0 кВт', price: '85 000 ₽', href: '/catalog/fankoily/napolno-potolochnye/sff-600' },
]

const applications = [
  'Офисы без подвесного потолка',
  'Магазины и шоурумы',
  'Квартиры и апартаменты',
  'Серверные и технические помещения',
  'Административные здания',
  'Производственные офисы',
]

const schemaProduct = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Напольно-потолочный фанкойл Shuft SFF-400',
  sku: 'SFF-400',
  mpn: 'SFF-400',
  brand: { '@type': 'Brand', name: 'Shuft' },
  offers: {
    '@type': 'Offer',
    price: '68000',
    priceCurrency: 'RUB',
    availability: 'https://schema.org/InStock',
    seller: { '@type': 'Organization', name: 'Shuft Online' },
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '11',
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
    { '@type': 'ListItem', position: 5, name: 'SFF-400', item: 'https://shuft.online/catalog/fankoily/napolno-potolochnye/sff-400/' },
  ],
}

export default function SFF400Page() {
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
            <li className="text-gray-900 font-medium">SFF-400</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Gallery */}
          <div className="bg-gray-50 rounded-2xl flex flex-col items-center justify-center p-10 min-h-[360px] border border-gray-200">
            <div className="text-7xl mb-4">↕️</div>
            <p className="text-xl font-bold text-gray-800">Shuft SFF-400</p>
            <p className="text-gray-500 mt-1">Напольно-потолочный фанкойл</p>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Универсальный монтаж
              </span>
              <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                В наличии
              </span>
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              Напольно-потолочный фанкойл Shuft SFF-400 — купить в Москве
            </h1>

            <p className="text-3xl font-extrabold text-gray-900">68 000 ₽</p>

            {/* Key stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Охлаждение', value: '4.0 кВт' },
                { label: 'Шум', value: '32 дБА' },
                { label: 'Площадь', value: 'до 40 м²' },
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
                  SFF-400 — универсальный фанкойл с двумя вариантами монтажа: на пол (напольная установка вдоль стены) или на потолок (горизонтальная подвеска). Одна модель — два решения, что делает её идеальной там, где нет подвесного потолка или нельзя использовать настенную модель.
                </p>
                <p>
                  Мощность 4 кВт покрывает помещения до 40 м². Три скорости вентилятора, ИК-пульт в комплекте. Ненавязчивый внешний вид корпуса вписывается в любой интерьер — офис, магазин, жилое помещение.
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
                <span className="text-base text-gray-400 font-normal">(11 отзывов, рейтинг 4.8)</span>
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
                <p className="text-2xl font-extrabold text-gray-900">68 000 ₽</p>
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
