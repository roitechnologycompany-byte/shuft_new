import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Услуги — монтаж, подбор, сервис фанкойлов Shuft | Shuft.Online',
  description: 'Полный спектр услуг по климатическому оборудованию Shuft в Москве: подбор, монтаж, проектирование VRF, сервис и техподдержка 24/7. Официальный дилер.',
  alternates: { canonical: 'https://shuft.online/services/' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://shuft.online/' },
    { '@type': 'ListItem', position: 2, name: 'Услуги', item: 'https://shuft.online/services/' },
  ],
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Shuft.Online — официальный дилер Shuft в Москве',
  url: 'https://shuft.online/',
  telephone: '+7-495-120-33-75',
  address: { '@type': 'PostalAddress', addressLocality: 'Москва', addressCountry: 'RU' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Услуги по климатическому оборудованию',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Подбор оборудования' }, price: '0', priceCurrency: 'RUB' },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Монтаж фанкойлов' }, priceSpecification: { '@type': 'PriceSpecification', minPrice: 5000, priceCurrency: 'RUB' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Проектирование VRF-систем' }, priceSpecification: { '@type': 'PriceSpecification', minPrice: 50000, priceCurrency: 'RUB' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Сервис и ремонт' }, priceSpecification: { '@type': 'PriceSpecification', minPrice: 2500, priceCurrency: 'RUB' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Сколько стоит монтаж фанкойла?',
      acceptedAnswer: { '@type': 'Answer', text: 'Монтаж одного настенного фанкойла — от 5 000 ₽. Кассетного фанкойла — от 8 000 ₽. Канального фанкойла с воздуховодами — от 12 000 ₽. Стоимость зависит от типа оборудования, сложности объекта и удалённости от МКАД. Итоговая цена согласовывается после выезда инженера.' },
    },
    {
      '@type': 'Question',
      name: 'Как долго длится монтаж фанкойла?',
      acceptedAnswer: { '@type': 'Answer', text: 'Монтаж одного настенного или кассетного фанкойла занимает 3–6 часов. Монтаж 5–10 фанкойлов в офисе — 1–2 рабочих дня. Монтаж крупного объекта с чиллером и 20+ фанкойлами — 5–14 дней. Пусконаладка и проверка работы включены в стоимость.' },
    },
    {
      '@type': 'Question',
      name: 'Даёте ли вы гарантию на монтаж?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да. На монтажные работы — гарантия 1 год. На оборудование Shuft — гарантия производителя 3 года. При возникновении проблем в гарантийный период выезжаем бесплатно и устраняем неисправность.' },
    },
    {
      '@type': 'Question',
      name: 'Можно ли заказать только подбор оборудования без монтажа?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да. Подбор оборудования и консультация инженера — бесплатно. Мы поможем выбрать модели, рассчитаем мощности и составим спецификацию. Вы можете самостоятельно выполнить монтаж или заказать его у нас.' },
    },
    {
      '@type': 'Question',
      name: 'Выезжаете ли вы за МКАД?',
      acceptedAnswer: { '@type': 'Answer', text: 'Да, выезжаем в Подмосковье и другие регионы. В радиусе до 50 км от МКАД доставка оборудования бесплатная. За 50–100 км стоимость доставки и выезда рассчитывается индивидуально.' },
    },
  ],
}

