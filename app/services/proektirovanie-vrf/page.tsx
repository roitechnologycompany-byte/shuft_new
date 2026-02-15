import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Проектирование VRF-систем Shuft в Москве — от 50 000 ₽ | Shuft.Online',
  description: 'Разработка проектов VRF-систем Shuft для офисов, ТЦ, производств. Расчёт мощностей, схема разводки, спецификация. Срок: 3–10 дней. Официальный дилер Shuft.',
  alternates: { canonical: 'https://shuft.online/services/proektirovanie-vrf/' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Проектирование VRF-систем Shuft в Москве',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Shuft.Online (ООО АСПРОМСИСТЕМ)',
    url: 'https://shuft.online',
    telephone: '+74951203375',
  },
  description: 'Разработка полного проекта мультизональной VRF-системы кондиционирования: расчёт тепловых нагрузок, подбор оборудования, схема разводки, спецификация и монтажные чертежи.',
  areaServed: { '@type': 'City', name: 'Москва' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RUB',
    priceRange: 'от 50 000 ₽',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Сколько стоит проектирование VRF?', acceptedAnswer: { '@type': 'Answer', text: 'Малые объекты до 500 м² — от 50 000 ₽, срок 3–5 дней. Средние (500–2000 м²) — от 100 000 ₽, срок 5–10 дней. Крупные — договорная стоимость.' } },
    { '@type': 'Question', name: 'Что входит в проект VRF-системы?', acceptedAnswer: { '@type': 'Answer', text: 'Анализ объекта, расчёт тепловых нагрузок, подбор внешних и внутренних блоков, схема разводки трубопроводов, монтажный чертёж, спецификация оборудования.' } },
    { '@type': 'Question', name: 'Можно ли совместить VRF с фанкойлами?', acceptedAnswer: { '@type': 'Answer', text: 'Да. Мы проектируем комбинированные системы: VRF для отдельных зон + чиллер-фанкойл для больших открытых пространств. Такой подход часто оказывается экономически выгоднее.' } },
  ],
}

const faqs = [
  { q: 'Сколько стоит проектирование VRF?', a: 'Малые объекты до 500 м² — от 50 000 ₽, срок 3–5 дней. Средние (500–2000 м²) — от 100 000 ₽, срок 5–10 дней. Крупные объекты от 2000 м² — договорная стоимость, сроки 10–20 дней.' },
  { q: 'Что входит в проект VRF-системы?', a: 'Анализ объекта и требований, расчёт тепловых нагрузок каждой зоны, подбор внешних и внутренних блоков, схема разводки трубопроводов, расчёт длин и перепадов, монтажный чертёж, спецификация с ценами.' },
  { q: 'Можно ли совместить VRF с системой фанкойл-чиллер?', a: 'Да, это практикуется. VRF — для отдельных кабинетов, переговорных, серверных. Чиллер-фанкойл — для больших открытых пространств (торговые залы, атриумы). Мы проектируем такие комбинированные системы.' },
  { q: 'Нужно ли согласовывать проект с надзорными органами?', a: 'Для большинства коммерческих объектов согласование с Роспотребнадзором или пожарными службами не требуется. Для объектов площадью свыше 3000 м² и специальных объектов — индивидуально. Помогаем с согласованием по запросу.' },
  { q: 'Проектируете под конкретный бюджет?', a: 'Да. Если у вас есть ограничение по бюджету — скажите об этом на старте. Наши инженеры подберут конфигурацию, которая даст максимальный результат в рамках бюджета.' },
  { q: 'Берёте объекты в регионах?', a: 'Проектирование делаем для любого региона России дистанционно — нам нужны планы помещений и техническое задание. Монтаж выполняем по Москве и МО.' },
]

const steps = [
  { n: '1', title: 'Анализ объекта', desc: 'Изучаем планировку, ориентацию здания, теплоизоляцию, количество людей и оборудования' },
  { n: '2', title: 'Расчёт нагрузок', desc: 'Вычисляем тепловые нагрузки каждой зоны: охлаждение летом, обогрев зимой, вентиляция' },
  { n: '3', title: 'Подбор оборудования', desc: 'Выбираем внешние и внутренние блоки Shuft VRF, согласуем спецификацию с заказчиком' },
  { n: '4', title: 'Разработка схемы', desc: 'Прокладываем трассы трубопроводов, рассчитываем длины и перепады высот' },
  { n: '5', title: 'Монтажные чертежи', desc: 'Разрабатываем монтажные чертежи для каждого этажа с обозначением всех узлов' },
  { n: '6', title: 'Спецификация', desc: 'Составляем полную спецификацию оборудования и материалов с ценами и артикулами' },
  { n: '7', title: 'Согласование', desc: 'Защищаем проект с заказчиком, вносим корректировки, фиксируем финальную версию' },
  { n: '8', title: 'Передача документации', desc: 'Передаём пакет документов: чертежи, спецификация, КП, технический паспорт системы' },
]

const pricing = [
  { type: 'Малый объект', area: 'до 500 м²', time: '3–5 дней', price: 'от 50 000 ₽' },
  { type: 'Средний объект', area: '500–2 000 м²', time: '5–10 дней', price: 'от 100 000 ₽' },
  { type: 'Крупный объект', area: 'от 2 000 м²', time: '10–20 дней', price: 'Договорная' },
]

export default function ProektirovaniePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Услуги', href: '/services' }, { name: 'Проектирование VRF' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Проектирование VRF-систем Shuft в Москве</h1>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Наши инженеры разработают полный проект мультизональной системы кондиционирования для вашего объекта.
          Расчёт мощностей, схема разводки, монтажные чертежи, спецификация — всё под ключ.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">

            {/* Steps */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Этапы проектирования</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{step.n}</div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{step.title}</div>
                    <div className="text-gray-500 text-sm">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Стоимость проектирования</h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="py-3 px-4 text-left rounded-tl-lg">Объект</th>
                    <th className="py-3 px-4 text-left">Площадь</th>
                    <th className="py-3 px-4 text-left">Срок</th>
                    <th className="py-3 px-4 text-left rounded-tr-lg">Стоимость</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-3 px-4 font-medium text-gray-900">{row.type}</td>
                      <td className="py-3 px-4 text-gray-600">{row.area}</td>
                      <td className="py-3 px-4 text-gray-600">{row.time}</td>
                      <td className="py-3 px-4 font-bold text-blue-600">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm mb-10">* Предварительный расчёт тепловых нагрузок — бесплатно. Стоимость уточняется после анализа технического задания.</p>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4">
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
          </div>

          <div>
            <div className="sticky top-20 space-y-6">
              <ContactForm title="Запросить проектирование VRF" subtitle="Опишите объект — подготовим предварительный расчёт бесплатно" variant="sidebar" />

              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-4">Преимущества</h3>
                <ul className="space-y-3 text-sm">
                  {['12 лет опыта главного инженера', 'Официальный дилер — прямые цены', '80+ спроектированных VRF-систем', 'Проект за 3–5 дней', 'Бесплатный предварительный расчёт', 'Гарантия корректной работы системы'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-green-300">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
