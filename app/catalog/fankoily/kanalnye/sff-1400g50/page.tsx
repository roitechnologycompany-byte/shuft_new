import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Канальный фанкойл Shuft SFF-1400G50 — купить в Москве | 145 000 ₽',
  description:
    'SFF-1400G50 — мощный канальный фанкойл 14 кВт для торговых залов и ресторанов 100–150 м². Статическое давление 50 Па. Официальный дилер Shuft. Гарантия 3 года.',
  alternates: {
    canonical: 'https://shuft.online/catalog/fankoily/kanalnye/sff-1400g50/',
  },
};

const specs = [
  { label: 'Тип', value: 'Канальный (скрытый монтаж)' },
  { label: 'Охлаждение', value: '14.0 кВт' },
  { label: 'Обогрев', value: '19.0 кВт' },
  { label: 'Воздух', value: '2600 м³/ч' },
  { label: 'Шум', value: '40 дБА' },
  { label: 'Площадь', value: '100–150 м²' },
  { label: 'Давление', value: '50 Па' },
  { label: 'Скоростей', value: '3' },
  { label: 'Управление', value: 'Проводной пульт / BMS' },
  { label: 'Габариты', value: '1490×250×700 мм' },
  { label: 'Вес', value: '32 кг' },
  { label: 'Гарантия', value: '3 года' },
  { label: 'Артикул', value: 'SFF-1400G50' },
];

const kit = [
  'Канальный фанкойл SFF-1400G50',
  'Проводной пульт управления',
  'Комплект монтажных кронштейнов',
  'Дренажный поддон с помпой',
  'Высокопроизводительный фильтр G4',
  'Виброизолирующие прокладки',
  'Руководство (рус.)',
  'Гарантийный талон (3 года)',
];

const faqs = [
  {
    q: 'Для каких объектов предназначен SFF-1400G50?',
    a: 'Для крупных коммерческих объектов: торговые залы 100–150 м², рестораны, конференц-залы, фитнес-центры, производственные помещения с высокой тепловой нагрузкой.',
  },
  {
    q: 'Какой чиллер нужен?',
    a: 'Рекомендуем чиллер от 16–20 кВт. На один чиллер 30 кВт можно подключить 2 фанкойла SFF-1400G50. Помогаем подобрать всю систему под ключ.',
  },
  {
    q: 'Как снизить уровень шума 40 дБА?',
    a: 'На первой и второй скорости шум снижается до 34–37 дБА. Для дополнительного шумоподавления устанавливайте шумоглушитель в воздуховод перед решётками. Также помогает виброизоляция основания фанкойла.',
  },
  {
    q: 'Есть ли возможность подключения к BMS?',
    a: 'Да. Через совместимый термостат с интерфейсом Modbus RTU/TCP или BACnet фанкойл интегрируется в любую систему диспетчеризации здания.',
  },
  {
    q: 'Сколько стоит монтаж?',
    a: 'Монтаж SFF-1400G50 — от 15 000 ₽, включая трассировку воздуховодов. Итоговая стоимость зависит от объёма работ. Выезд инженера для составления технического задания — бесплатно.',
  },
];

const reviews = [
  {
    author: 'Геннадий Ф.',
    city: 'Москва',
    date: 'Февраль 2026',
    rating: 5,
    text: 'Установили в ресторан 130 м². Один фанкойл охватывает весь зал. Работает тихо на первых двух скоростях — гости не жалуются. Профессиональное оборудование.',
  },
  {
    author: 'Марина О.',
    city: 'Долгопрудный',
    date: 'Декабрь 2025',
    rating: 5,
    text: 'Взяли для большого торгового зала. Монтаж занял два дня — сложная разводка воздуховодов. Результат отличный: равномерное охлаждение по всей площади.',
  },
  {
    author: 'Сергей Н.',
    city: 'Москва',
    date: 'Октябрь 2025',
    rating: 4,
    text: 'Мощная машина. Мощность избыточна для помещений до 100 м², но для нашего зала 140 м² — то что нужно. Надёжно, качественно, гарантия подтверждена документально.',
  },
];

const similarModels = [
  { name: 'SFF-500G50', power: '5.0 кВт', price: '64 000 ₽', href: '/catalog/fankoily/kanalnye/sff-500g50/' },
  { name: 'SFF-800G50', power: '8.0 кВт', price: '89 000 ₽', href: '/catalog/fankoily/kanalnye/sff-800g50/' },
  { name: 'SFR-1500F', power: '10.0 кВт (кассетный)', price: '118 500 ₽', href: '/catalog/fankoily/kassetnye/sfr-1500f/' },
];

