import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Техническая поддержка 24/7 фанкойлов и чиллеров Shuft | Shuft.Online',
  description: 'Круглосуточная техподдержка по оборудованию Shuft в Москве. Телефон, email, выезд мастера. Консультации по настройке, диагностике и ремонту. Бесплатно для наших клиентов.',
  alternates: { canonical: 'https://shuft.online/services/tehpodderzhka/' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Техническая поддержка 24/7 оборудования Shuft',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Shuft.Online (ООО АСПРОМСИСТЕМ)',
    url: 'https://shuft.online',
    telephone: '+74951203375',
  },
  description: 'Круглосуточная техническая поддержка по фанкойлам, чиллерам и VRF-системам Shuft. Настройка, диагностика, консультации по телефону и выезд специалиста.',
  areaServed: { '@type': 'City', name: 'Москва' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB', description: 'Бесплатно для клиентов' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Техподдержка платная?', acceptedAnswer: { '@type': 'Answer', text: 'Консультации по телефону и email — бесплатно для всех клиентов, которые купили оборудование у нас. Выезд специалиста — платный, стоимость зависит от района.' } },
    { '@type': 'Question', name: 'Как быстро отвечает техподдержка?', acceptedAnswer: { '@type': 'Answer', text: 'По телефону — мгновенно, круглосуточно. По email — в течение 2 часов. Выезд мастера — в течение суток в рабочие дни.' } },
    { '@type': 'Question', name: 'Какие вопросы решает техподдержка?', acceptedAnswer: { '@type': 'Answer', text: 'Настройка термостата, диагностика кодов ошибок, вопросы по ТО, подбор запчастей, аварийные ситуации, консультации по модернизации системы.' } },
  ],
}

const faqs = [
  { q: 'Техподдержка платная?', a: 'Консультации по телефону и email — бесплатно для всех клиентов, купивших оборудование у нас. Выезд специалиста — платный: 2 000–3 500 ₽ по Москве, в зависимости от района.' },
  { q: 'Как быстро отвечают?', a: 'По телефону — мгновенно, линия работает 24/7. По email — в течение 2 часов. Выезд мастера по Москве — в течение суток в рабочие дни, в срочных случаях — в тот же день.' },
  { q: 'Что делать, если фанкойл мигает ошибкой?', a: 'Позвоните +7 (495) 120-33-75 или сфотографируйте дисплей/пульт и отправьте на info@shuft.online. Наш инженер расшифрует код ошибки и подскажет, что делать. В большинстве случаев проблема решается по телефону.' },
  { q: 'Работаете в выходные и праздники?', a: 'Да. Телефонная линия и email работают круглосуточно, 365 дней в году. Выезд мастера в выходные — по согласованию, с доплатой 20%.' },
  { q: 'Поддерживаете оборудование других брендов?', a: 'Специализируемся исключительно на Shuft. По другим брендам можем дать общую консультацию, но гарантировать точность диагностики не можем.' },
  { q: 'Как получить гарантийный ремонт?', a: 'Позвоните на горячую линию, опишите проблему и укажите дату покупки. Если случай гарантийный — выезд мастера бесплатно, запчасти за счёт производителя.' },
]

const channels = [
  { icon: '📞', title: 'Телефон', value: '+7 (495) 120-33-75', detail: 'Круглосуточно, 24/7', link: 'tel:+74951203375', cta: 'Позвонить', color: 'bg-blue-600 text-white' },
  { icon: '✉️', title: 'Email', value: 'info@shuft.online', detail: 'Ответ в течение 2 часов', link: 'mailto:info@shuft.online', cta: 'Написать', color: 'bg-white border-2 border-blue-200 text-gray-900' },
  { icon: '🔧', title: 'Выезд мастера', value: 'По Москве и МО', detail: 'В течение суток', link: '#request', cta: 'Заявка', color: 'bg-white border-2 border-blue-200 text-gray-900' },
]

