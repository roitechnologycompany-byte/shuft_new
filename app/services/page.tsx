import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Услуги — монтаж, подбор, сервис фанкойлов Shuft | Shuft.Online',
  description: 'Подбор, монтаж, проектирование и сервис климатического оборудования Shuft в Москве. Официальный дилер, лицензированные специалисты.',
}

const services = [
  { title: 'Подбор оборудования', desc: 'Бесплатная консультация инженера. Подберём оптимальный фанкойл под ваш объект.', href: '/services/podbor-oborudovaniya', icon: '📋', price: 'Бесплатно' },
  { title: 'Монтаж фанкойлов', desc: 'Лицензированные монтажники. Установка за 1–3 дня. Гарантия на работы.', href: '/services/montazh-fankoilov', icon: '🔧', price: 'от 5 000 ₽' },
  { title: 'Проектирование VRF', desc: 'Разработка проекта мультизональной системы кондиционирования для вашего объекта.', href: '/services/proektirovanie-vrf', icon: '📐', price: 'Индивидуально' },
  { title: 'Сервис и ремонт', desc: 'Техническое обслуживание, чистка, замена фильтров и ремонт фанкойлов Shuft.', href: '/services/servis-i-remont', icon: '🛠️', price: 'от 2 500 ₽' },
  { title: 'Техподдержка 24/7', desc: 'Круглосуточная поддержка по телефону. Отвечаем на вопросы по настройке и эксплуатации.', href: '/services/tehpodderzhka', icon: '📞', price: 'Бесплатно' },
]

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'Услуги' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Услуги официального дилера Shuft в Москве</h1>
      <p className="text-gray-600 text-lg mb-10">Полный спектр услуг по климатическому оборудованию Shuft: от подбора до сервисного обслуживания.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <Link key={i} href={s.href} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100 p-6 flex flex-col">
            <div className="text-4xl mb-4">{s.icon}</div>
            <h2 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{s.title}</h2>
            <p className="text-gray-600 text-sm mb-4 flex-1">{s.desc}</p>
            <div className="flex items-center justify-between border-t pt-4">
              <span className="font-bold text-blue-600">{s.price}</span>
              <span className="text-blue-600 group-hover:text-blue-800">Подробнее →</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
