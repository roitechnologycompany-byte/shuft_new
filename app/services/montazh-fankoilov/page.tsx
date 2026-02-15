import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Монтаж фанкойлов Shuft в Москве — цены и сроки | Shuft.Online',
  description: 'Профессиональный монтаж фанкойлов Shuft в Москве. Лицензированные специалисты СРО, установка за 1–3 дня. Цена от 5 000 ₽. Гарантия на работы 6 мес.',
  alternates: { canonical: 'https://shuft.online/services/montazh-fankoilov/' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Монтаж фанкойлов Shuft в Москве',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Shuft.Online (ООО АСПРОМСИСТЕМ)',
    url: 'https://shuft.online',
    telephone: '+74951203375',
  },
  description: 'Профессиональный монтаж настенных, кассетных, канальных и напольно-потолочных фанкойлов Shuft в Москве. Специалисты с лицензией СРО.',
  areaServed: { '@type': 'City', name: 'Москва' },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RUB',
    priceRange: 'от 5 000 ₽',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Сколько стоит монтаж фанкойла Shuft?', acceptedAnswer: { '@type': 'Answer', text: 'Настенный фанкойл — 5 000–7 000 ₽, кассетный — 10 000–16 000 ₽, канальный — 7 000–12 000 ₽. Окончательная цена определяется после осмотра объекта. Выезд инженера — бесплатно.' } },
    { '@type': 'Question', name: 'Как долго длится монтаж?', acceptedAnswer: { '@type': 'Answer', text: 'Настенный фанкойл монтируется за 1 день, кассетный — 2–3 дня, канальный — 1–2 дня. Сроки зависят от количества оборудования и сложности объекта.' } },
    { '@type': 'Question', name: 'Есть ли гарантия на монтаж?', acceptedAnswer: { '@type': 'Answer', text: 'Да. Гарантия на монтажные работы — 6 месяцев. На оборудование Shuft — гарантия производителя 3 года. Действует только при монтаже нашими специалистами.' } },
  ],
}

const prices = [
  { type: 'Настенный фанкойл', time: '1 день', price: '5 000–7 000 ₽' },
  { type: 'Канальный фанкойл', time: '1–2 дня', price: '7 000–12 000 ₽' },
  { type: 'Кассетный фанкойл', time: '2–3 дня', price: '10 000–16 000 ₽' },
  { type: 'Напольно-потолочный', time: '1 день', price: '6 000–9 000 ₽' },
  { type: 'Система чиллер + фанкойлы', time: '3–7 дней', price: 'Индивидуально' },
]

const steps = [
  { num: '01', title: 'Заявка', desc: 'Оставьте заявку на сайте или позвоните. Уточним детали проекта и тип оборудования.' },
  { num: '02', title: 'Выезд инженера', desc: 'Бесплатный выезд специалиста для обмера, оценки объёма работ и согласования трассировки.' },
  { num: '03', title: 'Смета за 24 ч', desc: 'Готовим смету в течение 24 часов. Фиксируем стоимость до начала работ.' },
  { num: '04', title: 'Монтаж', desc: 'Лицензированные монтажники СРО выполняют установку за 1–3 дня без мусора и повреждений.' },
  { num: '05', title: 'Пусконаладка', desc: 'Проверяем работу системы, настраиваем параметры, обучаем управлению.' },
  { num: '06', title: 'Гарантия', desc: 'Выдаём акт выполненных работ и гарантийный талон. Гарантия на монтаж — 6 мес.' },
]

const faqs = [
  { q: 'Сколько стоит монтаж фанкойла Shuft?', a: 'Настенный фанкойл — 5 000–7 000 ₽, кассетный — 10 000–16 000 ₽, канальный — 7 000–12 000 ₽, напольно-потолочный — 6 000–9 000 ₽. Цена включает все монтажные работы, но не материалы (трубы, крепёж). Окончательная стоимость определяется после выезда инженера.' },
  { q: 'Как долго длится монтаж одного фанкойла?', a: 'Настенный фанкойл — 1 рабочий день. Кассетный (встройка в потолок) — 2–3 дня из-за сложности потолочных работ. Канальный и напольно-потолочный — 1–2 дня. При монтаже нескольких единиц одновременно сроки сокращаются.' },
  { q: 'Есть ли гарантия на монтажные работы?', a: 'Да. Гарантия на все выполненные монтажные работы — 6 месяцев. На оборудование Shuft действует гарантия производителя 3 года. Гарантия на оборудование действует только при монтаже нашими специалистами с лицензией СРО.' },
  { q: 'Нужна ли лицензия для монтажа фанкойлов на коммерческом объекте?', a: 'Да, для коммерческих объектов обязательна лицензия СРО на монтаж климатического оборудования. Наши монтажники имеют допуски СРО-С-093-21082018. Без лицензированных специалистов акт сдачи-приёмки объекта не будет принят.' },
  { q: 'Входит ли трассировка труб в стоимость?', a: 'Стоимость монтажа включает подключение фанкойла к существующему контуру. Прокладка новых медных труб, слив конденсата и электрических кабелей рассчитывается отдельно по смете (от 600 ₽/п.м.).' },
  { q: 'Вы работаете на объектах с уже работающей системой?', a: 'Да. Выполняем расширение существующих систем чиллер-фанкойл: добавляем новые фанкойлы в контур, балансируем систему, обновляем автоматику. Перед работой проводим диагностику состояния системы.' },
]

