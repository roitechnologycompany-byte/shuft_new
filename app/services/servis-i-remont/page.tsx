import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Сервис и ремонт фанкойлов Shuft в Москве — выезд в день обращения | Shuft.Online',
  description: 'Техническое обслуживание и ремонт фанкойлов Shuft в Москве. Чистка, диагностика, замена запчастей. Оригинальные компоненты, гарантия на работы. Выезд мастера в день заявки.',
  alternates: { canonical: 'https://shuft.online/services/servis-i-remont/' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Сервис и ремонт фанкойлов Shuft в Москве',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Shuft.Online (ООО АСПРОМСИСТЕМ)',
    url: 'https://shuft.online',
    telephone: '+74951203375',
  },
  description: 'Профессиональное техническое обслуживание и ремонт фанкойлов, чиллеров и VRF-систем Shuft в Москве. Оригинальные запчасти, выезд в день обращения.',
  areaServed: { '@type': 'City', name: 'Москва' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RUB',
    priceRange: 'от 1 500 ₽',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Как часто нужно обслуживать фанкойл Shuft?', acceptedAnswer: { '@type': 'Answer', text: 'Рекомендуем ТО 2 раза в год: весной перед сезоном охлаждения и осенью перед сезоном обогрева. Минимум — 1 раз в год.' } },
    { '@type': 'Question', name: 'Сколько стоит вызов мастера?', acceptedAnswer: { '@type': 'Answer', text: 'Диагностика на месте — 2 500 ₽. При ремонте диагностика входит в стоимость работ. ТО одного фанкойла — 4 000 ₽.' } },
    { '@type': 'Question', name: 'Есть ли гарантия на ремонт?', acceptedAnswer: { '@type': 'Answer', text: 'Да. Гарантия на все выполненные работы — 6 месяцев. На замену запчастей — гарантия производителя (1–2 года в зависимости от компонента).' } },
  ],
}

const services = [
  { name: 'Чистка воздушного фильтра', time: '30 мин', price: '1 500 ₽' },
  { name: 'Промывка теплообменника', time: '1–2 часа', price: '3 500 ₽' },
  { name: 'Диагностика неисправностей', time: '1 час', price: '2 500 ₽' },
  { name: 'Техническое обслуживание (ТО)', time: '2–3 часа', price: '4 000 ₽' },
  { name: 'Замена вентилятора', time: '2 часа', price: '5 000–8 000 ₽' },
  { name: 'Замена термостата / пульта', time: '1 час', price: '3 000–6 000 ₽' },
  { name: 'Замена дренажного насоса', time: '1.5 часа', price: '4 000–7 000 ₽' },
  { name: 'Замена воздушного клапана', time: '1 час', price: '3 000–5 000 ₽' },
  { name: 'Ремонт дренажной системы', time: '1.5–2 часа', price: '3 500–6 000 ₽' },
  { name: 'Сезонный пуск / останов системы', time: '2–3 часа', price: '5 000–8 000 ₽' },
]

const faqs = [
  { q: 'Как часто нужно обслуживать фанкойл Shuft?', a: 'Рекомендуем ТО 2 раза в год: весной перед сезоном охлаждения (апрель–май) и осенью перед сезоном обогрева (сентябрь–октябрь). Минимум — 1 раз в год. При работе в запылённых помещениях — раз в квартал.' },
  { q: 'Диагностика платная?', a: 'При последующем ремонте стоимость диагностики (2 500 ₽) входит в цену работ и отдельно не оплачивается. Если вы решили не делать ремонт — оплачивается только диагностика.' },
  { q: 'Есть ли гарантия на ремонт?', a: 'Да. Гарантия на все выполненные работы — 6 месяцев. На замену запчастей — гарантия производителя от 1 года. Работаем с юрлицами: договор, акт выполненных работ, счёт.' },
  { q: 'Вы используете оригинальные запчасти?', a: 'Исключительно оригинальные запчасти Shuft. На нашем складе более 150 позиций: фильтры, клапаны, термостаты, помпы, вентиляторы. В 90% случаев деталь есть в наличии.' },
  { q: 'Сколько ждать мастера?', a: 'По Москве — мастер приедет в течение суток в рабочие дни. Запись на конкретное время — при заявке по телефону. В экстренных случаях — экспресс-выезд в тот же день.' },
  { q: 'Делаете ТО для юридических лиц?', a: 'Да. Работаем с ООО, ИП, бюджетными организациями. Предоставляем все закрывающие документы: договор, акт, счёт-фактура, накладная на запчасти.' },
]