const capabilities = [
  { icon: '⚙️', title: 'Настройка и запуск', desc: 'Первичная настройка термостата, режимов работы, температурных порогов. Пуск-наладка после монтажа.' },
  { icon: '🔍', title: 'Диагностика по телефону', desc: 'Расшифровка кодов ошибок дисплея, определение причины неисправности без выезда специалиста.' },
  { icon: '📋', title: 'Плановое ТО', desc: 'Напоминания о сезонном обслуживании, рекомендации по частоте чистки фильтров и промывки теплообменника.' },
  { icon: '🛒', title: 'Подбор запчастей', desc: 'Помогаем идентифицировать нужную деталь, проверяем наличие на складе, оформляем заказ.' },
  { icon: '🚨', title: 'Аварийная помощь', desc: 'Утечка воды, остановка оборудования, резкие запахи — консультируем немедленно, при необходимости экстренный выезд.' },
  { icon: '📈', title: 'Консультации по модернизации', desc: 'Подскажем, как расширить систему, добавить зоны управления или перевести на Smart-термостаты.' },
]

export default function TehpodderzhkaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Услуги', href: '/services' }, { name: 'Техподдержка 24/7' }]} />

        {/* Hero */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Техническая поддержка 24/7 фанкойлов Shuft</h1>
          <p className="text-gray-600 text-lg max-w-3xl">
            Наши инженеры на связи круглосуточно. Помогаем с настройкой, диагностикой и вопросами по
            эксплуатации всех фанкойлов, чиллеров и VRF-систем Shuft. Консультации по телефону — бесплатно.
          </p>
        </div>

        {/* Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {channels.map((ch, i) => (
            <div key={i} className={`rounded-2xl p-6 text-center ${ch.color} shadow-sm`}>
              <div className="text-4xl mb-3">{ch.icon}</div>
              <h3 className="font-bold text-xl mb-2">{ch.title}</h3>
              <a href={ch.link} className="text-lg font-semibold block mb-1 hover:underline">{ch.value}</a>
              <p className={`text-sm mb-4 ${ch.color.includes('text-white') ? 'text-blue-200' : 'text-gray-500'}`}>{ch.detail}</p>
              <a href={ch.link} className={`inline-block px-6 py-2 rounded-lg font-medium text-sm transition-colors ${ch.color.includes('text-white') ? 'bg-white text-blue-600 hover:bg-blue-50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                {ch.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Capabilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Что решаем по телефону и email</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl flex-shrink-0">{cap.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{cap.title}</h3>
                  <p className="text-gray-600 text-sm">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SLA table */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Время реакции</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-4 text-left rounded-tl-lg">Тип обращения</th>
                  <th className="py-3 px-4 text-left">Канал</th>
                  <th className="py-3 px-4 text-left rounded-tr-lg">Время ответа</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { type: 'Вопрос по настройке', channel: 'Телефон', time: 'Мгновенно' },
                  { type: 'Код ошибки / диагностика', channel: 'Телефон / Email', time: 'До 15 минут' },
                  { type: 'Консультация по ТО', channel: 'Email', time: 'До 2 часов' },
                  { type: 'Аварийная ситуация', channel: 'Телефон', time: 'Мгновенно' },
                  { type: 'Выезд мастера (Москва)', channel: 'Телефон + заявка', time: 'До 24 часов' },
                  { type: 'Выезд мастера (МО)', channel: 'Телефон + заявка', time: 'До 48 часов' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-3 px-4 text-gray-900 font-medium">{row.type}</td>
                    <td className="py-3 px-4 text-gray-500">{row.channel}</td>
                    <td className="py-3 px-4">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">{row.time}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Часто задаваемые вопросы</h2>
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

        {/* CTA */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Нужна помощь прямо сейчас?</h2>
          <p className="text-blue-200 mb-6">Инженер ответит в течение 5 минут</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+74951203375" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors">
              📞 +7 (495) 120-33-75
            </a>
            <a href="mailto:info@shuft.online" className="bg-orange-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors">
              ✉️ info@shuft.online
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
