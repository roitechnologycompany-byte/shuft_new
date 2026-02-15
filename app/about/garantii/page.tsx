import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Гарантийные условия на оборудование Shuft | Shuft.Online',
  description: 'Гарантия производителя 3 года на все фанкойлы, чиллеры и VRF-системы Shuft. Условия гарантии, что включено, техподдержка 24/7.',
  alternates: { canonical: 'https://shuft.online/about/garantii/' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shuft.Online (ООО АСПРОМСИСТЕМ)',
  url: 'https://shuft.online',
  telephone: '+74951203375',
  email: 'info@shuft.online',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Гарантийные условия на оборудование Shuft',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Какой срок гарантии на фанкойлы Shuft?', acceptedAnswer: { '@type': 'Answer', text: 'Гарантия производителя — 3 года на все фанкойлы, чиллеры и VRF-системы Shuft при покупке у официального дилера. Гарантия начинается с даты продажи.' } },
    { '@type': 'Question', name: 'Что входит в гарантийное обслуживание?', acceptedAnswer: { '@type': 'Answer', text: 'Бесплатный ремонт или замена при заводском браке, бесплатная диагностика, оригинальные запчасти Shuft по гарантии, выезд специалиста в Москве.' } },
    { '@type': 'Question', name: 'При каких условиях гарантия не действует?', acceptedAnswer: { '@type': 'Answer', text: 'Механические повреждения, неправильный монтаж не нашими специалистами, нарушение условий эксплуатации, самостоятельный ремонт, работа с неподходящими параметрами водяного контура.' } },
  ],
}

const faqs = [
  { q: 'Какой срок гарантии на фанкойлы Shuft?', a: 'Гарантия производителя — 3 года на все фанкойлы, чиллеры и VRF-системы Shuft. Гарантийный период начинается с даты продажи и действует при соблюдении условий эксплуатации. При покупке у официального дилера гарантия полностью обеспечена.' },
  { q: 'Что входит в гарантийное обслуживание?', a: 'Бесплатный ремонт или замена оборудования при заводском браке, бесплатная диагностика неисправностей, оригинальные запчасти Shuft за счёт производителя, выезд специалиста на объект в пределах Москвы.' },
  { q: 'При каких условиях гарантия не действует?', a: 'Гарантия не распространяется на: механические повреждения от внешних воздействий; неисправности из-за монтажа сторонними специалистами без лицензии СРО; нарушения условий эксплуатации; самостоятельный ремонт или вмешательство в конструкцию; несоответствие параметров водяного контура требованиям технической документации.' },
  { q: 'Как оформить гарантийный случай?', a: 'Позвоните на горячую линию +7 (495) 120-33-75 или напишите на info@shuft.online. Опишите проблему и укажите дату покупки. Наш специалист выедет на диагностику. Если случай гарантийный — ремонт бесплатно, запчасти за счёт производителя.' },
  { q: 'Нужно ли хранить гарантийный талон?', a: 'Да. Гарантийный талон подтверждает дату покупки и является основанием для гарантийного обслуживания. Также сохраняйте кассовый чек или накладную. Без этих документов гарантийный случай может быть не признан.' },
  { q: 'Действует ли гарантия, если монтаж выполняла другая организация?', a: 'Гарантия производителя действует при условии, что монтаж выполнен специалистами с лицензией СРО в соответствии с инструкцией. Если монтировала компания без лицензии или с нарушением технологии — гарантия на части, связанные с монтажом, может быть аннулирована.' },
]

export default function GarantiiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'О компании', href: '/about' }, { name: 'Гарантии' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Гарантийные условия на оборудование Shuft</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          Мы обеспечиваем полную гарантийную поддержку на всё оборудование Shuft, приобретённое у нас.
          Официальный дилер — единственная гарантия подлинной гарантии производителя.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { val: '3 года', lbl: 'Гарантия производителя' },
            { val: '24/7', lbl: 'Техническая поддержка' },
            { val: '150+', lbl: 'Позиций запчастей в наличии' },
          ].map((s, i) => (
            <div key={i} className="bg-blue-600 text-white rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold">{s.val}</div>
              <div className="text-blue-200 mt-1 text-sm">{s.lbl}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6 mb-12">
          {/* What's included */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Что входит в гарантию</h2>
            <ul className="space-y-3">
              {[
                'Бесплатный ремонт или замена оборудования при заводском браке',
                'Бесплатная диагностика неисправностей специалистом',
                'Оригинальные запчасти Shuft за счёт производителя',
                'Выезд мастера на объект в пределах Москвы',
                'Гарантия распространяется на все компоненты: мотор, теплообменник, помпа, плата управления',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Условия действия гарантии</h2>
            <ul className="space-y-3">
              {[
                'Монтаж выполнен сертифицированными специалистами (лицензия СРО)',
                'Оборудование эксплуатировалось согласно инструкции производителя',
                'Регулярное техническое обслуживание (не реже 1 раза в год)',
                'Гарантийный талон и документы о покупке сохранены',
                'Подключение к водяному контуру с правильными параметрами',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-blue-500 flex-shrink-0">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What's not covered */}
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">На что гарантия не распространяется</h2>
            <ul className="space-y-3">
              {[
                'Механические повреждения от внешних воздействий',
                'Неисправности из-за монтажа без лицензии СРО',
                'Нарушения условий эксплуатации (перегрузка, запрещённые режимы)',
                'Самостоятельный ремонт и вмешательство в конструкцию',
                'Естественный износ расходных элементов (фильтры, уплотнения)',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-orange-500 font-bold flex-shrink-0">✗</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How to claim */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Как оформить гарантийный случай</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { n: '1', title: 'Позвоните', desc: 'Позвоните на горячую линию +7 (495) 120-33-75 или напишите на email — опишите проблему' },
                { n: '2', title: 'Диагностика', desc: 'Наш инженер выедет на объект или проведёт дистанционную диагностику по телефону' },
                { n: '3', title: 'Ремонт', desc: 'Если случай гарантийный — ремонт выполняется бесплатно, запчасти за счёт производителя' },
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{step.n}</div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{step.title}</div>
                    <div className="text-gray-600 text-sm">{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Частые вопросы о гарантии</h2>
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

        {/* CTA */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Техническая поддержка 24/7</h2>
          <p className="text-gray-700 mb-6">Наши специалисты помогут с вопросами по настройке, эксплуатации и гарантийному обслуживанию фанкойлов Shuft в любое время.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+74951203375" className="btn-primary">📞 +7 (495) 120-33-75</a>
            <a href="mailto:info@shuft.online" className="btn-secondary">✉️ info@shuft.online</a>
            <Link href="/services/servis-i-remont" className="btn-secondary">Сервис и ремонт</Link>
          </div>
        </div>
      </div>
    </>
  )
}
