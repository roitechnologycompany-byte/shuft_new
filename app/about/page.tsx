import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'О компании Shuft.Online — официальный дилер Shuft в Москве',
  description: 'ООО АСПРОМСИСТЕМ — официальный дилер Shuft в Москве с 2016 года. 150+ проектов, 8 лет опыта, гарантия 3 года, склад в наличии.',
}

const stats = [
  { value: '150+', label: 'реализованных проектов' },
  { value: '8 лет', label: 'на рынке климатической техники' },
  { value: '500+', label: 'довольных клиентов' },
  { value: '3 года', label: 'гарантия на всё оборудование' },
]

const team = [
  {
    name: 'Иван Петров',
    role: 'Главный инженер',
    experience: 'Стаж в HVAC: 12 лет',
    desc: 'Специализация: проектирование систем чиллер-фанкойл, VRF-систем. Сертифицированный специалист Shuft.',
  },
  {
    name: 'Мария Соколова',
    role: 'Менеджер по продажам',
    experience: 'Стаж: 5 лет',
    desc: 'Помогает подобрать оптимальное оборудование под задачи клиента, рассчитывает коммерческие предложения.',
  },
  {
    name: 'Алексей Смирнов',
    role: 'Руководитель монтажной бригады',
    experience: 'Стаж: 10 лет',
    desc: 'Опыт монтажа фанкойлов, чиллеров, VRF в сложных объектах. Лицензированный специалист.',
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'О компании' }]} />

      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">О компании Shuft.Online — официальный дилер Shuft в Москве</h1>
          <p className="text-gray-700 text-lg mb-4">
            Мы — ООО «АСПРОМСИСТЕМ», официальный дилер климатической техники Shuft в Москве 
            и Московской области. Работаем с брендом Shuft с 2016 года.
          </p>
          <p className="text-gray-700 mb-6">
            С 2016 года мы специализируемся на продаже и монтаже фанкойлов, чиллеров и VRF-систем Shuft. 
            За это время реализовали более 150 проектов в офисах, торговых центрах, производственных 
            помещениях и частных домах.
          </p>
          <div className="flex gap-4">
            <Link href="/about/sertifikaty" className="btn-secondary">Наши сертификаты</Link>
            <Link href="/contacts" className="btn-primary">Связаться с нами</Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="bg-blue-600 text-white rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why trust */}
      <div className="bg-gray-50 rounded-3xl p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Почему нам доверяют</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🏆', title: 'Официальный партнёр Shuft', desc: 'Есть сертификаты, прямые поставки с завода без посредников.' },
            { icon: '📦', title: 'Склад в Москве', desc: 'Оборудование всегда в наличии. Доставка в день заказа или за 24 часа.' },
            { icon: '✅', title: 'Гарантия 3 года', desc: 'Официальная гарантия производителя на все товары без исключений.' },
            { icon: '👷', title: 'Профессиональная команда', desc: 'Лицензированные монтажники с 10+ годами опыта в HVAC.' },
            { icon: '📞', title: 'Техподдержка 24/7', desc: 'Всегда на связи — помогаем с настройкой и обслуживанием.' },
            { icon: '💰', title: 'Честные цены', desc: 'Без наценок посредников. Цены напрямую от официального дилера.' },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Наша команда</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-2xl">{member.name.charAt(0)}</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-1">{member.name}</h3>
              <div className="text-blue-600 font-medium mb-1">{member.role}</div>
              <div className="text-gray-500 text-sm mb-3">{member.experience}</div>
              <p className="text-gray-600 text-sm">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts */}
      <div className="bg-blue-600 rounded-3xl p-8 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Контакты и реквизиты</h2>
            <div className="space-y-3 text-blue-100">
              <div><span className="text-white font-semibold">ООО «АСПРОМСИСТЕМ»</span></div>
              <div>ОГРН: 1167746725662</div>
              <div>ИНН/КПП: 9729019077 / 770901001</div>
              <div>Адрес: пл. Спартаковская, д. 14, стр. 3, пом. 3Н, Москва, 105082</div>
              <div>Тел: <a href="tel:+74951203375" className="text-white font-bold">+7 (495) 120-33-75</a></div>
              <div>Email: <a href="mailto:info@shuft.online" className="text-white">info@shuft.online</a></div>
              <div>Режим работы: Пн–Пт, 9:00–18:00</div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Банковские реквизиты</h2>
            <div className="space-y-2 text-blue-100">
              <div>Банк: ПАО «Сбербанк»</div>
              <div>БИК: 044525225</div>
              <div>Кор. счёт: 30101810400000000225</div>
              <div>Расч. счёт: 40702810038000120661</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