const services = [
  {
    title: 'Подбор оборудования',
    desc: 'Бесплатная консультация и подбор оптимального фанкойла, чиллера или VRF-системы под ваш объект.',
    href: '/services/podbor-oborudovaniya',
    icon: '📋',
    price: 'Бесплатно',
    color: 'from-green-600 to-green-800',
    what: ['Расчёт мощности охлаждения и отопления', 'Подбор модели под помещение и бюджет', 'Сравнение вариантов и КП', 'Расчёт срока окупаемости'],
    time: 'Консультация — в день обращения',
  },
  {
    title: 'Монтаж фанкойлов',
    desc: 'Профессиональная установка фанкойлов. Лицензированные монтажники, гарантия 1 год на работы.',
    href: '/services/montazh-fankoilov',
    icon: '🔧',
    price: 'от 5 000 ₽',
    color: 'from-blue-600 to-blue-800',
    what: ['Демонтаж старого оборудования', 'Монтаж настенных, кассетных, канальных фанкойлов', 'Прокладка трубопровода и электрики', 'Подключение к системе чиллера', 'Пусконаладка и проверка'],
    time: '1 фанкойл — 3–6 часов',
  },
  {
    title: 'Проектирование VRF',
    desc: 'Разработка рабочего проекта мультизональной системы кондиционирования для вашего объекта.',
    href: '/services/proektirovanie-vrf',
    icon: '📐',
    price: 'от 50 000 ₽',
    color: 'from-orange-600 to-orange-800',
    what: ['Обследование объекта, замеры', 'Тепловой расчёт всех зон', 'Расстановка оборудования', 'Схема разводки хладагента', 'Спецификация, чертежи, смета'],
    time: '3–5 рабочих дней',
  },
  {
    title: 'Сервис и ремонт',
    desc: 'Техническое обслуживание, чистка, замена фильтров и ремонт климатического оборудования Shuft.',
    href: '/services/servis-i-remont',
    icon: '🛠️',
    price: 'от 2 500 ₽',
    color: 'from-red-600 to-red-800',
    what: ['Чистка фильтров и теплообменника', 'Диагностика электронных компонентов', 'Замена износившихся деталей', 'Заправка хладагента', 'Сезонное ТО (весна/осень)'],
    time: 'Выезд — в течение 24 часов',
  },
  {
    title: 'Техподдержка 24/7',
    desc: 'Круглосуточная поддержка по телефону и мессенджерам. Помогаем с настройкой и устранением неисправностей.',
    href: '/services/tehpodderzhka',
    icon: '📞',
    price: 'Бесплатно',
    color: 'from-purple-600 to-purple-800',
    what: ['Консультации по эксплуатации', 'Помощь в настройке термостатов', 'Устранение ошибок по телефону', 'Приём заявок на ремонт', 'Экстренный выезд'],
    time: 'Отвечаем круглосуточно',
  },
]

const process = [
  { step: '01', title: 'Заявка', desc: 'Оставьте заявку или позвоните. Менеджер свяжется в течение 15 минут.', icon: '📱' },
  { step: '02', title: 'Консультация', desc: 'Инженер выяснит задачу, расскажет о решениях и стоимости.', icon: '🗣️' },
  { step: '03', title: 'Выезд и расчёт', desc: 'При необходимости — выезд на объект, замеры и коммерческое предложение.', icon: '📏' },
  { step: '04', title: 'Монтаж', desc: 'Монтажная бригада устанавливает оборудование в согласованные сроки.', icon: '🔧' },
  { step: '05', title: 'Пуск и гарантия', desc: 'Запуск системы, проверка работы, оформление гарантийных документов.', icon: '✅' },
]

const faqItems = [
  {
    q: 'Сколько стоит монтаж фанкойла?',
    a: 'Настенный фанкойл — от 5 000 ₽. Кассетный — от 8 000 ₽. Канальный с воздуховодами — от 12 000 ₽. Итоговая цена согласовывается после выезда инженера.',
  },
  {
    q: 'Как долго длится монтаж фанкойла?',
    a: 'Один настенный или кассетный фанкойл — 3–6 часов. Монтаж 5–10 фанкойлов в офисе — 1–2 рабочих дня. Крупный объект с чиллером — 5–14 дней.',
  },
  {
    q: 'Даёте ли вы гарантию на монтаж?',
    a: 'Да. На монтажные работы — гарантия 1 год. На оборудование Shuft — гарантия производителя 3 года. При проблемах в гарантийный период выезжаем бесплатно.',
  },
  {
    q: 'Можно ли заказать только подбор оборудования без монтажа?',
    a: 'Да. Подбор оборудования и консультация инженера — бесплатно. Вы можете самостоятельно выполнить монтаж или заказать его у нас.',
  },
  {
    q: 'Выезжаете ли вы за МКАД?',
    a: 'Да, выезжаем в Подмосковье и регионы. До 50 км от МКАД доставка оборудования бесплатная. За 50–100 км — рассчитывается индивидуально.',
  },
]

