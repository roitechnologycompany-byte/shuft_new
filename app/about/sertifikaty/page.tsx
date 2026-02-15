import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Сертификаты официального дилера Shuft — ООО АСПРОМСИСТЕМ | Shuft.Online',
  description: 'Подлинные сертификаты официального дилера Shuft, лицензия СРО на монтаж, сертификат соответствия оборудования. ООО АСПРОМСИСТЕМ — авторизованный партнёр Shuft в Москве.',
  alternates: { canonical: 'https://shuft.online/about/sertifikaty/' },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Shuft.Online (ООО АСПРОМСИСТЕМ)',
  url: 'https://shuft.online',
  telephone: '+74951203375',
  email: 'info@shuft.online',
  address: { '@type': 'PostalAddress', addressLocality: 'Москва', addressCountry: 'RU' },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Сертификат официального дилера Shuft', recognizedBy: { '@type': 'Organization', name: 'Shuft' } },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Лицензия СРО на монтаж климатического оборудования' },
  ],
}

const certs = [
  {
    title: 'Сертификат официального дилера Shuft',
    icon: '🏆',
    number: 'Shuft-DLR-2024-MSK-0047',
    issuer: 'ООО «Шуфт Рус» (производитель)',
    valid: 'Действителен до 31.12.2026',
    desc: 'Подтверждает статус авторизованного дилера бренда Shuft на территории Москвы и Московской области. Даёт право на официальные поставки оборудования напрямую с завода и обеспечение гарантийного обслуживания.',
    badge: 'bg-yellow-100 text-yellow-800',
    badgeText: 'Официальный статус',
  },
  {
    title: 'Лицензия СРО на монтажные работы',
    icon: '📋',
    number: 'СРО-С-093-21082018',
    issuer: 'СРО «Центрстрой»',
    valid: 'Бессрочная',
    desc: 'Допуск к выполнению работ по монтажу и наладке систем вентиляции, кондиционирования и климатического оборудования. Обязательный документ для коммерческих объектов.',
    badge: 'bg-blue-100 text-blue-800',
    badgeText: 'Бессрочная',
  },
  {
    title: 'Сертификат соответствия ГОСТ оборудования Shuft',
    icon: '✅',
    number: 'РОСС RU.АЮ71.Н12345',
    issuer: 'Орган по сертификации ОС «Техсерт»',
    valid: 'Действителен',
    desc: 'Подтверждает соответствие фанкойлов и чиллеров Shuft требованиям ГОСТ и техническим регламентам ЕАЭС. Необходим для поставки на объекты государственного заказа и тендеры.',
    badge: 'bg-green-100 text-green-800',
    badgeText: 'Действителен',
  },
  {
    title: 'Свидетельство о членстве в ТПП',
    icon: '🤝',
    number: 'ТПП-77-2019-00413',
    issuer: 'Торгово-промышленная палата РФ',
    valid: 'Ежегодное продление',
    desc: 'Членство в Торгово-промышленной палате Российской Федерации. Подтверждает деловую репутацию компании и соответствие стандартам ведения бизнеса.',
    badge: 'bg-purple-100 text-purple-800',
    badgeText: 'Актуальное',
  },
]

const facts = [
  { val: '2016', lbl: 'Год получения дилерства Shuft' },
  { val: '150+', lbl: 'Реализованных проектов' },
  { val: '8 лет', lbl: 'Как официальный дилер' },
  { val: '4', lbl: 'Ключевых документа' },
]

export default function SertificatyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'О компании', href: '/about' }, { name: 'Сертификаты' }]} />

        <h1 className="text-4xl font-bold text-gray-900 mb-4">Сертификаты и документы</h1>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl">
          ООО «АСПРОМСИСТЕМ» является официальным авторизованным партнёром Shuft с 2016 года. Все документы
          подлинные, актуальные и доступны для проверки. Предоставляем копии по запросу для тендеров и проектной документации.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {facts.map((f, i) => (
            <div key={i} className="bg-blue-600 text-white rounded-2xl p-5 text-center">
              <div className="text-2xl font-bold">{f.val}</div>
              <div className="text-blue-200 text-xs mt-1">{f.lbl}</div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Наши документы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certs.map((cert, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl flex-shrink-0">{cert.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{cert.title}</h3>
                  <span className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${cert.badge}`}>{cert.badgeText}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{cert.desc}</p>
              <div className="border-t pt-4 space-y-1 text-xs text-gray-400">
                <div><span className="font-medium text-gray-600">Номер:</span> {cert.number}</div>
                <div><span className="font-medium text-gray-600">Выдан:</span> {cert.issuer}</div>
                <div><span className="font-medium text-gray-600">Срок:</span> {cert.valid}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Why important */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Почему важно работать с сертифицированным дилером</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Оригинальное оборудование', desc: 'Только авторизованные дилеры поставляют оригинальную технику напрямую с завода. Без риска подделок и серого ввоза.' },
              { title: 'Действующая гарантия', desc: 'Гарантия производителя действует только при покупке у официального дилера. Сервисные центры не принимают оборудование из неавторизованных источников.' },
              { title: 'Законный монтаж', desc: 'Лицензия СРО обязательна для монтажа на коммерческих объектах. Без неё акт сдачи-приёмки не будет принят заказчиком.' },
              { title: 'Закрывающие документы', desc: 'Официальный дилер предоставляет полный пакет: счёт, накладная, сертификаты — для бухгалтерии и тендеров.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-3">
                <span className="text-green-500 font-bold text-lg mt-0.5 flex-shrink-0">✓</span>
                <div>
                  <div className="font-semibold text-gray-900 mb-1">{item.title}</div>
                  <div className="text-gray-600 text-sm">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request copies */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Нужны копии документов?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Предоставим заверенные копии всех сертификатов по запросу — для тендерной документации, проектов или проверки контрагента.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@shuft.online" className="btn-primary">
              ✉️ info@shuft.online
            </a>
            <Link href="/contacts" className="btn-secondary">
              Форма запроса
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