export default function MontazhPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumbs items={[
          { name: 'Главная', href: '/' },
          { name: 'Услуги', href: '/services' },
          { name: 'Монтаж фанкойлов' },
        ]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Монтаж фанкойлов Shuft в Москве</h1>
        <p className="text-gray-600 text-lg mb-12 max-w-3xl">
          Профессиональная установка фанкойлов Shuft лицензированными специалистами СРО.
          Монтаж за 1–3 дня, гарантия на работы 6 месяцев, пусконаладка в комплекте.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { val: '1–3 дня', lbl: 'Срок монтажа' },
                { val: 'СРО', lbl: 'Лицензия на монтаж' },
                { val: '6 мес.', lbl: 'Гарантия на работы' },
                { val: '150+', lbl: 'Выполненных монтажей' },
              ].map((s, i) => (
                <div key={i} className="bg-blue-600 text-white rounded-2xl p-5 text-center">
                  <div className="text-2xl font-bold">{s.val}</div>
                  <div className="text-blue-200 text-xs mt-1">{s.lbl}</div>
                </div>
              ))}
            </div>

            {/* Price table */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Стоимость монтажа фанкойлов</h2>
            <p className="text-gray-500 text-sm mb-4">Окончательная цена определяется после выезда инженера. Выезд — бесплатно.</p>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden mb-10">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="text-left p-4 font-semibold">Тип фанкойла</th>
                      <th className="text-left p-4 font-semibold">Срок монтажа</th>
                      <th className="text-left p-4 font-semibold">Стоимость</th>
                      <th className="p-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {prices.map((p, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="p-4 font-medium text-gray-900">{p.type}</td>
                        <td className="p-4 text-gray-600">{p.time}</td>
                        <td className="p-4 font-bold text-blue-600">{p.price}</td>
                        <td className="p-4">
                          <a href="tel:+74951203375" className="btn-primary text-sm py-2">Заказать</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Steps */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Как проходит монтаж</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
              {steps.map((step, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="text-4xl font-black text-blue-100 mb-2">{step.num}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>

            {/* What's included */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Что входит в стоимость монтажа</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Подключение к водяному контуру',
                  'Подключение к электропитанию',
                  'Подключение дренажа (конденсат)',
                  'Настройка термостата и управления',
                  'Пробный запуск и проверка всех режимов',
                  'Балансировка по расходу теплоносителя',
                  'Инструктаж по управлению системой',
                  'Акт выполненных работ',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 text-sm">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* FAQ */}
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы</h2>
            <div className="space-y-4 mb-10">
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

            <div className="bg-gray-50 rounded-2xl p-8">
              <ContactForm title="Заказать монтаж фанкойла Shuft" subtitle="Бесплатный выезд инженера для обмера и оценки. Смета за 24 часа." />
            </div>
          </div>

          <div>
            <div className="sticky top-20 space-y-6">
              <div className="bg-blue-600 text-white rounded-2xl p-6">
                <h3 className="font-bold text-xl mb-4">Почему выбирают нас</h3>
                <ul className="space-y-3 text-sm mb-6">
                  {[
                    'Лицензия СРО на монтаж климатики',
                    'Официальный дилер Shuft',
                    'Монтажники с 10+ лет опыта',
                    '150+ выполненных монтажей',
                    'Гарантия 6 мес. на работы',
                    'Выезд инженера — бесплатно',
                  ].map((item, i) => (
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
                <h3 className="font-bold text-gray-900 mb-2">Монтаж под ключ</h3>
                <p className="text-gray-600 text-sm mb-4">Купите оборудование и закажите монтаж у нас — единый договор, единая ответственность, скидка на монтаж.</p>
                <Link href="/services/podbor-oborudovaniya" className="btn-secondary w-full text-center block text-sm">
                  Подобрать оборудование
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