const applications = [
  'Торговые залы супермаркетов',
  'Рестораны и банкетные залы',
  'Производственные помещения',
  'Конференц-центры и выставочные залы',
  'Фитнес-центры и бассейны',
  'Логистические и складские комплексы',
];

const schemaOrg = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'Канальный фанкойл Shuft SFF-1400G50',
      sku: 'SFF-1400G50',
      mpn: 'SFF-1400G50',
      description:
        'SFF-1400G50 — мощный канальный фанкойл 14 кВт для торговых залов и ресторанов 100–150 м². Статическое давление 50 Па. Гарантия 3 года.',
      brand: { '@type': 'Brand', name: 'Shuft' },
      offers: {
        '@type': 'Offer',
        price: '145000',
        priceCurrency: 'RUB',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'Shuft.Online' },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '8',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
        { '@type': 'ListItem', position: 2, name: 'Каталог', item: 'https://shuft.online/catalog/' },
        { '@type': 'ListItem', position: 3, name: 'Фанкойлы', item: 'https://shuft.online/catalog/fankoily/' },
        { '@type': 'ListItem', position: 4, name: 'Канальные', item: 'https://shuft.online/catalog/fankoily/kanalnye/' },
        { '@type': 'ListItem', position: 5, name: 'SFF-1400G50', item: 'https://shuft.online/catalog/fankoily/kanalnye/sff-1400g50/' },
      ],
    },
  ],
};