export default function ServisIRemontPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Услуги', href: '/services' }, { name: 'Сервис и ремонт' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Сервис и ремонт фанкойлов Shuft в Москве</h1>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Профессиональное ТО и ремонт фанкойлов, чиллеров и VRF-систем Shuft. Оригинальные запчасти со склада,
          гарантия на работы 6 месяцев. Выезд мастера по Москве в день обращения.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { val: '24ч', lbl: 'Выезд мастера' },
                { val: '150+', lbl: 'Запчастей на складе' },
                { val: '6 мес.', lbl: 'Гарантия на работы' },
                { val: '8 лет', lbl: 'Опыт сервиса Shuft' },
              ].map((s, i) => (
                <div key={i} className="bg-blue-600 text-white rounded-2xl p-5 text-center">
                  <div className="text-2xl font-bold">{s.val}</div>
                  <div className="text-blue-200 text-xs mt-1">{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* Price list */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Прайс-лист на сервисные работы</h2>
            <p className="text-gray-500 text-sm mb-4">Цены указаны за работу, без учёта стоимости запчастей. При ремонте — диагностика бесплатно.</p>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-10">
              <div className="bg-gray-800 text-white px-6 py-4">
                <div className="grid grid-cols-3 text-sm font-semibold">
                  <span>Услуга</span>
                  <span>Время</span>
                  <span>Стоимость</span>
                </div>
              </div>
              {services.map((s, i) => (
                <div key={i} className={`grid grid-cols-3 px-6 py-3 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                  <span className="text-gray-900">{s.name}</span>
                  <span className="text-gray-500">{s.time}</span>
                  <span className="font-bold text-blue-600">{s.price}</span>
                </div>
              ))}
            </div>

            {/* What's included in TO */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Что входит в плановое ТО</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Чистка и промывка воздушного фильтра',
                  'Осмотр и промывка теплообменника',
                  'Проверка дренажного поддона и помпы',
                  'Контроль режимов работы термостата',
                  'Замер потребляемой мощности',
                  'Проверка уровня шума',
                  'Осмотр соединений трубопроводов',
                  'Рекомендации по дальнейшей эксплуатации',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="text-green-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
            <div className="space-y-4 mb-8">
              {faqs.map((faq, i) => (
                <details key={i} className="bg-white border border-gray-200 rounded-xl group shadow-sm">
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-gray-900 hover:text-blue-600">
                    <span>{faq.q}</span>
                    <span className="text-blue-600 group-open:rotate-180 transition-transform ml-4 flex-shrink-0">▼</span>
                  </summary>
                  <div className="px-5 pb-5 text-gray-600">{faq.a}</div>
                </details>
              ))}
            </div>

            <ContactForm title="Вызвать мастера по ремонту Shuft" subtitle="Мастер приедет в течение суток в рабочие дни" />
          </div>

          <div>
            <div className="sticky top-20 space-y-6">
              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-4">Почему доверяют нам</h3>
                <ul className="space-y-3 text-sm mb-6">
                  {['Официальный дилер Shuft', 'Оригинальные запчасти на складе', 'Гарантия на работы 6 месяцев', 'Выезд в день обращения', 'Диагностика бесплатно при ремонте', 'Работаем с юрлицами (договор, акт)'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> {item}
                    </li>
                  ))}
                </ul>
                <a href="tel:+74951203375" className="block text-center bg-white text-blue-600 font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                  📞 +7 (495) 120-33-75
                </a>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Договор на ТО</h3>
                <p className="text-gray-600 text-sm mb-4">Заключите годовой договор на техническое обслуживание — экономия 15% и приоритетный выезд.</p>
                <a href="mailto:info@shuft.online" className="btn-secondary w-full text-center block text-sm">
                  Запросить договор
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
