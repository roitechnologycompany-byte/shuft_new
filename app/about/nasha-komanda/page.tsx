import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Наша команда — специалисты по Shuft | Shuft.Online',
  description: 'Команда ООО АСПРОМСИСТЕМ: инженеры HVAC, монтажники, менеджеры. 8 лет опыта работы с оборудованием Shuft.',
}

const team = [
  { name: 'Иван Петров', role: 'Главный инженер', exp: '12 лет в HVAC', desc: 'Проектирование систем чиллер-фанкойл и VRF. Сертифицированный специалист Shuft. 80+ крупных проектов.' },
  { name: 'Мария Соколова', role: 'Руководитель отдела продаж', exp: '8 лет опыта', desc: 'Подбирает оборудование, рассчитывает КП. Ведёт крупных корпоративных клиентов.' },
  { name: 'Алексей Смирнов', role: 'Рук. монтажной бригады', exp: '10 лет монтажа', desc: 'Монтаж фанкойлов, чиллеров, VRF. Лицензированный специалист СРО.' },
  { name: 'Дмитрий Козлов', role: 'Инженер сервисного отдела', exp: '7 лет сервиса', desc: 'Диагностика и ремонт климатической техники Shuft. Специалист по гарантийным случаям.' },
  { name: 'Анна Морозова', role: 'Менеджер по клиентам', exp: '5 лет опыта', desc: 'Координация заказов, сопровождение от заявки до сдачи. Техподдержка 24/7.' },
  { name: 'Сергей Новиков', role: 'Монтажник-электрик', exp: '9 лет опыта', desc: 'Монтаж электрической части фанкойлов и VRF. Допуск до 1000 В.' },
]

export default function NashaKomandaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs items={[{ name: 'Главная', href: '/' }, { name: 'О компании', href: '/about' }, { name: 'Наша команда' }]} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Наша команда</h1>
      <p className="text-gray-600 text-lg mb-10">Профессионалы с 5–12-летним опытом в климатическом оборудовании Shuft. Инженеры, монтажники и менеджеры, которым доверяют сотни клиентов.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4"><span className="text-blue-600 font-bold text-2xl">{member.name.charAt(0)}</span></div>
            <h2 className="font-bold text-xl text-gray-900 mb-1">{member.name}</h2>
            <div className="text-blue-600 font-medium text-sm mb-1">{member.role}</div>
            <div className="text-gray-400 text-sm mb-3">{member.exp}</div>
            <p className="text-gray-600 text-sm">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