export default function SFF1400G50Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <nav className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-green-600 transition-colors">Главная</Link>
              <span>/</span>
              <Link href="/catalog/" className="hover:text-green-600 transition-colors">Каталог</Link>
              <span>/</span>
              <Link href="/catalog/fankoily/" className="hover:text-green-600 transition-colors">Фанкойлы</Link>
              <span>/</span>
              <Link href="/catalog/fankoily/kanalnye/" className="hover:text-green-600 transition-colors">Канальные</Link>
              <span>/</span>
              <span className="text-gray-800 font-medium">SFF-1400G50</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

              {/* Gallery */}
              <div className="space-y-4">
                <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <div className="absolute top-4 left-4 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Максимальная мощность
                  </div>
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-16 h-16 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium text-lg">Shuft SFF-1400G50</p>
                    <p className="text-gray-400 text-sm mt-1">Флагманский канальный фанкойл</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {['Вид спереди', 'Вид сбоку', 'Монтаж', 'Разъёмы'].map((label) => (
                    <div key={label} className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center cursor-pointer hover:bg-green-50 hover:border hover:border-green-300 transition-colors">
                      <span className="text-gray-400 text-xs text-center px-1">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                      Максимальная мощность
                    </span>
                    <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded">
                      Артикул: SFF-1400G50
                    </span>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                    Канальный фанкойл Shuft SFF-1400G50 — купить в Москве
                  </h1>
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">4.9 / 5 (8 отзывов)</span>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: 'Охлаждение', value: '14.0 кВт', icon: '❄️' },
                    { label: 'Шум', value: '40 дБА', icon: '🔇' },
                    { label: 'Площадь', value: '100–150 м²', icon: '📐' },
                    { label: 'Гарантия', value: '3 года', icon: '🛡️' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-green-50 border border-green-100 rounded-xl p-3 flex items-center gap-3">
                      <span className="text-xl">{stat.icon}</span>
                      <div>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                        <p className="font-bold text-gray-900 text-sm">{stat.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Price & Stock */}
                <div className="bg-gray-50 rounded-2xl p-5 space-y-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold text-gray-900">145 000 ₽</span>
                    <span className="text-gray-400 text-sm">с НДС</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                      <span className="text-green-700 font-semibold text-sm">В наличии</span>
                    </span>
                    <span className="text-gray-400 text-sm">· Доставка 24 ч</span>
                  </div>
                  <div className="space-y-3">
                    <a
                      href="tel:+74951234567"
                      className="flex items-center justify-center gap-2 w-full bg-green-700 hover:bg-green-800 active:bg-green-900 text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-md"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Позвонить и заказать
                    </a>
                    <a
                      href="https://wa.me/74951234567"
                      className="flex items-center justify-center gap-2 w-full bg-white border-2 border-green-700 text-green-800 hover:bg-green-50 font-semibold py-3.5 rounded-xl transition-colors"
                    >
                      Написать в WhatsApp
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Бесплатный выезд инженера · Монтаж от 2 рабочих дней
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two-Column Layout */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">

              {/* Description */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  О модели SFF-1400G50
                </h2>
                <div className="prose prose-gray max-w-none space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    SFF-1400G50 — флагман линейки канальных фанкойлов Shuft. Предназначен для крупных торговых залов, ресторанов, конференц-центров и производственных помещений площадью 100–150 м². Производительность 2600 м³/ч обеспечивает быстрое достижение заданной температуры даже при высокой тепловой нагрузке.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Полностью скрытый монтаж сохраняет эстетику любого пространства. Поддержка BMS-интеграции позволяет управлять оборудованием централизованно, что особенно важно для крупных объектов с множеством зон кондиционирования.
                  </p>
                </div>

                {/* Applications */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-3">Области применения</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {applications.map((app) => (
                      <div key={app} className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-600 flex-shrink-0"></span>
                        <span className="text-sm text-gray-700">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Specs Table */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  Технические характеристики
                </h2>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <tbody>
                      {specs.map((spec, i) => (
                        <tr key={spec.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-medium text-gray-600 w-2/5">{spec.label}</td>
                          <td className="px-4 py-3 text-gray-900 font-semibold">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Kit */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  Комплектация
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {kit.map((item) => (
                    <li key={item} className="flex items-start gap-3 bg-white border border-gray-100 rounded-lg px-4 py-3 shadow-sm">
                      <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* FAQs */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  Часто задаваемые вопросы
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none hover:bg-green-50 transition-colors">
                        <span className="font-semibold text-gray-900 text-sm leading-snug">{faq.q}</span>
                        <svg className="w-5 h-5 text-green-700 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-4 pt-1">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Reviews */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-green-600">
                  Отзывы покупателей
                </h2>
                <div className="mb-4 flex items-center gap-4 bg-green-50 border border-green-100 rounded-xl px-5 py-4">
                  <div className="text-center">
                    <p className="text-4xl font-extrabold text-green-800">4.9</p>
                    <div className="flex items-center gap-0.5 mt-1">
                      {[1,2,3,4,5].map((s) => (
                        <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold text-gray-800">8 отзывов</p>
                    <p>Высокая оценка профессионалов</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {reviews.map((review, i) => (
                    <div key={i} className="bg-white border border-gray-200 rounded-xl p-5">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold text-gray-900">{review.author}</p>
                          <p className="text-xs text-gray-500">{review.city} · {review.date}</p>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: review.rating }).map((_, s) => (
                            <svg key={s} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">

              {/* Sticky Blue CTA */}
              <div className="sticky top-4 space-y-4">
                <div className="bg-blue-700 text-white rounded-2xl p-6 shadow-lg">
                  <h3 className="font-bold text-lg mb-1">Заказать SFF-1400G50</h3>
                  <p className="text-blue-200 text-sm mb-4">Флагманская модель · Подбор системы под ключ</p>
                  <div className="space-y-3">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-extrabold">145 000 ₽</span>
                      <span className="text-blue-300 text-sm">с НДС</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                      <span className="text-green-300 text-sm font-medium">В наличии · Доставка 24 ч</span>
                    </div>
                    <a
                      href="tel:+74951234567"
                      className="flex items-center justify-center gap-2 w-full bg-white text-blue-700 hover:bg-blue-50 font-bold py-3.5 rounded-xl transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Позвонить
                    </a>
                    <a
                      href="https://wa.me/74951234567"
                      className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white font-semibold py-3.5 rounded-xl transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-600 space-y-2">
                    {['Официальный дилер Shuft', 'Гарантия 3 года', 'Монтаж под ключ', 'Бесплатный выезд инженера'].map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-sm text-blue-100">
                        <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Similar Models */}
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 mb-4">Похожие модели</h3>
                  <div className="space-y-3">
                    {similarModels.map((model) => (
                      <Link
                        key={model.name}
                        href={model.href}
                        className="flex items-center justify-between p-3 rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors group"
                      >
                        <div>
                          <p className="font-semibold text-gray-900 text-sm group-hover:text-green-700">{model.name}</p>
                          <p className="text-xs text-gray-500">{model.power}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-700 text-sm">{model.price}</p>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-green-600 ml-auto mt-0.5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/catalog/fankoily/kanalnye/"
                    className="mt-4 flex items-center justify-center gap-1 text-sm text-green-700 hover:text-green-900 font-medium transition-colors"
                  >
                    Все канальные фанкойлы
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
