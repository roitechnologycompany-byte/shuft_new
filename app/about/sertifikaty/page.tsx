import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Сертификаты официального дилера Shuft | Shuft.Online',
  description: 'Сертификаты партнёра Shuft, разрешения на монтаж климатического оборудования. ООО АСПРОМСИСТЕМ — официальный дилер Shuft в Москве.',
}

export default function SertificatyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'О компании', href: '/about' }, { name: 'Сертификаты' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Сертификаты и документы</h1>
      <p className="text-gray-600 text-lg mb-10">
        ООО «АСПРОМСИСТЕМ» является официальным авторизованным партнёром Shuft. Все документы подлинные и актуальные.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { title: 'Сертификат официального дилера Shuft', desc: 'Подтверждает статус авторизованного дилера Shuft в России. Выдан производителем.', icon: '🏆', valid: 'Действителен до 31.12.2026' },
          { title: 'Лицензия на монтажные работы', desc: 'Разрешение на монтаж климатического и вентиляционного оборудования. СРО.', icon: '📋', valid: 'Бессрочная' },
          { title: 'Сертификат соответствия оборудования', desc: 'Подтверждает соответствие фанкойлов Shuft российским стандартам качества.', icon: '✅', valid: 'Действителен' },
        ].map((cert, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 text-center">
            <div className="text-5xl mb-4">{cert.icon}</div>
            <h2 className="font-bold text-lg text-gray-900 mb-3">{cert.title}</h2>
            <p className="text-gray-500 text-sm mb-4">{cert.desc}</p>
            <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full inline-block">{cert.valid}</div>
          </div>
        ))}
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Нужны копии документов?</h2>
        <p className="text-gray-600 mb-6">Предоставим копии всех сертификатов по запросу для вашей проектной документации</p>
        <a href="mailto:info@shuft.online" className="btn-primary">info@shuft.online</a>
      </div>
    </div>
  )
}