const stats = [
  { value: '8 лет', label: 'официальный партнёр Shuft' },
  { value: '1 200+', label: 'объектов сдано под ключ' },
  { value: '24/7', label: 'техподдержка без выходных' },
  { value: '3 года', label: 'гарантия производителя' },
]

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Услуги' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Услуги официального дилера Shuft в Москве</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Полный цикл услуг по климатическому оборудованию: подбор, проектирование, монтаж, сервис и техподдержка.
          8 лет сотрудничества с Shuft, 1 200+ сданных объектов.
        </p>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
              <div className="text-3xl font-black text-blue-600 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Услуги */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Все услуги</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden flex flex-col">
                <div className={`bg-gradient-to-br ${s.color} text-white p-6`}>
                  <div className="text-4xl mb-3">{s.icon}</div>
                  <h2 className="font-bold text-xl mb-1">{s.title}</h2>
                  <div className="text-white/80 text-sm">{s.time}</div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 text-sm mb-4">{s.desc}</p>
                  <div className="mb-4">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Что включает:</div>
                    <ul className="space-y-1">
                      {s.what.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-blue-500 font-bold mt-0.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t pt-4">
                    <span className="font-bold text-blue-600 text-lg">{s.price}</span>
                    <Link href={s.href} className="text-blue-600 hover:text-blue-800 font-medium text-sm">Подробнее →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Процесс работы */}
        <section className="mb-14 bg-blue-50 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Как мы работаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <div key={i} className="text-center relative">
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-1/2 w-full h-0.5 bg-blue-200 z-0" />
                )}
                <div className="relative z-10 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">{p.icon}</div>
                <div className="text-xs text-blue-600 font-bold mb-1">{p.step}</div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{p.title}</h3>
                <p className="text-gray-600 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Прайс-лист */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Стоимость услуг</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-4 text-left">Услуга</th>
                  <th className="p-4 text-right">Стоимость</th>
                  <th className="p-4 text-right">Срок</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Консультация и подбор оборудования', price: 'Бесплатно', time: 'В день обращения' },
                  { name: 'Монтаж настенного фанкойла', price: 'от 5 000 ₽', time: '3–6 часов' },
                  { name: 'Монтаж кассетного фанкойла', price: 'от 8 000 ₽', time: '4–8 часов' },
                  { name: 'Монтаж канального фанкойла с воздуховодами', price: 'от 12 000 ₽', time: '1 день' },
                  { name: 'Монтаж чиллера воздушного', price: 'от 25 000 ₽', time: '1–2 дня' },
                  { name: 'Проектирование VRF-системы', price: 'от 50 000 ₽', time: '3–5 дней' },
                  { name: 'Монтаж VRF-системы (объект 500 м²)', price: 'от 350 000 ₽', time: '7–14 дней' },
                  { name: 'Техническое обслуживание фанкойла', price: 'от 2 500 ₽', time: '1–2 часа' },
                  { name: 'Ремонт фанкойла (диагностика)', price: 'от 3 500 ₽', time: '1–4 часа' },
                  { name: 'Замена фильтра фанкойла', price: 'от 800 ₽', time: '30 мин' },
                  { name: 'Техподдержка 24/7 (консультации)', price: 'Бесплатно', time: '—' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 text-gray-700 border-b border-gray-100">{row.name}</td>
                    <td className="p-4 text-right font-bold text-blue-600 border-b border-gray-100">{row.price}</td>
                    <td className="p-4 text-right text-gray-500 border-b border-gray-100">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">* Цены без учёта доставки за МКАД. Точная стоимость согласовывается после выезда инженера.</p>
        </section>

        {/* Почему мы */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Почему клиенты выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🏆', title: 'Официальный партнёр Shuft', desc: 'Сертификаты дилера от производителя. Прямые поставки без наценок посредников.' },
              { icon: '👨‍🔧', title: 'Лицензированные монтажники', desc: 'Все специалисты прошли обучение в Shuft. Допуски СРО, страхование ответственности.' },
              { icon: '📋', title: 'Полная документация', desc: 'Гарантийные талоны, акты выполненных работ, схемы монтажа — для каждого проекта.' },
              { icon: '⏱️', title: 'Соблюдение сроков', desc: 'Штрафные санкции за нарушение сроков прописаны в договоре. Работаем по расписанию.' },
              { icon: '💳', title: 'Оплата любым способом', desc: 'Наличные, карта, безналичный расчёт для юридических лиц, лизинг на оборудование.' },
              { icon: '🔒', title: 'Гарантия на работы', desc: 'Гарантия 1 год на монтажные работы + 3 года на оборудование Shuft.' },
            ].map((adv, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="text-4xl mb-3">{adv.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-gray-600 text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Часто задаваемые вопросы об услугах</h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-200 shadow-sm group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-medium text-gray-900 list-none">
                  {item.q}
                  <span className="ml-4 text-blue-600 text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-600 border-t border-gray-100 pt-4">{item.a}</div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-3">Закажите услугу прямо сейчас</h2>
            <p className="text-blue-100 mb-6">
              Оставьте заявку — менеджер перезвонит в течение 15 минут. Консультация и выезд инженера бесплатно.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-3 rounded-xl text-lg">📞 +7 (495) 120-33-75</a>
              <Link href="/contacts" className="bg-orange-500 text-white font-bold px-8 py-3 rounded-xl text-lg">Оставить заявку</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
